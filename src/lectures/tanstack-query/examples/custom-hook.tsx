import { useQuery } from "@tanstack/react-query";

type Todo = { id: number; title: string; completed: boolean };

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("/api/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 5 * 60 * 1000,
  });
}

// Usage in component:
function TodoList() {
  const { data: todos, isPending } = useTodos();

  if (isPending) return <div>Loading...</div>;
  return (
    <ul>
      {todos?.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}
