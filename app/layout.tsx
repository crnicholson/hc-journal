import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hack Club Journal",
  description: "A free scientific journal for all teens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[merri]">{children}</body>
    </html>
  );
}
