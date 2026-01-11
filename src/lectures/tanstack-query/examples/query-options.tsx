import { queryOptions, useQuery } from "@tanstack/react-query";

type Todo = { id: number; title: string; completed: boolean };

// Define query options in one place
export const todosQueryOptions = queryOptions({
  queryKey: ["todos"],
  queryFn: async (): Promise<Todo[]> => {
    const res = await fetch("/api/todos");
    return res.json();
  },
  staleTime: 5 * 60 * 1000,
});

// Use in simple query
const { data } = useQuery({
  ...todosQueryOptions,
  select: (data) => data.slice(0, 10),
});

// Use for prefetching
queryClient.prefetchQuery(todosQueryOptions);
