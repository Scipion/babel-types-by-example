import { ReactElement } from "react";
import Image from "next/image";
import { readFileSync } from "fs";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/tokyo-night-dark.min.css";
import copyIcon from "./copy-svgrepo-com.svg";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

function hl(code: string, lang: string): string {
  let value = "";
  switch (lang) {
    case "typescript":
    case "ts":
    case "flow":
    case "tsx":
      value = hljs.highlight(code, { language: "typescript" }).value;
    case "javascript":
    case "js":
    case "jsx":
    default:
      value = hljs.highlight(code, { language: "javascript" }).value;
  }

  value = value
    .replaceAll("&lt;mark&gt;", "<mark>")
    .replaceAll("&lt;/mark&gt;", "</mark>");

  return value;
}

export const Code = ({
  file,
  key,
  language = "typescript",
  children,
}: {
  file?: string;
  key?: string;
  language: string;
  children?: ReactElement;
}) => {
  let highlightedCode = "";
  if (typeof children === "string") {
    highlightedCode = hl(children, language);
  } else if (file) {
    try {
      let fileCode = readFileSync(process.cwd() + file, "utf8");
      highlightedCode = hl(fileCode, language);
    } catch (e) {
      console.log("Err:", file);
    }
  }
  if (highlightedCode.length === 0) {
    return;
  }

  return (
    <pre
      className={`language-${language} p-4 mt-2 mb-2 rounded-md relative`}
      style={{ background: "#1a1b26", color: "#9aa5ce" }}
    >
      <code
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      ></code>
    </pre>
  );
};
