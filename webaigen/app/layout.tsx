import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "webaigen | AI + Web Services",
  description: "AI automation and modern web services for businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
