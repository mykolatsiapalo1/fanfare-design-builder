import Sidebar from "./components/Sidebar/Sidebar";
import "./globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
