import { useState } from 'react';
import { Bookmark, Play } from 'lucide-react';
import { VideoCourse } from '../data/catalog';

interface VideoSectionProps {
  courses: VideoCourse[];
  savedVideoIds: string[];
  watchedLessonIds: string[];
  onToggleSaveVideo: (id: string) => void;
  onSelectCourse: (course: VideoCourse) => void;
}

export function VideoSection({
  courses,
  savedVideoIds,
  watchedLessonIds,
  onToggleSaveVideo,
  onSelectCourse,
}: VideoSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  if (courses.length === 0) {
    return null;
  }

  return (
    <section id="videos" className="py-12 lg:py-16 border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E5E2DA]">
          <div>
            <p className="text-xs font-medium text-[#525866] mb-1.5">
              القسم 01 · السلاسل المرئية والدورات التطبيقية
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141923]">
              مكتبة الفيديوهات والشروحات
            </h2>
          </div>
          <p className="text-sm text-[#525866] font-mono tabular-nums">
            {courses.length} سلاسل تعليمية متكاملة
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const isSaved = savedVideoIds.includes(course.id);
            const completedCount = course.lessons.filter((l) =>
              watchedLessonIds.includes(l.id)
            ).length;
            const imgFailed = failedImages[course.id];

            return (
              <article
                key={course.id}
                className="group bg-white border border-[#E5E2DA] rounded-xl overflow-hidden flex flex-col transition-colors hover:border-[#B9B4A6]"
              >
                {/* 16:9 Video Preview Stage */}
                <button
                  type="button"
                  onClick={() => onSelectCourse(course)}
                  className="relative aspect-video w-full overflow-hidden bg-[#1A2433] text-right cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F8A]"
                  aria-label={`فتح سلسلة ${course.title}`}
                >
                  {!imgFailed ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [course.id]: true }))
                      }
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#182230] text-[#E5E2DA] px-6 text-center">
                      <span className="text-sm font-semibold">{course.title}</span>
                    </div>
                  )}

                  {/* Measured Contrast Scrim */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-3 text-white">
                    <span className="inline-flex items-center gap-2 text-xs font-medium">
                      <span className="w-8 h-8 rounded-lg bg-[#0B4F8A] flex items-center justify-center shrink-0">
                        <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      </span>
                      <span>تشغيل الدروس</span>
                    </span>
                    <span className="font-mono text-xs tabular-nums text-white/90">
                      {course.lessonsCount} درساً · {course.totalDuration}
                    </span>
                  </div>
                </button>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#525866] mb-2">
                      <span className="font-mono tabular-nums text-[#0B4F8A] font-medium">
                        {course.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{course.disciplineLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.level}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#141923] leading-snug">
                      <button
                        type="button"
                        onClick={() => onSelectCourse(course)}
                        className="text-right hover:text-[#0B4F8A] transition-colors cursor-pointer"
                      >
                        {course.title}
                      </button>
                    </h3>

                    <p className="mt-2 text-sm text-[#525866] leading-relaxed line-clamp-2">
                      {course.subtitle}
                    </p>
                  </div>

                  <div>
                    {completedCount > 0 && (
                      <div className="mb-3 text-xs text-[#0B4F8A] font-mono tabular-nums">
                        تمت مشاهدة {completedCount} من {course.lessons.length} محاور رئيسية
                      </div>
                    )}

                    <div className="pt-4 border-t border-[#ECEAE2] flex items-center justify-between gap-3">
                      <span className="text-xs text-[#525866] truncate">
                        {course.instructor} · <span className="font-mono tabular-nums">{course.year}</span>
                      </span>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => onToggleSaveVideo(course.id)}
                          aria-label={isSaved ? 'إزالة من المحفوظات' : 'حفظ الدورة في مكتبتي'}
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
                          onClick={() => onSelectCourse(course)}
                          className="px-3.5 py-2 text-xs font-semibold text-[#141923] bg-[#F4F2EC] hover:bg-[#0B4F8A] hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          عرض الدروس
                        </button>
                      </div>
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
