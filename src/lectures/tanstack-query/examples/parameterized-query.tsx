import { useQuery } from "@tanstack/react-query";

type Todo = { id: number; title: string; completed: boolean };

function fetchTodoById(id: number): Promise<Todo> {
  return fetch(`/api/todos/${id}`).then((res) => res.json());
}

export function useTodo(todoId: number) {
  return useQuery({
    // Parameter MUST be in queryKey for proper caching
    queryKey: ["todos", todoId],
    queryFn: () => fetchTodoById(todoId),
  });
}

// Usage:
function TodoDetail({ todoId }: { todoId: number }) {
  const { data: todo, isPending } = useTodo(todoId);

  if (isPending) return <div>Loading...</div>;
  return <div>{todo?.title}</div>;
}

// Each todoId gets its own cache entry:
// ["todos", 1] => { id: 1, title: "..." }
// ["todos", 2] => { id: 2, title: "..." }

