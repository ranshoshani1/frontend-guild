import { useMutation, useQueryClient } from "@tanstack/react-query";

type Todo = { id: number; title: string; completed: boolean };

function updateTodo(todo: Todo): Promise<Todo> {
  return fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
  }).then((res) => res.json());
}

export function useOptimisticToggle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (newTodo) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // Snapshot previous value
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      // Optimistically update cache
      queryClient.setQueryData<Todo[]>(["todos"], (old) =>
        old?.map((t) => (t.id === newTodo.id ? newTodo : t))
      );

      // Return context for rollback
      return { previousTodos };
    },
    onError: (_err, _newTodo, context) => {
      // Rollback on error
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: () => {
      // Refetch to ensure sync with server
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

