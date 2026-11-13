import { Search, X } from 'lucide-react';
import { ContentKind, DISCIPLINE_OPTIONS, DisciplineKey } from '../data/catalog';

interface CatalogControlsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  contentKind: ContentKind;
  onContentKindChange: (kind: ContentKind) => void;
  discipline: DisciplineKey;
  onDisciplineChange: (discipline: DisciplineKey) => void;
  totalResults: number;
}

const KIND_TABS: { key: ContentKind; label: string }[] = [
  { key: 'all', label: 'جميع المصادر' },
  { key: 'videos', label: 'الفيديوهات والدورات' },
  { key: 'books', label: 'الكتب والأدلة' },
  { key: 'magazine', label: 'أعداد المجلة' },
];

export function CatalogControls({
  searchQuery,
  onSearchChange,
  contentKind,
  onContentKindChange,
  discipline,
  onDisciplineChange,
  totalResults,
}: CatalogControlsProps) {
  return (
    <section
      aria-label="البحث والتصفية في مكتبة بيم أرابيا"
      className="bg-[#F3F1EB] border-b border-[#E5E2DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search
              className="w-4 h-4 text-[#6B7280] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث عن كتاب أو فيديو: ISO 19650، COBie، Python، Dynamo، Civil 3D، Forma، Rhino..."
              aria-label="ابحث في الفيديوهات والكتب والمجلة"
              className="w-full pr-10 pl-10 py-2.5 text-sm bg-white text-[#141923] placeholder:text-[#7A8190] border border-[#D4D0C5] rounded-lg focus:outline-none focus:border-[#0B4F8A] focus:ring-2 focus:ring-[#0B4F8A]/15 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="مسح البحث"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#141923] p-1 cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Segmented Content Type Control */}
          <div
            role="tablist"
            aria-label="نوع المحتوى"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E7E4DC] rounded-lg"
          >
            {KIND_TABS.map((tab) => {
              const active = contentKind === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onContentKindChange(tab.key)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#141923] shadow-xs'
                      : 'text-[#525866] hover:text-[#141923]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Discipline Filter Row */}
        <div className="mt-4 pt-4 border-t border-[#E2DFD6] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="تصفية حسب التخصص">
            {DISCIPLINE_OPTIONS.map((opt) => {
              const active = discipline === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => onDisciplineChange(opt.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#0B4F8A] text-white border-[#0B4F8A]'
                      : 'bg-white text-[#454B57] border-[#D4D0C5] hover:border-[#0B4F8A] hover:text-[#0B4F8A]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#525866] font-mono tabular-nums">
            النتائج المطابقة: <strong className="text-[#141923] font-semibold">{totalResults}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
