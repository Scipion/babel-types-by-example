import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import githubIcon from "@/components/github-142-svgrepo-com.svg";
import babelIcon from "@/components/babel2-svgrepo-com.svg";
import Link from "next/link";

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
        <footer>
          <Link
            href={"https://github.com/Scipion/babel-types-by-example"}
            target="_blank"
          >
            <Image src={githubIcon} height={40} alt="Github repository" />
          </Link>
          <Link href={"https://babeljs.io/docs/babel-types"} target="_blank">
            <Image
              src={babelIcon}
              height={40}
              alt="official babel documentation"
            />
          </Link>
        </footer>
      </body>
    </html>
  );
}
