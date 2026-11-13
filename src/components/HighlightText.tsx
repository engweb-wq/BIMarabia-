import { Fragment } from 'react';

interface HighlightTextProps {
  text: string;
  query: string;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function HighlightText({ text, query }: HighlightTextProps) {
  const trimmed = query.trim();
  if (!trimmed) {
    return <>{text}</>;
  }

  const pattern = new RegExp(`(${escapeRegExp(trimmed)})`, 'gi');
  const parts = text.split(pattern);

  if (parts.length === 1) {
    return <>{text}</>;
  }

  const normalizedQuery = trimmed.toLowerCase();

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === normalizedQuery ? (
          <mark
            key={index}
            className="bg-[#FDE68A]/85 text-[#141923] rounded-xs px-0.5"
          >
            {part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
