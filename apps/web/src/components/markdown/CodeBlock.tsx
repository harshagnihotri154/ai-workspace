import { useState } from "react";
import {
    Copy,
    Check,
    FileCode2,
} from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
    children?: React.ReactNode;
    className?: string;
};

export default function CodeBlock({
    children,
    className,
}: Props) {
    const [copied, setCopied] = useState(false);

    const match = /language-(\w+)/.exec(
        className || ""
    );

    const code = String(children).replace(
        /\n$/,
        ""
    );

    async function copyCode() {
        await navigator.clipboard.writeText(code);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    // Inline code

    if (!match) {
        return (
            <code className="rounded-lg bg-zinc-800 px-1.5 py-1 font-mono text-sm text-violet-300">
                {children}
            </code>
        );
    }

    const language = match[1];

    return (
        <div className="
group
my-8
overflow-hidden
rounded-2xl
border
border-zinc-800
bg-[#101012]
shadow-2xl
transition-all
duration-300
hover:border-violet-500/40
hover:shadow-violet-500/10
">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">

                <div className="flex items-center gap-2">

                    <FileCode2
                        size={16}
                        className="text-violet-400"
                    />

                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                        {language}
                    </span>

                </div>

                <button
                    onClick={copyCode}
                    className="
flex
items-center
gap-2
rounded-lg
border
border-transparent
px-3
py-2
text-sm
font-medium
text-zinc-400
transition-all
duration-300
hover:border-zinc-700
hover:bg-zinc-800
hover:text-white
"
                >
                    {copied ? (
                        <>
                            <Check size={16} />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy size={16} />
                            Copy
                        </>
                    )}
                </button>

            </div>

            {/* Code */}

            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    margin: 0,
                    background: "#111111",
                    padding: "24px",
                    fontSize: "15px",
                    lineHeight: "1.8",
                }}
            >
                {code}
            </SyntaxHighlighter>

        </div>
    );
}