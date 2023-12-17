import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import githubIcon from "@/components/github-142-svgrepo-com.svg";
import babelIcon from "@/components/babel-svgrepo-com.svg";
import babel2Icon from "@/components/babel2-svgrepo-com.svg";
import treeIcon from "@/components/tree-structure-svgrepo-com.svg";
import Link from "next/link";

const ICON_SIZE = 50;

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
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/holiday.css@0.11.2"
        /> */}
      </head>
      <body>
        <div className="flex">{children}</div>
        <footer className="text-center">
          <div className="flex justify-center space-x-4">
            <Link
              href={"https://github.com/Scipion/babel-types-by-example"}
              target="_blank"
            >
              <Image
                src={githubIcon}
                height={ICON_SIZE}
                alt="Babel types by example repository"
              />
            </Link>
            <Link href={"https://babeljs.io/docs/babel-types"} target="_blank">
              <Image
                src={babel2Icon}
                height={ICON_SIZE}
                alt="Official Babel JS Documentation"
              />
            </Link>
            <Link href={"https://astexplorer.net/"} target="_blank">
              <Image src={treeIcon} height={ICON_SIZE} alt="AST Explorer" />
            </Link>
            <Link href={"https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md"} target="_blank">
              <Image src={babelIcon} height={ICON_SIZE} alt="Babel Parser spec" />
            </Link>
          </div>
          <p className="text-sm">
            Vectors and icons by{" "}
            <a href="https://www.svgrepo.com" target="_blank">
              SVG Repo
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
