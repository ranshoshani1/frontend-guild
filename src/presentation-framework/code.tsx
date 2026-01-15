import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@mui/joy/styles";

type Props = {
  children: string;
  width?: string;
  highlightLines?: number[];
  showLineNumbers?: boolean;
};

export default function Code({
  children,
  width = "60%",
  highlightLines = [],
  showLineNumbers = false,
}: Props) {
  const theme = useTheme();
  const customStyle = {
    scrollbarColor: `${theme.palette.background.level2} transparent`,
    borderRadius: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.3) 7px 11px 24px, rgba(0, 0, 0, 0.2) 0px 1px 4px",
    ...(width && { width }),
  };

  const hasLineHighlight = highlightLines.length > 0;

  const actualShowLineNumbers = showLineNumbers || hasLineHighlight;

  const lineProps = hasLineHighlight
    ? (line: number) => {
        return {
          style: {
            display: "block",
            backgroundColor: highlightLines.includes(line)
              ? "rgba(255, 255, 255, 0.05)"
              : "transparent",
          },
        };
      }
    : undefined;

  return (
    <SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      showLineNumbers={actualShowLineNumbers}
      wrapLines={true}
      className="code-block"
      customStyle={customStyle}
      lineProps={lineProps}
      lineNumberStyle={
        !showLineNumbers
          ? {
              display: "none",
            }
          : undefined
      }
    >
      {children}
    </SyntaxHighlighter>
  );
}
