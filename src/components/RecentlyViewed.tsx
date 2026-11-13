import { BookOpen, Play, X } from 'lucide-react';
import { BimBook, VideoCourse } from '../data/catalog';

export type RecentEntry =
  | { kind: 'video'; item: VideoCourse }
  | { kind: 'book'; item: BimBook };

interface RecentlyViewedProps {
  entries: RecentEntry[];
  onSelectVideo: (course: VideoCourse) => void;
  onSelectBook: (book: BimBook) => void;
  onClear: () => void;
}

export function RecentlyViewed({
  entries,
  onSelectVideo,
  onSelectBook,
  onClear,
}: RecentlyViewedProps) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="المحتوى المشاهد مؤخراً"
      className="bg-white border-b border-[#E5E2DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5 text-xs">
            <h2 className="font-bold text-[#141923] text-sm">شوهد مؤخراً</h2>
            <span aria-hidden="true" className="text-[#9CA3AF]">
              ·
            </span>
            <span className="font-mono tabular-nums text-[#525866]">
              آخر {entries.length} من 5 عناصر
            </span>
          </div>

          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs text-[#525866] hover:text-[#141923] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
            <span>مسح السجل</span>
          </button>
        </div>

        <div className="flex items-stretch gap-3 overflow-x-auto pb-1">
          {entries.map((entry) => {
            const isVideo = entry.kind === 'video';
            const title = entry.item.title;
            const code = isVideo ? entry.item.code : entry.item.accessionCode;
            const meta = isVideo
              ? `فيديو · ${entry.item.lessonsCount} درساً`
              : `كتاب · ${entry.item.pages} صفحة`;

            return (
              <button
                key={`${entry.kind}-${entry.item.id}`}
                type="button"
                onClick={() =>
                  isVideo
                    ? onSelectVideo(entry.item)
                    : onSelectBook(entry.item)
                }
                className="min-w-[240px] max-w-[275px] shrink-0 text-right p-3 bg-[#FAF9F6] hover:bg-[#F3F1EB] border border-[#E5E2DA] hover:border-[#0B4F8A]/50 rounded-lg transition-colors flex items-start gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F8A]"
              >
                <span className="w-8 h-8 rounded-md bg-white border border-[#E5E2DA] text-[#0B4F8A] flex items-center justify-center shrink-0 mt-0.5">
                  {isVideo ? (
                    <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  ) : (
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono tabular-nums text-[#525866] truncate">
                    <span className="text-[#0B4F8A] font-medium">{code}</span> · {meta}
                  </div>
                  <div className="mt-0.5 text-xs font-bold text-[#141923] truncate">
                    {title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
