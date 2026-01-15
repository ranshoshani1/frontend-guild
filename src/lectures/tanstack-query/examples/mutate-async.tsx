import { useMutation } from "@tanstack/react-query";

type Todo = { id: number; title: string };

function createTodo(title: string): Promise<Todo> {
  return fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify({ title }),
  }).then((res) => res.json());
}

export default function AddTodoAsync() {
  const mutation = useMutation({ mutationFn: createTodo });

  // mutate() - callbacks, no Promise
  const handleMutate = () => {
    mutation.mutate("New Todo", {
      onSuccess: (data) => console.log(data),
    });
  };

  // mutateAsync() - returns Promise, can use try/catch
  const handleMutateAsync = async () => {
    try {
      const todo = await mutation.mutateAsync("New Todo");
      console.log("Created:", todo);
      // Can chain more async operations here
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  return (
    <div>
      <button onClick={handleMutate}>mutate()</button>
      <button onClick={handleMutateAsync}>mutateAsync()</button>
    </div>
  );
}

