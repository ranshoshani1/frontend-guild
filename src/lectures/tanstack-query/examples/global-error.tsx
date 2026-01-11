import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Global error handler
queryClient.getQueryCache().config = {
  onError: (error, query) => {
    console.error(`Query ${query.queryKey} failed:`, error);
    // Show toast notification
    toast.error(`Failed to fetch: ${error.message}`);
  },
};

queryClient.getMutationCache().config = {
  onError: (error, _variables, _context, mutation) => {
    console.error("Mutation failed:", error);
    toast.error(`Operation failed: ${error.message}`);
  },
};

// Or use QueryClient constructor
const queryClient2 = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => toast.error(error.message),
  }),
  mutationCache: new MutationCache({
    onError: (error) => toast.error(error.message),
  }),
});

