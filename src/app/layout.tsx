import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "@babel/types by example",
  description: "Unofficial documentation of @babel/types with visual examples.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/holiday.css@0.11.2"
        />
      </head>
      <body>
        <div className="max-w-screen-xl m-auto">{children}</div>
      </body>
    </html>
  );
}
