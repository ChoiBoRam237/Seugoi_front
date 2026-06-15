import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: false,
      retry: 3,
      retryDelay: 1500,
    },
  },
});