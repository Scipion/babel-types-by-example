import type { MDXComponents } from "mdx/types";
import { Code } from "./components/Code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p: ({ children }) => {
      const hasBlockCode =
        Array.isArray(children) &&
        children.some(
          (child: any) => child?.type === Code && !child?.props?.inline,
        );

      // 👉 Si hay un <Code /> bloque, NO envolver en <p>
      if (hasBlockCode) {
        return <>{children}</>;
      }

      return <p>{children}</p>;
    },
    Code,
  };
}
