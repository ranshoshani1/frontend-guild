import { useQuery } from "@tanstack/react-query";

function fetchTodos() {
  return fetch("/api/todos").then((res) => res.json());
}

export default function BasicQuery() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

