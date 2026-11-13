import { ExternalLink } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/catalog';

export function Footer() {
  const platformLinks = OFFICIAL_LINKS.filter((l) => l.group === 'platforms');
  const socialLinks = OFFICIAL_LINKS.filter((l) => l.group === 'social');
  const academicLinks = OFFICIAL_LINKS.filter((l) => l.group === 'academic');

  return (
    <footer className="bg-white border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#ECEAE2]">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xl font-bold text-[#141923]">BIMarabia · بيم أرابيا</div>
            <p className="text-sm text-[#525866] leading-relaxed">
              منصة ومبادرة تعليمية متخصصة في تكنولوجيا البناء ونمذجة معلومات البناء (BIM) بإشراف
              م. عمر سليم، لدعم محترفي قطاع الهندسة والتشييد (AEC) باللغة العربية.
            </p>
          </div>

          {/* 3 Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xs font-bold text-[#141923] pb-2.5 border-b border-[#ECEAE2]">
                القنوات والمنصات التعليمية
              </h3>
              <ul className="mt-3 space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 text-xs text-[#454B57] hover:text-[#0B4F8A] transition-colors"
                    >
                      <span className="font-medium truncate">{link.label}</span>
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#141923] pb-2.5 border-b border-[#ECEAE2]">
                الشبكات المهنية والتواصل
              </h3>
              <ul className="mt-3 space-y-2.5">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 text-xs text-[#454B57] hover:text-[#0B4F8A] transition-colors"
                    >
                      <span className="font-medium truncate">{link.label}</span>
                      <span className="font-mono text-[11px] text-[#6B7280] group-hover:text-[#0B4F8A] truncate">
                        {link.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#141923] pb-2.5 border-b border-[#ECEAE2]">
                الأبحاث والمدونات والروابط
              </h3>
              <ul className="mt-3 space-y-2.5">
                {academicLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 text-xs text-[#454B57] hover:text-[#0B4F8A] transition-colors"
                    >
                      <span className="font-medium truncate">{link.label}</span>
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <span>مبادرة بيم أرابيا · BIMarabia · م. عمر سليم</span>
          <span className="font-mono">youtube.com/@omar_selim1 · bimarabia.com</span>
        </div>
      </div>
    </footer>
  );
}
