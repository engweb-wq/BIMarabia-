import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { MagazineIssue } from '../data/catalog';
import { HighlightText } from './HighlightText';

interface MagazineArchiveProps {
  issues: MagazineIssue[];
  searchQuery: string;
}

export function MagazineArchive({ issues, searchQuery }: MagazineArchiveProps) {
  const [expandedId, setExpandedId] = useState<string | null>(issues[0]?.id ?? null);

  if (issues.length === 0) {
    return null;
  }

  return (
    <section id="magazine" className="py-12 lg:py-16 border-b border-[#E5E2DA] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E5E2DA]">
          <div>
            <p className="text-xs font-medium text-[#525866] mb-1.5">
              القسم 03 · أول مجلة إلكترونية عربية متخصصة في البيم
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141923]">
              أرشيف مجلة بيم أرابيا (BIMarabia Magazine)
            </h2>
          </div>

          <a
            href="http://bimarabia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B4F8A] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
          >
            <span>زيارة أرشيف المجلة على bimarabia.com</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Clean Archival Index List */}
        <div className="mt-6 bg-white border border-[#E5E2DA] rounded-xl divide-y divide-[#E5E2DA]">
          {issues.map((issue) => {
            const isExpanded = expandedId === issue.id;

            return (
              <div key={issue.id}>
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : issue.id)}
                  aria-expanded={isExpanded}
                  className="w-full px-5 py-4 text-right flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 min-w-0">
                    <span className="font-mono text-sm font-semibold text-[#0B4F8A] tabular-nums shrink-0 w-24">
                      {issue.issueNumber}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#141923] truncate">
                        <HighlightText text={issue.title} query={searchQuery} />
                      </h3>
                      <p className="text-xs text-[#525866] mt-0.5 truncate">
                        <HighlightText text={issue.theme} query={searchQuery} />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 text-xs text-[#525866]">
                    <span>{issue.disciplineLabel}</span>
                    <span className="font-mono tabular-nums">
                      {issue.pages} صفحة · {issue.releaseDate}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#525866] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#0B4F8A]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 bg-[#FAF9F6] border-t border-[#ECEAE2]">
                    <div className="md:pr-29 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-[#141923] mb-2">
                          أبرز الأبحاث والمقالات في هذا العدد:
                        </p>
                        <ul className="space-y-1.5 text-sm text-[#454B57]">
                          {issue.featuredArticles.map((article, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="font-mono text-xs text-[#0B4F8A] mt-0.5 tabular-nums">
                                0{idx + 1}.
                              </span>
                              <span>
                                <HighlightText text={article} query={searchQuery} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="shrink-0">
                        <a
                          href={issue.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>تصفح وتحميل العدد PDF</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
