import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

type Todo = { id: number; title: string };

function fetchTodos(): Promise<Todo[]> {
  return fetch("/api/todos").then((res) => res.json());
}

// Component using suspense - no loading states needed!
function TodoList() {
  const { data: todos } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // data is ALWAYS defined here - TypeScript knows it
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

// Parent handles loading state
export default function App() {
  return (
    <Suspense fallback={<div>Loading todos...</div>}>
      <TodoList />
    </Suspense>
  );
}

