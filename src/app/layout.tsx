import type { Metadata } from "next";
import "./globals.css";
import "@/styles/preflight.css";
import {inter} from "@/styles/fonts";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "How to become millionaire?",
  description: "Try out your luck and become a millionaire!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
