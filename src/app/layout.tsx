/** @format */

import MenuContextProvider from "@/context/MenuContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FST Perkuliahan",
  description:
    "Website Perkuliahan Fakultas Sains & Teknologi Universitas Ottow Geissler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>{children}</MenuContextProvider>
      </body>
    </html>
  );
}
