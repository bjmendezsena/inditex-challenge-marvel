import { PropsWithChildren } from "react";
import { Header } from "@/components";
import "@/styles/globals.scss";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body className='overflow-x-hidden'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
