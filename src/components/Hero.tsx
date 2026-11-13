import { ArrowLeft, BookOpen, Play } from 'lucide-react';
import { HERO_STUDIO_IMAGE } from '../data/catalog';
import { useState } from 'react';

interface HeroProps {
  onBrowseVideos: () => void;
  onBrowseBooks: () => void;
}

export function Hero({ onBrowseVideos, onBrowseBooks }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="border-b border-[#E5E2DA] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Editorial Lead Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium text-[#525866] tracking-wide mb-4">
                المبادرة العربية لنمذجة معلومات البناء · بإشراف م. عمر سليم
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#141923] leading-[1.22] text-balance max-w-xl">
                المرجع العربي الشامل لعلوم البيم، الفيديوهات التطبيقية، والكتب الهندسية
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#454B57] leading-relaxed max-w-xl">
                منصة تعليمية ومكتبة معرفية مفتوحة تجمع سلاسل الشروحات المرئية، الكتب المؤلفة والمترجمة،
                وأعداد مجلة بيم أرابيا لتأهيل المهندس العربي في إدارة مشاريع التشييد الرقمي وفق المعايير الدولية.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E2DA] flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBrowseVideos}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F8A]"
              >
                <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>تصفح مكتبة الفيديوهات</span>
              </button>

              <button
                type="button"
                onClick={onBrowseBooks}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-[#141923] bg-white border border-[#D4D0C5] hover:border-[#0B4F8A] hover:text-[#0B4F8A] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F8A]"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>استكشف الكتب والمجلة</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Focal Architectural Frame */}
          <div className="lg:col-span-6 flex flex-col">
            <figure className="flex-1 flex flex-col bg-[#F1EFE9] border border-[#E5E2DA] rounded-xl overflow-hidden">
              <div className="relative flex-1 min-h-[260px] lg:min-h-[340px]">
                {!imgError ? (
                  <img
                    src={HERO_STUDIO_IMAGE}
                    alt="استوديو نمذجة معلومات البناء ومخططات الهندسة المعمارية"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full lg:absolute lg:inset-0 object-cover"
                  />
                ) : (
                  <div className="w-full h-full min-h-[260px] flex items-center justify-center bg-[#1A2433] text-[#E5E2DA] p-8">
                    <span className="text-lg font-semibold">أرشيف BIMarabia الهندسي</span>
                  </div>
                )}
              </div>
              <figcaption className="px-4 py-2.5 text-xs text-[#525866] bg-[#F6F4EE] border-t border-[#E5E2DA] flex items-center justify-between gap-4">
                <span>أرشيف النمذجة الهندسية وإدارة المعلومات</span>
                <span className="font-mono tabular-nums text-[11px] text-[#6B7280]">BIM · ISO 19650</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Architectural Index Strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 border border-[#E5E2DA] bg-white rounded-xl divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E5E2DA]">
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#141923] tabular-nums">190+</div>
            <div className="mt-1 text-sm text-[#525866]">درس ومحاضرة فيديو منظمة</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#141923] tabular-nums">18</div>
            <div className="mt-1 text-sm text-[#525866]">كتاباً ودليلاً مرجعياً بالعربية</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#141923] tabular-nums">32+</div>
            <div className="mt-1 text-sm text-[#525866]">عدداً من مجلة بيم أرابيا</div>
          </div>
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#141923] tabular-nums">100%</div>
            <div className="mt-1 text-sm text-[#525866]">محتوى تعليمي عربي مجاني</div>
          </div>
        </div>
      </div>
    </section>
  );
}
