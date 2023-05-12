import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/global.css";
import { MovieProvider } from "@/providers";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <MovieProvider.Provider>
        <Component {...pageProps} />
      </MovieProvider.Provider>
    </QueryClientProvider>
  );
}
