'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface Props {
  content: string;
}

const components: Components = {
  blockquote: ({ children }) => (
    <blockquote className="pull-quote">{children}</blockquote>
  ),
  // react-markdown v9 no longer passes `inline`; detect block code by the
  // trailing newline that mdast-util-to-hast adds to fenced blocks, or by a
  // language-* class. Everything else is inline code.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: ({ className, children, ...props }: any) => {
    const text = String(children ?? '');
    const isBlock = /language-/.test(className || '') || text.includes('\n');
    if (!isBlock) {
      return (
        <code className="inline-code" {...props}>
          {children}
        </code>
      );
    }
    return (
      <pre className="code-block">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  p: ({ children }) => <p className="body-text">{children}</p>,
  h2: ({ children }) => <h2 className="body-h2">{children}</h2>,
  h3: ({ children }) => <h3 className="body-h3">{children}</h3>,
  ul: ({ children }) => <ul className="body-ul">{children}</ul>,
  ol: ({ children }) => <ol className="body-ol">{children}</ol>,
  li: ({ children }) => <li className="body-li">{children}</li>,
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
