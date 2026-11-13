import { ArrowLeft, BookOpen, ExternalLink, Play } from 'lucide-react';
import { CHANNEL_URLS, HERO_STUDIO_IMAGE } from '../data/catalog';
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
                مبادرة BIM Arabia · قناة م. عمر سليم (@omar_selim1) لقطاع الهندسة والتشييد (AEC)
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#141923] leading-[1.24] text-balance max-w-xl">
                المرجع العربي الشامل لتكنولوجيا البناء، نمذجة معلومات البناء، والكتب الهندسية
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#454B57] leading-relaxed max-w-xl">
                منصة تعليمية تجمع كل شروحات قناة <span className="font-mono text-sm text-[#0B4F8A]">@omar_selim1</span> وكتب
                ومجلة بيم أرابيا، مصممة لرفع كفاءة المهندسين، تقديم حلول تقنية مباشرة في الأتمتة
                والذكاء الاصطناعي التوليدي، ودعم التطوير المهني المستمر والتحضير للاعتمادات الدولية.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E2DA] flex flex-wrap items-center gap-3.5">
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
                <span>الكتب والمجلة</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={CHANNEL_URLS.subscribe}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#0B4F8A] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                <span>اشترك في القناة لمتابعة الشروحات الجديدة</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
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
                <span>أرشيف النمذجة الهندسية، الأتمتة، والذكاء الاصطناعي في العمارة</span>
                <a
                  href={CHANNEL_URLS.main}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#0B4F8A] hover:underline whitespace-nowrap shrink-0"
                >
                  youtube.com/@omar_selim1
                </a>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Architectural Index Strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 border border-[#E5E2DA] bg-white rounded-xl divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E5E2DA]">
          <div className="p-5">
            <div className="font-mono text-2xl font-semibold text-[#141923] tabular-nums">208+</div>
            <div className="mt-1 text-sm text-[#525866]">درساً ومحاضرة على القناة</div>
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
            <div className="font-mono text-2xl font-semibold text-[#141923] tabular-nums">5</div>
            <div className="mt-1 text-sm text-[#525866]">محاور تقنية من ISO حتى AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
