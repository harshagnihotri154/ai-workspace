import type { Components } from "react-markdown";

import CodeBlock from "./CodeBlock";

export const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-2 text-4xl font-bold tracking-tight text-white">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mb-5 mt-10 border-b border-zinc-800 pb-2 text-3xl font-semibold text-white">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mb-4 mt-8 text-2xl font-semibold text-white">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mb-5 text-[16px] leading-8 text-zinc-300">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-white">
      {children}
    </strong>
  ),

  em: ({ children }) => (
    <em className="italic text-zinc-200">
      {children}
    </em>
  ),

  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-zinc-300">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-zinc-300">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="leading-8">
      {children}
    </li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-violet-500 pl-5 italic text-zinc-400">
      {children}
    </blockquote>
  ),

  hr: () => (
    <hr className="my-8 border-zinc-800" />
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-violet-400 underline transition hover:text-violet-300"
    >
      {children}
    </a>
  ),

  code(props) {
    return <CodeBlock {...props} />;
  },
};