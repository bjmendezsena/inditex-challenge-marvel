"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Header } from "@/components";
import { queryClient } from "@/lib";
import { FavouritesContextProvider } from "@/context";
import "@/styles/globals.scss";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouritesContextProvider>
        <html lang='en' className="overflow-x-hidden">
          <body className="overflow-x-hidden">
            <Header />
            <main>{children}</main>
          </body>
        </html>
      </FavouritesContextProvider>
    </QueryClientProvider>
  );
}
