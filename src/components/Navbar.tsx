interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
}

export function Navbar({ savedCount, onOpenSaved }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E5E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          className="text-xl font-bold tracking-tight text-[#141923] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B4F8A]"
        >
          BIMarabia · بيم أرابيا
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#525866]"
        >
          <a
            href="#top"
            className="hover:text-[#141923] hover:underline underline-offset-8 decoration-[#0B4F8A] transition-colors whitespace-nowrap shrink-0"
          >
            الرئيسية
          </a>
          <a
            href="#videos"
            className="hover:text-[#141923] hover:underline underline-offset-8 decoration-[#0B4F8A] transition-colors whitespace-nowrap shrink-0"
          >
            الفيديوهات
          </a>
          <a
            href="#books"
            className="hover:text-[#141923] hover:underline underline-offset-8 decoration-[#0B4F8A] transition-colors whitespace-nowrap shrink-0"
          >
            الكتب والأدلة
          </a>
          <a
            href="#magazine"
            className="hover:text-[#141923] hover:underline underline-offset-8 decoration-[#0B4F8A] transition-colors whitespace-nowrap shrink-0"
          >
            المجلة
          </a>
          <a
            href="#paths"
            className="hover:text-[#141923] hover:underline underline-offset-8 decoration-[#0B4F8A] transition-colors whitespace-nowrap shrink-0"
          >
            مسارات التعلم
          </a>
        </nav>

        {/* Zone 3: Single primary action button */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenSaved}
            className="px-4 py-2 text-sm font-medium text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4F8A]"
          >
            مكتبتي ({savedCount})
          </button>
        </div>
      </div>
    </header>
  );
}
