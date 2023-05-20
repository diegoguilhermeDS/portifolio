import React from "react";
import Header from "./Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface iLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: iLayoutProps) {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <div>{children}</div>
    </div>
  );
}
