import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });

      // Invalidate multiple queries
      queryClient.invalidateQueries({ queryKey: ["todos", "list"] });

      // Invalidate exact match only
      queryClient.invalidateQueries({
        queryKey: ["todos"],
        exact: true,
      });
    },
  });

  return (
    <button onClick={() => mutation.mutate({ title: "New" })}>Add Todo</button>
  );
}
