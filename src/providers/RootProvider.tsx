import { PropsWithChildren } from "react";
import { queryClient } from "@/lib";
import { QueryClientProvider } from "@tanstack/react-query";
import { FavouritesContextProvider } from "@/context";

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesContextProvider>{children}</FavouritesContextProvider>
    </QueryClientProvider>
  );
};
