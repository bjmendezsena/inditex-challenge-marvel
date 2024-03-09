"use client";
import { PropsWithChildren } from "react";
import { Header } from "@/components";
import { RootProvider } from "@/providers";
import "@/styles/globals.scss";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <RootProvider>
      <html lang='en' className='overflow-x-hidden'>
        <body className='overflow-x-hidden'>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </RootProvider>
  );
}
