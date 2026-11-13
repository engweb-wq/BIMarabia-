import { useEffect, useState } from 'react';
import { Bookmark, ExternalLink, X } from 'lucide-react';
import { BimBook } from '../data/catalog';
import { BookCoverArtwork } from './CoverArtwork';

interface BookModalProps {
  book: BimBook | null;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export function BookModal({ book, isSaved, onToggleSave, onClose }: BookModalProps) {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);

  useEffect(() => {
    setActiveChapterIdx(0);
  }, [book?.id]);

  useEffect(() => {
    if (!book) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [book, onClose]);

  if (!book) return null;

  const activeChapter = book.chapters[activeChapterIdx] ?? book.chapters[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141923]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#FAF9F6] border border-[#D4D0C5] rounded-xl overflow-hidden shadow-xl my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-4 bg-white border-b border-[#E5E2DA] flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-xs text-[#525866] flex items-center gap-2">
              <span className="font-mono text-[#0B4F8A] font-medium tabular-nums">
                {book.accessionCode}
              </span>
              <span aria-hidden="true">·</span>
              <span>{book.disciplineLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{book.edition}</span>
            </div>
            <h2
              id="book-modal-title"
              className="text-lg sm:text-xl font-bold text-[#141923] truncate mt-0.5"
            >
              {book.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleSave(book.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isSaved
                  ? 'bg-[#0B4F8A]/10 border-[#0B4F8A]/30 text-[#0B4F8A]'
                  : 'bg-white border-[#D4D0C5] text-[#454B57] hover:text-[#141923]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} aria-hidden="true" />
              <span>{isSaved ? 'محفوظ' : 'حفظ'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق نافذة الكتاب"
              className="p-2 text-[#525866] hover:text-[#141923] bg-[#F3F1EB] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8">
          {/* Accession Monograph Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-[#E5E2DA]">
            <div className="md:col-span-4 max-w-[200px] mx-auto md:mx-0 w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#E5E2DA] bg-white">
              <BookCoverArtwork book={book} />
            </div>

            <div className="md:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
                {book.description}
              </p>

              {/* Accession Metadata Grid */}
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E2DA] text-xs">
                <div>
                  <dt className="text-[#6B7280] mb-1">المؤلف</dt>
                  <dd className="font-semibold text-[#141923]">{book.author}</dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">عدد الصفحات</dt>
                  <dd className="font-mono font-semibold text-[#141923] tabular-nums">
                    {book.pages} صفحة
                  </dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">سنة الإصدار</dt>
                  <dd className="font-mono font-semibold text-[#141923] tabular-nums">
                    {book.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#6B7280] mb-1">اللغة</dt>
                  <dd className="font-semibold text-[#141923]">{book.language}</dd>
                </div>
              </dl>

              <div className="pt-2">
                <a
                  href={book.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>تحميل وقراءة الكتاب عبر بوابة بيم أرابيا</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Chapter Index & Excerpt Reader */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 space-y-2">
              <h3 className="text-sm font-bold text-[#141923] mb-3">فهرس فصول الكتاب</h3>
              <div className="border border-[#E5E2DA] rounded-xl divide-y divide-[#ECEAE2] bg-white overflow-hidden">
                {book.chapters.map((chapter, idx) => {
                  const active = idx === activeChapterIdx;
                  return (
                    <button
                      key={chapter.number}
                      type="button"
                      onClick={() => setActiveChapterIdx(idx)}
                      className={`w-full px-4 py-3 text-right transition-colors cursor-pointer ${
                        active ? 'bg-[#0B4F8A]/8' : 'hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs text-[#525866] mb-1">
                        <span className="font-mono font-medium text-[#0B4F8A]">
                          {chapter.number}
                        </span>
                        <span className="font-mono tabular-nums">ص {chapter.pages}</span>
                      </div>
                      <div
                        className={`text-sm leading-snug ${
                          active ? 'font-bold text-[#0B4F8A]' : 'font-medium text-[#141923]'
                        }`}
                      >
                        {chapter.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-7 bg-white border border-[#E5E2DA] rounded-xl p-6">
              <div className="text-xs font-mono text-[#525866] mb-2">
                مقتطف للقراءة · {activeChapter.number} (ص {activeChapter.pages})
              </div>
              <h4 className="text-lg font-bold text-[#141923] pb-3 border-b border-[#ECEAE2]">
                {activeChapter.title}
              </h4>
              <p className="mt-4 text-base text-[#272D38] leading-loose max-w-prose">
                {activeChapter.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
