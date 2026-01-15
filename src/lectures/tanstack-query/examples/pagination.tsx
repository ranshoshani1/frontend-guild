import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";

type Page = { data: Todo[]; nextPage: number | null };
type Todo = { id: number; title: string };

function fetchTodosPage(page: number): Promise<Page> {
  return fetch(`/api/todos?page=${page}`).then((res) => res.json());
}

export default function PaginatedTodos() {
  const [page, setPage] = useState(1);

  const { data, isPending, isPlaceholderData } = useQuery({
    queryKey: ["todos", "list", page],
    queryFn: () => fetchTodosPage(page),
    placeholderData: keepPreviousData, // Keep showing old data while fetching
  });

  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul style={{ opacity: isPlaceholderData ? 0.5 : 1 }}>
          {data?.data.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      )}
      <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        Previous
      </button>
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={!data?.nextPage}
      >
        Next
      </button>
    </div>
  );
}

