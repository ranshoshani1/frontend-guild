import { useState, useEffect } from "react";

type Todo = { id: number; title: string };

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchTodos() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/todos");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (!cancelled) setTodos(data);
      } catch (err) {
        if (!cancelled) setError(err as Error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchTodos();
    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
