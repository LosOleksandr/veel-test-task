'use client';
import * as React from 'react';
import {
  QueryClientProvider,
  QueryClient,
  HydrationBoundary,
} from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

const QueryProvider: React.FC<Props> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary>{children}</HydrationBoundary>
      </QueryClientProvider>
    </>
  );
};

export default QueryProvider;
