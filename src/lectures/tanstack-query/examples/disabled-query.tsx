import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Todo = { id: number; title: string };

function fetchTodoById(id: number): Promise<Todo> {
  return fetch(`/api/todos/${id}`).then((res) => res.json());
}

export default function DisabledQuery() {
  const [todoId, setTodoId] = useState<number | null>(null);

  const { data, isPending, fetchStatus } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodoById(todoId!),
    enabled: todoId !== null, // Query won't run until todoId is set
  });

  // When disabled:
  // - isPending: true (no data yet)
  // - fetchStatus: "idle" (not fetching)
  // 
  // When enabled and fetching:
  // - isPending: true
  // - fetchStatus: "fetching"

  return (
    <div>
      <button onClick={() => setTodoId(1)}>Load Todo 1</button>
      <button onClick={() => setTodoId(2)}>Load Todo 2</button>
      {isPending && fetchStatus === "fetching" && <div>Loading...</div>}
      {data && <div>{data.title}</div>}
    </div>
  );
}

