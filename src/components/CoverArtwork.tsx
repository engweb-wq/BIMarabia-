import { useState } from 'react';
import { BimBook } from '../data/catalog';

interface BookCoverArtworkProps {
  book: BimBook;
  className?: string;
}

export function BookCoverArtwork({ book, className = '' }: BookCoverArtworkProps) {
  const [imgError, setImgError] = useState(false);

  if (book.coverImage && !imgError) {
    return (
      <img
        src={book.coverImage}
        alt={`غلاف كتاب ${book.title}`}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  // Architectural SVG monograph fallback/original cover variants
  const paletteByVariant: Record<
    BimBook['coverVariant'],
    { bg: string; stroke: string; accent: string }
  > = {
    wireframe: { bg: '#F4F1EA', stroke: '#0B4F8A', accent: '#141923' },
    orthographic: { bg: '#EFECE4', stroke: '#233247', accent: '#9A5B1A' },
    parametric: { bg: '#F5F2EB', stroke: '#0B4F8A', accent: '#334155' },
    grid: { bg: '#162130', stroke: '#93C5FD', accent: '#E2E8F0' },
    coordination: { bg: '#1E242B', stroke: '#E5A93C', accent: '#60A5FA' },
    gis: { bg: '#EEF2F6', stroke: '#0B4F8A', accent: '#0F766E' },
  };

  const p = paletteByVariant[book.coverVariant];

  return (
    <div
      className={`w-full h-full flex flex-col justify-between p-5 select-none ${className}`}
      style={{ backgroundColor: p.bg, color: p.accent }}
    >
      <div className="flex items-center justify-between text-[11px] font-mono opacity-80">
        <span>{book.accessionCode}</span>
        <span>BIMARABIA</span>
      </div>

      {/* Crisp Architectural Vector Schematic */}
      <svg
        viewBox="0 0 180 180"
        className="w-full max-w-[150px] mx-auto my-2"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${book.id}`} width="18" height="18" patternUnits="userSpaceOnUse">
            <path
              d="M 18 0 L 0 0 0 18"
              fill="none"
              stroke={p.stroke}
              strokeOpacity="0.2"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect width="180" height="180" fill={`url(#grid-${book.id})`} />
        {book.coverVariant === 'grid' && (
          <g fill="none" stroke={p.stroke} strokeWidth="1.4">
            <rect x="28" y="34" width="124" height="112" />
            <line x1="28" y1="72" x2="152" y2="72" />
            <line x1="28" y1="110" x2="152" y2="110" />
            <line x1="70" y1="34" x2="70" y2="146" />
            <line x1="110" y1="34" x2="110" y2="146" />
            <circle cx="70" cy="72" r="5" fill={p.accent} />
            <circle cx="110" cy="110" r="5" fill={p.accent} />
          </g>
        )}
        {book.coverVariant === 'coordination' && (
          <g fill="none" strokeWidth="1.5">
            <polygon points="90,26 150,60 150,126 90,158 30,126 30,60" stroke={p.accent} />
            <polyline points="30,60 90,94 150,60" stroke={p.accent} />
            <line x1="90" y1="94" x2="90" y2="158" stroke={p.accent} />
            <path d="M 46 82 L 134 82 M 46 106 L 134 106" stroke={p.stroke} strokeDasharray="4 3" />
          </g>
        )}
        {book.coverVariant === 'gis' && (
          <g fill="none" stroke={p.stroke} strokeWidth="1.3">
            <circle cx="90" cy="90" r="58" />
            <ellipse cx="90" cy="90" rx="58" ry="22" />
            <ellipse cx="90" cy="90" rx="22" ry="58" />
            <polygon points="90,54 118,74 118,112 90,130 62,112 62,74" stroke={p.accent} strokeWidth="1.6" />
          </g>
        )}
        {(book.coverVariant === 'wireframe' ||
          book.coverVariant === 'orthographic' ||
          book.coverVariant === 'parametric') && (
          <g fill="none" stroke={p.stroke} strokeWidth="1.4">
            <rect x="35" y="35" width="110" height="110" />
            <line x1="35" y1="145" x2="145" y2="35" />
            <circle cx="90" cy="90" r="34" stroke={p.accent} />
          </g>
        )}
      </svg>

      <div className="border-t pt-2.5 text-xs font-semibold leading-snug" style={{ borderColor: `${p.stroke}33` }}>
        {book.title}
      </div>
    </div>
  );
}
