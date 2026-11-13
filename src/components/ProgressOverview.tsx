import { ArrowLeft, BookOpen, Play } from 'lucide-react';
import { BIM_BOOKS, VIDEO_COURSES } from '../data/catalog';

interface ProgressOverviewProps {
  watchedLessonIds: string[];
  readChapterKeys: string[];
  onJumpToVideos: () => void;
  onJumpToBooks: () => void;
}

export function ProgressOverview({
  watchedLessonIds,
  readChapterKeys,
  onJumpToVideos,
  onJumpToBooks,
}: ProgressOverviewProps) {
  const totalLessons = VIDEO_COURSES.reduce(
    (sum, course) => sum + course.lessons.length,
    0
  );
  const watchedCount = VIDEO_COURSES.reduce(
    (sum, course) =>
      sum +
      course.lessons.filter((lesson) => watchedLessonIds.includes(lesson.id))
        .length,
    0
  );
  const completedCoursesCount = VIDEO_COURSES.filter((course) =>
    course.lessons.every((lesson) => watchedLessonIds.includes(lesson.id))
  ).length;
  const videoPercentage =
    totalLessons > 0 ? Math.round((watchedCount / totalLessons) * 100) : 0;

  const totalChapters = BIM_BOOKS.reduce(
    (sum, book) => sum + book.chapters.length,
    0
  );
  const readChaptersCount = BIM_BOOKS.reduce(
    (sum, book) =>
      sum +
      book.chapters.filter((ch) =>
        readChapterKeys.includes(`${book.id}::${ch.number}`)
      ).length,
    0
  );
  const completedBooksCount = BIM_BOOKS.filter((book) =>
    book.chapters.every((ch) =>
      readChapterKeys.includes(`${book.id}::${ch.number}`)
    )
  ).length;
  const chapterPercentage =
    totalChapters > 0 ? Math.round((readChaptersCount / totalChapters) * 100) : 0;

  const totalUnits = totalLessons + totalChapters;
  const completedUnits = watchedCount + readChaptersCount;
  const overallPercentage =
    totalUnits > 0 ? Math.round((completedUnits / totalUnits) * 100) : 0;

  return (
    <section
      aria-label="ملخص التقدم التعليمي"
      className="bg-[#FAF9F6] border-b border-[#E5E2DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
          <div>
            <p className="text-xs font-medium text-[#525866] mb-1">
              متابعة الإنجاز الشخصي في مكتبة بيم أرابيا
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#141923]">
              ملخص التقدم التعليمي
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-[#525866] font-mono tabular-nums">
            الإنجاز الإجمالي:{' '}
            <strong className="text-[#141923] font-semibold">
              {overallPercentage}%
            </strong>{' '}
            ({completedUnits} من {totalUnits} وحدة تعليمية)
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Video Lessons Progress Card */}
          <div className="bg-white border border-[#E5E2DA] rounded-xl p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#0B4F8A]/10 text-[#0B4F8A] flex items-center justify-center shrink-0">
                  <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#141923]">
                    تقدم الدروس المرئية
                  </h3>
                  <p className="text-xs text-[#525866] mt-0.5 font-mono tabular-nums">
                    {watchedCount} من {totalLessons} دروس مكتملة ·{' '}
                    {completedCoursesCount} سلاسل منجزة
                  </p>
                </div>
              </div>

              <span className="font-mono text-2xl font-bold text-[#0B4F8A] tabular-nums shrink-0">
                {videoPercentage}%
              </span>
            </div>

            <div>
              <div
                role="progressbar"
                aria-valuenow={videoPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="نسبة الدروس المرئية المشاهدة"
                className="w-full h-2 bg-[#ECEAE2] rounded-sm overflow-hidden"
              >
                <div
                  className="h-full bg-[#0B4F8A] transition-all duration-300"
                  style={{ width: `${videoPercentage}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                <span className="text-[#525866]">
                  {watchedCount === 0
                    ? 'ابدأ بمشاهدة أول درس لتتبع تقدمك تلقائياً'
                    : 'تستمر المتابعة عبر جميع السلاسل المرئية'}
                </span>
                <button
                  type="button"
                  onClick={onJumpToVideos}
                  className="inline-flex items-center gap-1 font-semibold text-[#0B4F8A] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>عرض الفيديوهات</span>
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Book Chapters Progress Card */}
          <div className="bg-white border border-[#E5E2DA] rounded-xl p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#141923]">
                    تقدم قراءة الكتب
                  </h3>
                  <p className="text-xs text-[#525866] mt-0.5 font-mono tabular-nums">
                    {readChaptersCount} من {totalChapters} فصول مقروءة ·{' '}
                    {completedBooksCount} كتب مكتملة
                  </p>
                </div>
              </div>

              <span className="font-mono text-2xl font-bold text-[#0F766E] tabular-nums shrink-0">
                {chapterPercentage}%
              </span>
            </div>

            <div>
              <div
                role="progressbar"
                aria-valuenow={chapterPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="نسبة فصول الكتب المقروءة"
                className="w-full h-2 bg-[#ECEAE2] rounded-sm overflow-hidden"
              >
                <div
                  className="h-full bg-[#0F766E] transition-all duration-300"
                  style={{ width: `${chapterPercentage}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                <span className="text-[#525866]">
                  {readChaptersCount === 0
                    ? 'افتح أي كتاب وحدد الفصول المقروءة لحفظ إنجازك'
                    : 'يتم حفظ الفصول المقروءة تلقائياً في متصفحك'}
                </span>
                <button
                  type="button"
                  onClick={onJumpToBooks}
                  className="inline-flex items-center gap-1 font-semibold text-[#0F766E] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>عرض الكتب</span>
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
