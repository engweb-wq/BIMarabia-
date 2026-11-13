import { useEffect, useState } from 'react';
import { Bookmark, Check, ExternalLink, Play, X } from 'lucide-react';
import { VideoCourse } from '../data/catalog';

interface VideoModalProps {
  course: VideoCourse | null;
  isSaved: boolean;
  watchedLessonIds: string[];
  onToggleSave: (id: string) => void;
  onToggleWatched: (lessonId: string) => void;
  onClose: () => void;
}

export function VideoModal({
  course,
  isSaved,
  watchedLessonIds,
  onToggleSave,
  onToggleWatched,
  onClose,
}: VideoModalProps) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  useEffect(() => {
    setActiveLessonIndex(0);
    setIsPlayingPreview(false);
  }, [course?.id]);

  useEffect(() => {
    if (!course) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [course, onClose]);

  if (!course) return null;

  const activeLesson = course.lessons[activeLessonIndex] ?? course.lessons[0];
  const isWatched = watchedLessonIds.includes(activeLesson.id);
  const completedInCourse = course.lessons.filter((l) =>
    watchedLessonIds.includes(l.id)
  ).length;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141923]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-[#FAF9F6] border border-[#D4D0C5] rounded-xl overflow-hidden shadow-xl my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="px-5 py-4 bg-white border-b border-[#E5E2DA] flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-xs text-[#525866] flex items-center gap-2">
              <span className="font-mono text-[#0B4F8A] font-medium tabular-nums">
                {course.code}
              </span>
              <span aria-hidden="true">·</span>
              <span>{course.disciplineLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                {completedInCourse}/{course.lessons.length} دروس مكتملة
              </span>
            </div>
            <h2
              id="video-modal-title"
              className="text-lg sm:text-xl font-bold text-[#141923] truncate mt-0.5"
            >
              {course.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleSave(course.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                isSaved
                  ? 'bg-[#0B4F8A]/10 border-[#0B4F8A]/30 text-[#0B4F8A]'
                  : 'bg-white border-[#D4D0C5] text-[#454B57] hover:text-[#141923]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} aria-hidden="true" />
              <span>{isSaved ? 'محفوظة' : 'حفظ'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق نافذة الفيديو"
              className="p-2 text-[#525866] hover:text-[#141923] bg-[#F3F1EB] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Two-Zone Classroom Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Main Stage: Active Lesson & Interactive Player */}
          <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col gap-5 border-b lg:border-b-0 lg:border-l border-[#E5E2DA]">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[#141923] border border-[#2A3241]">
              <img
                src={course.thumbnail}
                alt={activeLesson.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isPlayingPreview ? 'opacity-45' : 'opacity-75'
                }`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20"
                aria-hidden="true"
              />

              <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between gap-3 text-xs font-mono text-white/85">
                  <span>
                    الدرس {activeLesson.number} · {course.instructor}
                  </span>
                  <span className="tabular-nums">{activeLesson.duration}</span>
                </div>

                <div className="my-auto text-center max-w-md mx-auto">
                  {!isPlayingPreview ? (
                    <button
                      type="button"
                      onClick={() => setIsPlayingPreview(true)}
                      className="inline-flex items-center gap-3 px-5 py-3 bg-[#0B4F8A] hover:bg-[#093E6E] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-md"
                    >
                      <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                      <span>معاينة محاور الدرس التفاعلية</span>
                    </button>
                  ) : (
                    <div className="bg-[#141923]/90 border border-white/15 rounded-lg p-4 text-right space-y-2">
                      <div className="text-xs font-mono text-[#93C5FD]">
                        ملخص العرض الهندسي للدرس {activeLesson.number}
                      </div>
                      <p className="text-sm leading-relaxed text-white/95">
                        {activeLesson.summary}
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/15">
                        <a
                          href={course.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#93C5FD] hover:underline"
                        >
                          <span>فتح المشاهدة الكاملة على قناة يوتيوب</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                        <button
                          type="button"
                          onClick={() => setIsPlayingPreview(false)}
                          className="text-xs text-white/75 hover:text-white cursor-pointer"
                        >
                          إغلاق المعاينة
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-sm font-semibold truncate">{activeLesson.title}</div>
              </div>
            </div>

            {/* Active Lesson Details & Actions */}
            <div className="bg-white border border-[#E5E2DA] rounded-xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-[#141923]">
                    {activeLesson.number}. {activeLesson.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#454B57] leading-relaxed">
                    {activeLesson.summary}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#ECEAE2] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-[#525866]">
                  المحاور التقنية:{' '}
                  <span className="font-mono text-[#141923]">
                    {activeLesson.keyTopics.join(' · ')}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => onToggleWatched(activeLesson.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                      isWatched
                        ? 'bg-[#0F766E]/10 border-[#0F766E]/30 text-[#0F766E]'
                        : 'bg-white border-[#D4D0C5] text-[#141923] hover:border-[#0B4F8A]'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{isWatched ? 'تمت المشاهدة' : 'تحديد كمكتمل'}</span>
                  </button>

                  <a
                    href={course.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>مشاهدة على YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Curriculum Sidebar */}
          <aside className="lg:col-span-5 p-5 sm:p-6 bg-white">
            <div className="pb-3 border-b border-[#E5E2DA] flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-[#141923]">فهرس دروس السلسلة</h3>
              <span className="text-xs font-mono tabular-nums text-[#525866]">
                {course.lessonsCount} درساً إجمالاً
              </span>
            </div>

            <p className="mt-3 text-xs text-[#525866] leading-relaxed">{course.description}</p>

            <div className="mt-4 divide-y divide-[#ECEAE2] border border-[#E5E2DA] rounded-xl overflow-hidden">
              {course.lessons.map((lesson, idx) => {
                const active = idx === activeLessonIndex;
                const watched = watchedLessonIds.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => {
                      setActiveLessonIndex(idx);
                      setIsPlayingPreview(false);
                    }}
                    className={`w-full px-4 py-3 text-right flex items-start justify-between gap-3 transition-colors cursor-pointer ${
                      active ? 'bg-[#0B4F8A]/8' : 'bg-white hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span
                        className={`font-mono text-xs font-semibold tabular-nums mt-0.5 shrink-0 ${
                          active ? 'text-[#0B4F8A]' : 'text-[#6B7280]'
                        }`}
                      >
                        {lesson.number}
                      </span>
                      <div className="min-w-0">
                        <div
                          className={`text-sm font-medium leading-snug ${
                            active ? 'text-[#0B4F8A] font-semibold' : 'text-[#141923]'
                          }`}
                        >
                          {lesson.title}
                        </div>
                        {watched && (
                          <div className="mt-1 text-[11px] font-medium text-[#0F766E]">
                            مكتمل ✓
                          </div>
                        )}
                      </div>
                    </div>

                    <span className="font-mono text-xs tabular-nums text-[#525866] shrink-0 mt-0.5">
                      {lesson.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
