import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdownComponents } from "./MarkdownComponents";

type Props = {
  content: string;
};

export default function MarkdownRenderer({
  content,
}: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
}