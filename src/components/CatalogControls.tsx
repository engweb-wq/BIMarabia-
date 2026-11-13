import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import {
  BIM_BOOKS,
  ContentKind,
  DISCIPLINE_OPTIONS,
  DisciplineKey,
  MAGAZINE_ISSUES,
  VIDEO_COURSES,
} from '../data/catalog';
import { HighlightText } from './HighlightText';

interface CatalogControlsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  contentKind: ContentKind;
  onContentKindChange: (kind: ContentKind) => void;
  discipline: DisciplineKey;
  onDisciplineChange: (discipline: DisciplineKey) => void;
  totalResults: number;
}

interface SearchSuggestion {
  term: string;
  category: string;
  matchCount: number;
}

const KIND_TABS: { key: ContentKind; label: string }[] = [
  { key: 'all', label: 'جميع المصادر' },
  { key: 'videos', label: 'الفيديوهات والدورات' },
  { key: 'books', label: 'الكتب والأدلة' },
  { key: 'magazine', label: 'أعداد المجلة' },
];

const CURATED_CATALOG_TOPICS: { term: string; category: string }[] = [
  { term: 'Revit', category: 'برمجيات النمذجة' },
  { term: 'Dynamo', category: 'الأتمتة والبرمجة' },
  { term: 'ISO 19650', category: 'المعايير الدولية' },
  { term: 'Python', category: 'الأتمتة والبرمجة' },
  { term: 'Navisworks', category: 'التنسيق وكشف التعارضات' },
  { term: 'Civil 3D', category: 'البنية التحتية' },
  { term: 'COBie', category: 'تسليم البيانات والمرافق' },
  { term: 'Autodesk Forma', category: 'الذكاء الاصطناعي التوليدي' },
  { term: 'Snaptrude', category: 'النمذجة السحابية' },
  { term: 'VizMaker', category: 'الإظهار التوليدي' },
  { term: 'Rhino', category: 'النمذجة البارامترية' },
  { term: 'Blender', category: 'النمذجة مفتوحة المصدر' },
  { term: 'Twinmotion', category: 'الإظهار الزمني الحقيقي' },
  { term: 'IFC', category: 'تبادل البيانات OpenBIM' },
  { term: 'الذكاء الاصطناعي', category: 'العمارة والتصميم الحضري' },
  { term: 'البنية التحتية', category: 'المشاريع الكبرى' },
  { term: 'الطريق إلى البيم', category: 'كتب مرجعية' },
  { term: 'التنسيق', category: 'إدارة التعارضات' },
];

function countCatalogMatches(term: string): number {
  const q = term.toLowerCase();
  let count = 0;

  for (const course of VIDEO_COURSES) {
    const text = [
      course.title,
      course.subtitle,
      course.description,
      course.disciplineLabel,
      ...course.lessons.map((l) => `${l.title} ${l.keyTopics.join(' ')}`),
    ]
      .join(' ')
      .toLowerCase();
    if (text.includes(q)) count += 1;
  }

  for (const book of BIM_BOOKS) {
    const text = [
      book.title,
      book.subtitle,
      book.description,
      book.disciplineLabel,
      ...book.chapters.map((c) => c.title),
    ]
      .join(' ')
      .toLowerCase();
    if (text.includes(q)) count += 1;
  }

  for (const issue of MAGAZINE_ISSUES) {
    const text = [
      issue.title,
      issue.theme,
      issue.disciplineLabel,
      ...issue.featuredArticles,
    ]
      .join(' ')
      .toLowerCase();
    if (text.includes(q)) count += 1;
  }

  return count;
}

export function CatalogControls({
  searchQuery,
  onSearchChange,
  contentKind,
  onContentKindChange,
  discipline,
  onDisciplineChange,
  totalResults,
}: CatalogControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const allSuggestions = useMemo<SearchSuggestion[]>(() => {
    const seen = new Set<string>();
    const results: SearchSuggestion[] = [];

    const addSuggestion = (term: string, category: string) => {
      const clean = term.trim();
      const lower = clean.toLowerCase();
      if (!clean || seen.has(lower)) return;
      const matchCount = countCatalogMatches(clean);
      if (matchCount > 0) {
        seen.add(lower);
        results.push({ term: clean, category, matchCount });
      }
    };

    for (const item of CURATED_CATALOG_TOPICS) {
      addSuggestion(item.term, item.category);
    }

    for (const course of VIDEO_COURSES) {
      for (const lesson of course.lessons) {
        for (const topic of lesson.keyTopics) {
          addSuggestion(topic, course.disciplineLabel);
        }
      }
    }

    for (const book of BIM_BOOKS) {
      addSuggestion(book.title, 'كتاب مرجعي');
    }

    return results;
  }, []);

  const filteredSuggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return allSuggestions.slice(0, 6);
    }

    const startsWithMatches: SearchSuggestion[] = [];
    const containsMatches: SearchSuggestion[] = [];

    for (const item of allSuggestions) {
      const lower = item.term.toLowerCase();
      if (lower === q) continue;
      if (lower.startsWith(q)) {
        startsWithMatches.push(item);
      } else if (lower.includes(q)) {
        containsMatches.push(item);
      }
    }

    return [...startsWithMatches, ...containsMatches].slice(0, 7);
  }, [allSuggestions, searchQuery]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [searchQuery, isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSuggestion = (term: string) => {
    onSearchChange(term);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredSuggestions.length === 0) {
      if (e.key === 'ArrowDown' && filteredSuggestions.length > 0) {
        setIsOpen(true);
        setActiveIndex(0);
        e.preventDefault();
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredSuggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? filteredSuggestions.length - 1 : prev - 1
      );
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(filteredSuggestions[activeIndex].term);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const showDropdown = isOpen && filteredSuggestions.length > 0;
  const listboxId = 'catalog-search-suggestions';

  return (
    <section
      aria-label="البحث والتصفية في مكتبة بيم أرابيا"
      className="bg-[#F3F1EB] border-b border-[#E5E2DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input with Real-Time Autocomplete Dropdown */}
          <div ref={containerRef} className="relative flex-1 max-w-xl">
            <Search
              className="w-4 h-4 text-[#6B7280] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={showDropdown}
              aria-controls={listboxId}
              aria-activedescendant={
                activeIndex >= 0 ? `suggestion-opt-${activeIndex}` : undefined
              }
              value={searchQuery}
              onFocus={() => setIsOpen(true)}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setIsOpen(true);
              }}
              onKeyDown={handleKeyDown}
              placeholder="ابحث عن كتاب أو فيديو: ISO 19650، COBie، Python، Dynamo، Civil 3D، Forma، Rhino..."
              aria-label="ابحث في الفيديوهات والكتب والمجلة"
              className="w-full pr-10 pl-10 py-2.5 text-sm bg-white text-[#141923] placeholder:text-[#7A8190] border border-[#D4D0C5] rounded-lg focus:outline-none focus:border-[#0B4F8A] focus:ring-2 focus:ring-[#0B4F8A]/15 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  onSearchChange('');
                  setIsOpen(true);
                }}
                aria-label="مسح البحث"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#141923] p-1 cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}

            {showDropdown && (
              <div
                id={listboxId}
                role="listbox"
                aria-label="اقتراحات البحث"
                className="absolute z-40 inset-x-0 top-full mt-1.5 bg-white border border-[#D4D0C5] rounded-xl shadow-lg overflow-hidden"
              >
                <div className="px-3.5 py-2 bg-[#FAF9F6] border-b border-[#ECEAE2] flex items-center justify-between text-[11px] text-[#525866]">
                  <span>
                    {searchQuery.trim()
                      ? 'اقتراحات مطابقة من محتوى المكتبة'
                      : 'موضوعات شائعة في القناة والكتب'}
                  </span>
                  <span className="font-mono">↑↓ للتنقل · Enter للاختيار</span>
                </div>

                <ul className="divide-y divide-[#ECEAE2] max-h-72 overflow-y-auto">
                  {filteredSuggestions.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <li
                        key={item.term}
                        id={`suggestion-opt-${idx}`}
                        role="option"
                        aria-selected={isActive}
                      >
                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => handleSelectSuggestion(item.term)}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={`w-full px-3.5 py-2.5 text-right flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                            isActive ? 'bg-[#0B4F8A]/8' : 'hover:bg-[#FAF9F6]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Search
                              className="w-3.5 h-3.5 text-[#6B7280] shrink-0"
                              aria-hidden="true"
                            />
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-[#141923] truncate">
                                <HighlightText text={item.term} query={searchQuery} />
                              </div>
                              <div className="text-[11px] text-[#525866] truncate">
                                {item.category}
                              </div>
                            </div>
                          </div>

                          <span className="font-mono text-xs tabular-nums text-[#0B4F8A] shrink-0">
                            {item.matchCount} {item.matchCount === 1 ? 'مصدر' : 'مصادر'}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
