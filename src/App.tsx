import { useEffect, useMemo, useState } from 'react';
import {
  BIM_BOOKS,
  BimBook,
  ContentKind,
  DisciplineKey,
  MAGAZINE_ISSUES,
  VIDEO_COURSES,
  VideoCourse,
} from './data/catalog';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogControls } from './components/CatalogControls';
import { VideoSection } from './components/VideoSection';
import { BookSection } from './components/BookSection';
import { MagazineArchive } from './components/MagazineArchive';
import { LearningPaths } from './components/LearningPaths';
import { VideoModal } from './components/VideoModal';
import { BookModal } from './components/BookModal';
import { SavedDrawer } from './components/SavedDrawer';
import { Footer } from './components/Footer';
import { RecentEntry, RecentlyViewed } from './components/RecentlyViewed';
import { ProgressOverview } from './components/ProgressOverview';

interface RecentItemRef {
  kind: 'video' | 'book';
  id: string;
}

const STORAGE_KEYS = {
  savedVideos: 'bimarabia_saved_videos_v1',
  savedBooks: 'bimarabia_saved_books_v1',
  watchedLessons: 'bimarabia_watched_lessons_v1',
  readChapters: 'bimarabia_read_chapters_v1',
  recentlyViewed: 'bimarabia_recently_viewed_v1',
};

function readRecentStorage(): RecentItemRef[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.recentlyViewed);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is RecentItemRef =>
        Boolean(item) &&
        (item.kind === 'video' || item.kind === 'book') &&
        typeof item.id === 'string'
    ).slice(0, 5);
  } catch {
    return [];
  }
}

function readStorageArray(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentKind, setContentKind] = useState<ContentKind>('all');
  const [discipline, setDiscipline] = useState<DisciplineKey>('all');

  const [savedVideoIds, setSavedVideoIds] = useState<string[]>(() =>
    readStorageArray(STORAGE_KEYS.savedVideos)
  );
  const [savedBookIds, setSavedBookIds] = useState<string[]>(() =>
    readStorageArray(STORAGE_KEYS.savedBooks)
  );
  const [watchedLessonIds, setWatchedLessonIds] = useState<string[]>(() =>
    readStorageArray(STORAGE_KEYS.watchedLessons)
  );
  const [readChapterKeys, setReadChapterKeys] = useState<string[]>(() =>
    readStorageArray(STORAGE_KEYS.readChapters)
  );
  const [recentRefs, setRecentRefs] = useState<RecentItemRef[]>(() =>
    readRecentStorage()
  );

  const [selectedVideo, setSelectedVideo] = useState<VideoCourse | null>(null);
  const [selectedBook, setSelectedBook] = useState<BimBook | null>(null);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.savedVideos, JSON.stringify(savedVideoIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedVideoIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.savedBooks, JSON.stringify(savedBookIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedBookIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.watchedLessons, JSON.stringify(watchedLessonIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [watchedLessonIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.readChapters, JSON.stringify(readChapterKeys));
    } catch {
      // Ignore storage quota errors
    }
  }, [readChapterKeys]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.recentlyViewed, JSON.stringify(recentRefs));
    } catch {
      // Ignore storage quota errors
    }
  }, [recentRefs]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredVideos = useMemo(() => {
    if (contentKind !== 'all' && contentKind !== 'videos') return [];
    return VIDEO_COURSES.filter((course) => {
      const matchesDiscipline = discipline === 'all' || course.discipline === discipline;
      if (!matchesDiscipline) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        course.title,
        course.subtitle,
        course.description,
        course.disciplineLabel,
        course.instructor,
        ...course.lessons.map((l) => `${l.title} ${l.keyTopics.join(' ')}`),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [contentKind, discipline, normalizedQuery]);

  const filteredBooks = useMemo(() => {
    if (contentKind !== 'all' && contentKind !== 'books') return [];
    return BIM_BOOKS.filter((book) => {
      const matchesDiscipline = discipline === 'all' || book.discipline === discipline;
      if (!matchesDiscipline) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        book.title,
        book.subtitle,
        book.description,
        book.author,
        book.disciplineLabel,
        ...book.chapters.map((c) => c.title),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [contentKind, discipline, normalizedQuery]);

  const filteredIssues = useMemo(() => {
    if (contentKind !== 'all' && contentKind !== 'magazine') return [];
    return MAGAZINE_ISSUES.filter((issue) => {
      const matchesDiscipline = discipline === 'all' || issue.discipline === discipline;
      if (!matchesDiscipline) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        issue.issueNumber,
        issue.title,
        issue.theme,
        issue.disciplineLabel,
        ...issue.featuredArticles,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [contentKind, discipline, normalizedQuery]);

  const totalResults = filteredVideos.length + filteredBooks.length + filteredIssues.length;

  const toggleSaveVideo = (id: string) => {
    setSavedVideoIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSaveBook = (id: string) => {
    setSavedBookIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleWatchedLesson = (lessonId: string) => {
    setWatchedLessonIds((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  const toggleReadChapter = (chapterKey: string) => {
    setReadChapterKeys((prev) =>
      prev.includes(chapterKey) ? prev.filter((key) => key !== chapterKey) : [...prev, chapterKey]
    );
  };

  const recordRecentItem = (kind: 'video' | 'book', id: string) => {
    setRecentRefs((prev) => [
      { kind, id },
      ...prev.filter((entry) => !(entry.kind === kind && entry.id === id)),
    ].slice(0, 5));
  };

  const handleSelectVideo = (course: VideoCourse) => {
    recordRecentItem('video', course.id);
    setSelectedVideo(course);
  };

  const handleSelectBook = (book: BimBook) => {
    recordRecentItem('book', book.id);
    setSelectedBook(book);
  };

  const recentEntries = useMemo<RecentEntry[]>(() => {
    const resolved: RecentEntry[] = [];
    for (const ref of recentRefs) {
      if (ref.kind === 'video') {
        const course = VIDEO_COURSES.find((v) => v.id === ref.id);
        if (course) resolved.push({ kind: 'video', item: course });
      } else {
        const book = BIM_BOOKS.find((b) => b.id === ref.id);
        if (book) resolved.push({ kind: 'book', item: book });
      }
    }
    return resolved;
  }, [recentRefs]);

  const resetFilters = () => {
    setSearchQuery('');
    setContentKind('all');
    setDiscipline('all');
  };

  const savedVideos = useMemo(
    () => VIDEO_COURSES.filter((v) => savedVideoIds.includes(v.id)),
    [savedVideoIds]
  );

  const savedBooks = useMemo(
    () => BIM_BOOKS.filter((b) => savedBookIds.includes(b.id)),
    [savedBookIds]
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141923]">
      <Navbar
        savedCount={savedVideos.length + savedBooks.length}
        onOpenSaved={() => setSavedDrawerOpen(true)}
      />

      <main className="flex-1">
        <RecentlyViewed
          entries={recentEntries}
          onSelectVideo={handleSelectVideo}
          onSelectBook={handleSelectBook}
          onClear={() => setRecentRefs([])}
        />

        <Hero
          onBrowseVideos={() => {
            setContentKind('all');
            scrollToSection('videos');
          }}
          onBrowseBooks={() => {
            setContentKind('all');
            scrollToSection('books');
          }}
        />

        <ProgressOverview
          watchedLessonIds={watchedLessonIds}
          readChapterKeys={readChapterKeys}
          onJumpToVideos={() => {
            setContentKind('all');
            scrollToSection('videos');
          }}
          onJumpToBooks={() => {
            setContentKind('all');
            scrollToSection('books');
          }}
        />

        <CatalogControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          contentKind={contentKind}
          onContentKindChange={setContentKind}
          discipline={discipline}
          onDisciplineChange={setDiscipline}
          totalResults={totalResults}
        />

        {totalResults === 0 ? (
          <section className="py-16 border-b border-[#E5E2DA]">
            <div className="max-w-xl mx-auto px-4 text-center space-y-3">
              <h2 className="text-xl font-bold text-[#141923]">
                لم يتم العثور على مصادر مطابقة لبحثك
              </h2>
              <p className="text-sm text-[#525866]">
                جرّب البحث بكلمات عامة مثل «Revit» أو «Dynamo» أو «ISO 19650»، أو أعد ضبط
                التصفية لعرض جميع الفيديوهات والكتب.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-2 px-4 py-2 text-sm font-semibold text-white bg-[#0B4F8A] hover:bg-[#083D6B] rounded-lg transition-colors cursor-pointer"
              >
                إعادة عرض جميع المصادر
              </button>
            </div>
          </section>
        ) : (
          <>
            <VideoSection
              courses={filteredVideos}
              searchQuery={searchQuery}
              activeDiscipline={discipline}
              onSelectDiscipline={setDiscipline}
              savedVideoIds={savedVideoIds}
              watchedLessonIds={watchedLessonIds}
              onToggleSaveVideo={toggleSaveVideo}
              onSelectCourse={handleSelectVideo}
            />

            <BookSection
              books={filteredBooks}
              searchQuery={searchQuery}
              savedBookIds={savedBookIds}
              readChapterKeys={readChapterKeys}
              onToggleSaveBook={toggleSaveBook}
              onSelectBook={handleSelectBook}
            />

            <MagazineArchive issues={filteredIssues} searchQuery={searchQuery} />
          </>
        )}

        <LearningPaths
          onSelectPath={(selectedDiscipline) => {
            setContentKind('all');
            setSearchQuery('');
            setDiscipline(selectedDiscipline);
          }}
        />
      </main>

      <Footer />

      <VideoModal
        course={selectedVideo}
        isSaved={selectedVideo ? savedVideoIds.includes(selectedVideo.id) : false}
        watchedLessonIds={watchedLessonIds}
        onToggleSave={toggleSaveVideo}
        onToggleWatched={toggleWatchedLesson}
        onClose={() => setSelectedVideo(null)}
      />

      <BookModal
        book={selectedBook}
        isSaved={selectedBook ? savedBookIds.includes(selectedBook.id) : false}
        readChapterKeys={readChapterKeys}
        onToggleSave={toggleSaveBook}
        onToggleReadChapter={toggleReadChapter}
        onClose={() => setSelectedBook(null)}
      />

      <SavedDrawer
        open={savedDrawerOpen}
        savedVideos={savedVideos}
        savedBooks={savedBooks}
        onClose={() => setSavedDrawerOpen(false)}
        onSelectVideo={handleSelectVideo}
        onSelectBook={handleSelectBook}
        onRemoveVideo={toggleSaveVideo}
        onRemoveBook={toggleSaveBook}
      />
    </div>
  );
}
