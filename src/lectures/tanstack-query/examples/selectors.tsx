import { useQuery } from "@tanstack/react-query";

type Todo = { id: number; title: string; completed: boolean };

function fetchTodos(): Promise<Todo[]> {
  return fetch("/api/todos").then((res) => res.json());
}

// Select transforms data AFTER fetching
// Runs on every render, but query cache stores FULL data

export function useCompletedTodoCount() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (todos) => todos.filter((t) => t.completed).length,
  });
}

export function useTodoTitles() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (todos) => todos.map((t) => t.title),
  });
}

// Both hooks share the same cache entry!
// Component only re-renders when SELECT result changes

