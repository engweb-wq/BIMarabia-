import { useEffect } from 'react';
import { BookOpen, Play, Trash2, X } from 'lucide-react';
import { BimBook, VideoCourse } from '../data/catalog';

interface SavedDrawerProps {
  open: boolean;
  savedVideos: VideoCourse[];
  savedBooks: BimBook[];
  onClose: () => void;
  onSelectVideo: (course: VideoCourse) => void;
  onSelectBook: (book: BimBook) => void;
  onRemoveVideo: (id: string) => void;
  onRemoveBook: (id: string) => void;
}

export function SavedDrawer({
  open,
  savedVideos,
  savedBooks,
  onClose,
  onSelectVideo,
  onSelectBook,
  onRemoveVideo,
  onRemoveBook,
}: SavedDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const isEmpty = savedVideos.length === 0 && savedBooks.length === 0;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141923]/60 backdrop-blur-xs flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-drawer-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF9F6] h-full border-r border-[#D4D0C5] flex flex-col shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 bg-white border-b border-[#E5E2DA] flex items-center justify-between gap-4">
          <div>
            <h2 id="saved-drawer-title" className="text-lg font-bold text-[#141923]">
              مكتبتي المحفوظة
            </h2>
            <p className="text-xs text-[#525866] font-mono tabular-nums mt-0.5">
              {savedVideos.length} دورات فيديو · {savedBooks.length} كتب
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق المكتبة المحفوظة"
            className="p-2 text-[#525866] hover:text-[#141923] bg-[#F3F1EB] rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {isEmpty ? (
            <div className="bg-white border border-[#E5E2DA] rounded-xl p-6 text-center space-y-2 mt-6">
              <p className="text-sm font-semibold text-[#141923]">لا توجد عناصر محفوظة بعد</p>
              <p className="text-xs text-[#525866] leading-relaxed">
                اضغط على أيقونة الحفظ في أي سلسلة فيديو أو كتاب هندسي لإضافته إلى قائمتك الخاصة هنا.
              </p>
            </div>
          ) : (
            <>
              {savedVideos.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-[#525866] mb-3">
                    سلاسل الفيديوهات المحفوظة
                  </h3>
                  <div className="space-y-2.5">
                    {savedVideos.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white border border-[#E5E2DA] rounded-xl p-3.5 flex items-center justify-between gap-3"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectVideo(course);
                          }}
                          className="text-right min-w-0 flex-1 cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 text-xs text-[#0B4F8A] font-mono tabular-nums">
                            <Play className="w-3 h-3 fill-current shrink-0" aria-hidden="true" />
                            <span>{course.lessonsCount} درساً</span>
                          </div>
                          <div className="text-sm font-semibold text-[#141923] group-hover:text-[#0B4F8A] truncate mt-0.5">
                            {course.title}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => onRemoveVideo(course.id)}
                          aria-label={`إزالة ${course.title}`}
                          className="p-2 text-[#6B7280] hover:text-[#DC2626] rounded-lg cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {savedBooks.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-[#525866] mb-3">الكتب والأدلة المحفوظة</h3>
                  <div className="space-y-2.5">
                    {savedBooks.map((book) => (
                      <div
                        key={book.id}
                        className="bg-white border border-[#E5E2DA] rounded-xl p-3.5 flex items-center justify-between gap-3"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onSelectBook(book);
                          }}
                          className="text-right min-w-0 flex-1 cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 text-xs text-[#0B4F8A] font-mono tabular-nums">
                            <BookOpen className="w-3 h-3 shrink-0" aria-hidden="true" />
                            <span>{book.pages} صفحة</span>
                          </div>
                          <div className="text-sm font-semibold text-[#141923] group-hover:text-[#0B4F8A] truncate mt-0.5">
                            {book.title}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => onRemoveBook(book.id)}
                          aria-label={`إزالة ${book.title}`}
                          className="p-2 text-[#6B7280] hover:text-[#DC2626] rounded-lg cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
