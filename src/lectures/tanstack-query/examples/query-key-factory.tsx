export const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, "detail"] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
};

// Usage:
// todoKeys.all          => ['todos']
// todoKeys.lists()      => ['todos', 'list']
// todoKeys.list('done') => ['todos', 'list', { filters: 'done' }]
// todoKeys.detail(5)    => ['todos', 'detail', 5]

// In your query:
useQuery({
  queryKey: todoKeys.detail(todoId),
  queryFn: () => fetchTodoById(todoId),
});
