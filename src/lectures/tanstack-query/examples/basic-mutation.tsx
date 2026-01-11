import { useMutation } from "@tanstack/react-query";

type Todo = { id: number; title: string };
type NewTodo = { title: string };

function createTodo(newTodo: NewTodo): Promise<Todo> {
  return fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
  }).then((res) => res.json());
}

export default function AddTodo() {
  const mutation = useMutation({
    mutationFn: createTodo,
    // Hook-level callbacks
    onSuccess: (data) => console.log("Created:", data),
    onError: (error) => console.log("Error:", error),
    onSettled: () => console.log("Done"),
  });

  const handleClick = () => {
    // mutate() - fire and forget
    mutation.mutate(
      { title: "New Todo" },
      {
        // Call-level callbacks (run AFTER hook-level)
        onSuccess: (data) => console.log("Also created:", data),
      }
    );
  };

  return (
    <button onClick={handleClick} disabled={mutation.isPending}>
      {mutation.isPending ? "Creating..." : "Add Todo"}
    </button>
  );
}

