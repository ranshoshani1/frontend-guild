import { useQuery, useQueryClient } from "@tanstack/react-query";

type Todo = { id: number; title: string };

function fetchTodos(): Promise<Todo[]> {
  return fetch("/api/todos").then((res) => res.json());
}

function fetchTodoById(id: number): Promise<Todo> {
  return fetch(`/api/todos/${id}`).then((res) => res.json());
}

export default function TodoList() {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const handleHover = (todoId: number) => {
    // Prefetch on hover - data ready when user clicks
    queryClient.prefetchQuery({
      queryKey: ["todos", todoId],
      queryFn: () => fetchTodoById(todoId),
      staleTime: 60 * 1000, // Won't prefetch if data is fresh
    });
  };

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id} onMouseEnter={() => handleHover(todo.id)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

