// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

hljs.registerLanguage("kestrel", (hljs) => {
  const KEYWORDS = {
    className: "keyword",
    beginKeywords:
      "match if else fn let pub type struct enum import impl for where trait",
  };
  const STRING = {
    className: "string",
    variants: [{ begin: /"/, end: /"/ }],
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0,
  };
  const CHAR = {
    className: "string",
    begin: /'/,
    end: /'/,
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0,
  };

  const DISCARD_NAME = {
    className: "comment",
    begin: "\\b_[a-z][a-z0-9_]*\\b",
    relevance: 0,
  };
  const NUMBER = {
    className: "number",
    variants: [
      {
        // dec, float
        begin: "\\b\\d(?:_?\\d+)*(?:\\.(?:\\d(?:_?\\d+)*)*)?",
      },
    ],
    relevance: 0,
  };

  return {
    name: "kestrel",
    aliases: ["kestrel"],
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      STRING,
      CHAR,
      {
        className: "attribute",
        begin: "@[a-zA-Z_][a-zA-Z0-9_]*",
      },
      KEYWORDS,
      {
        // Type names and constructors
        className: "title",
        begin: "\\b[A-Z][A-Za-z0-9]*\\b",
        relevance: 0,
      },
      {
        className: "operator",
        begin: "[+\\-*/%!=<>&|.]+",
        relevance: 0,
      },
      // {
      //   className: "variable",
      //   begin: "\\b[a-z][a-z0-9_]*\\b",
      //   relevance: 0,
      // },
      DISCARD_NAME,
      NUMBER,
    ],
  };
});

hljs.initHighlightingOnLoad();
