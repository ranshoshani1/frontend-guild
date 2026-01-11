import { useInfiniteQuery } from "@tanstack/react-query";

type Page = { data: Todo[]; nextCursor: number | null };
type Todo = { id: number; title: string };

function fetchTodosCursor(cursor: number): Promise<Page> {
  return fetch(`/api/todos?cursor=${cursor}`).then((res) => res.json());
}

export default function InfiniteTodos() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["todos", "infinite"],
    queryFn: ({ pageParam }) => fetchTodosCursor(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return (
    <div>
      <ul>
        {data?.pages.flatMap((page) =>
          page.data.map((todo) => <li key={todo.id}>{todo.title}</li>)
        )}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : hasNextPage ? "Load More" : "No more"}
      </button>
    </div>
  );
}

