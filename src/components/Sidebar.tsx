import Image from "next/image";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";
import githubIcon from "@/components/github-142-svgrepo-com.svg";
import babelIcon from "@/components/babel-svgrepo-com.svg";
import babel2Icon from "@/components/babel2-svgrepo-com.svg";
import treeIcon from "@/components/tree-structure-svgrepo-com.svg";

const ICON_SIZE = 30;

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <aside className="sidebar flex flex-col top-0 sticky overflow-y-auto max-h-screen min-w-max px-3">
      <header>
        <h3>
          <a href="/" className="text-black">
            @babel/types by example
          </a>
        </h3>
      </header>
      <nav>{children}</nav>
      <footer className="text-center mt-5 mb-10">
        <p>
          <a
            href="https://github.com/Scipion/babel-types-by-example"
            className="text-orange-500"
          >
            @babel/types by example
          </a>
        </p>
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
          <Link
            href={
              "https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md"
            }
            target="_blank"
          >
            <Image src={babelIcon} height={ICON_SIZE} alt="Babel Parser spec" />
          </Link>
        </div>
      </footer>
    </aside>
  );
};
