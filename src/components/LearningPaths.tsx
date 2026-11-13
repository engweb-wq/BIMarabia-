import { ArrowLeft } from 'lucide-react';
import { DisciplineKey, LEARNING_PATHS, LearningPath } from '../data/catalog';

interface LearningPathsProps {
  onSelectPath: (discipline: DisciplineKey) => void;
}

export function LearningPaths({ onSelectPath }: LearningPathsProps) {
  const handleChoosePath = (path: LearningPath) => {
    onSelectPath(path.discipline);
    const el = document.getElementById('videos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="paths" className="py-12 lg:py-16 bg-[#F3F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2DFD6]">
          <div>
            <p className="text-xs font-medium text-[#525866] mb-1.5">
              القسم 04 · التدرج المعرفي للمهندس العربي
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141923]">
              مسارات التعلم المنظمة (كتب + فيديوهات)
            </h2>
          </div>
          <p className="text-sm text-[#525866]">
            اختر مسارك المهني لتصفية الكتب والسلاسل المرئية المناسبة لك
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARNING_PATHS.map((path) => (
            <article
              key={path.id}
              className="bg-white border border-[#E5E2DA] rounded-xl p-6 flex flex-col justify-between gap-5"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#525866] mb-2">
                  <span className="font-mono font-semibold text-[#0B4F8A] tabular-nums">
                    {path.index}. {path.role}
                  </span>
                  <span className="font-mono tabular-nums">{path.durationEstimate}</span>
                </div>

                <h3 className="text-xl font-bold text-[#141923] leading-snug">{path.title}</h3>

                <p className="mt-2.5 text-sm text-[#454B57] leading-relaxed">
                  {path.description}
                </p>

                <ul className="mt-4 pt-4 border-t border-[#ECEAE2] space-y-1.5 text-xs text-[#525866]">
                  {path.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0B4F8A] font-bold" aria-hidden="true">
                        —
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-[#525866] font-mono tabular-nums">
                  {path.recommendedVideoIds.length} دورات · {path.recommendedBookIds.length} كتب مرجعية
                </span>

                <button
                  type="button"
                  onClick={() => handleChoosePath(path)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B4F8A] bg-[#0B4F8A]/8 hover:bg-[#0B4F8A] hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>عرض مصادر المسار</span>
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
