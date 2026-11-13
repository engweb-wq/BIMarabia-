import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-[#141923]">BIMarabia · بيم أرابيا</div>
            <p className="mt-1.5 text-sm text-[#525866] max-w-lg leading-relaxed">
              مبادرة عربية تطوعية لنشر علوم نمذجة معلومات البناء (BIM) والتحول الرقمي في التشييد
              عبر الكتب المجانية، مجلة بيم أرابيا، وسلاسل الشروحات المرئية.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#454B57]">
            <a
              href="https://bimarabia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0B4F8A] transition-colors whitespace-nowrap"
            >
              <span>الموقع الرسمي bimarabia.com</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://bimarabia.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0B4F8A] transition-colors whitespace-nowrap"
            >
              <span>مكتبة الكتب والمجلة</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@BIMarabia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0B4F8A] transition-colors whitespace-nowrap"
            >
              <span>قناة يوتيوب بيم أرابيا</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#ECEAE2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <span>بوابة المعرفة الهندسية العربية · BIMarabia</span>
          <span>متاح لجميع المهندسين والباحثين مجاناً</span>
        </div>
      </div>
    </footer>
  );
}
