import { Bookmark, BookOpen } from 'lucide-react';
import { BimBook } from '../data/catalog';
import { BookCoverArtwork } from './CoverArtwork';
import { HighlightText } from './HighlightText';

interface BookSectionProps {
  books: BimBook[];
  searchQuery: string;
  savedBookIds: string[];
  readChapterKeys: string[];
  onToggleSaveBook: (id: string) => void;
  onSelectBook: (book: BimBook) => void;
}

export function BookSection({
  books,
  searchQuery,
  savedBookIds,
  readChapterKeys,
  onToggleSaveBook,
  onSelectBook,
}: BookSectionProps) {
  if (books.length === 0) {
    return null;
  }

  return (
    <section id="books" className="py-12 lg:py-16 border-b border-[#E5E2DA] bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2DFD6]">
          <div>
            <p className="text-xs font-medium text-[#525866] mb-1.5">
              القسم 02 · الإصدارات الهندسية والمراجع المفتوحة
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141923]">
              مكتبة الكتب والأدلة التطبيقية
            </h2>
          </div>
          <p className="text-sm text-[#525866] font-mono tabular-nums">
            {books.length} مراجع متاحة للقراءة والتحميل
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => {
            const isSaved = savedBookIds.includes(book.id);
            const readChaptersCount = book.chapters.filter((ch) =>
              readChapterKeys.includes(`${book.id}::${ch.number}`)
            ).length;

            return (
              <article
                key={book.id}
                className="bg-white border border-[#E5E2DA] rounded-xl p-5 flex flex-col sm:flex-row gap-5 transition-colors hover:border-[#B9B4A6]"
              >
                {/* 3:4 Monograph Cover */}
                <button
                  type="button"
                  onClick={() => onSelectBook(book)}
                  className="w-32 sm:w-36 aspect-[3/4] shrink-0 rounded-lg overflow-hidden border border-[#E5E2DA] bg-[#F4F1EA] mx-auto sm:mx-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F8A]"
                  aria-label={`فتح تفاصيل كتاب ${book.title}`}
                >
                  <BookCoverArtwork book={book} />
                </button>

                {/* Book Metadata & Actions */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="text-xs text-[#525866] mb-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono tabular-nums text-[#0B4F8A] font-medium">
                        {book.accessionCode}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{book.disciplineLabel}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#141923] leading-snug">
                      <button
                        type="button"
                        onClick={() => onSelectBook(book)}
                        className="text-right hover:text-[#0B4F8A] transition-colors cursor-pointer"
                      >
                        <HighlightText text={book.title} query={searchQuery} />
                      </button>
                    </h3>

                    <p className="mt-1.5 text-xs text-[#525866] leading-relaxed line-clamp-3">
                      <HighlightText text={book.subtitle} query={searchQuery} />
                    </p>

                    <p className="mt-3 text-xs text-[#454B57]">
                      تأليف: <span className="font-medium text-[#141923]">{book.author}</span>
                    </p>

                    {readChaptersCount > 0 && (
                      <div className="mt-2 text-xs text-[#0F766E] font-mono tabular-nums">
                        تمت قراءة {readChaptersCount} من {book.chapters.length} فصول
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#ECEAE2] flex items-center justify-between gap-2">
                    <span className="text-xs font-mono tabular-nums text-[#525866]">
                      {book.pages} ص · {book.year}
                    </span>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => onToggleSaveBook(book.id)}
                        aria-label={isSaved ? 'إزالة الكتاب من المحفوظات' : 'حفظ الكتاب'}
                        aria-pressed={isSaved}
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                          isSaved
                            ? 'bg-[#0B4F8A]/10 border-[#0B4F8A]/30 text-[#0B4F8A]'
                            : 'bg-white border-[#E5E2DA] text-[#525866] hover:text-[#141923] hover:border-[#C9C4B8]'
                        }`}
                      >
                        <Bookmark
                          className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`}
                          aria-hidden="true"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectBook(book)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>قراءة الفهرس</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
