import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function StudentSuccessStories() {
  const stories = useMemo(
    () => [
      {
        id: 1,
        name: "Mayuri Samanta",
        category: "students",
        role: "SDE1, LogWinTech Pvt. Ltd.",
        initials: "MS",
        text: "From Navsari, near Surat. A bright student. After facing pressure to marry, she trained in Java at Gryphon Academy. Her dedication led to an SDE1 role at LogWinTech, showcasing the power of continuous learning.",
      },
      {
        id: 2,
        name: "Anjali Rao",
        category: "colleges",
        role: "Data Analyst, TechCorp Solutions",
        initials: "AR",
        text: "From Navsari, near Surat. Excellent student. Escaping traditional expectations, she trained intensely at Gryphon Academy. Anjali is now a successful Data Analyst, reshaping her future through tech skills.",
      },
      {
        id: 3,
        name: "Karan Singh",
        category: "corporate",
        role: "DevOps Engineer, CloudSolutions Inc.",
        initials: "KS",
        text: "Background in commerce, then failed CA exams. Facing pressure, he joined Gryphon Academy and mastered Java. Now a DevOps Engineer, Karan's journey shows the potential of switching career paths.",
      },
      {
        id: 4,
        name: "Priyanka Patel",
        category: "students",
        role: "Frontend Developer, WebWorks Digital",
        initials: "PP",
        text: "A bright student from Surat. After family pressure and CA exam setbacks, Priyanka turned to Gryphon Academy. She is now a Frontend Developer, with a career in tech built on intense learning.",
      },
      {
        id: 5,
        name: "Ajay Pawar",
        category: "students",
        role: "Software Engineer Intern, Gryphon Academy Pvt. Ltd.",
        initials: "AP",
        text: "The OG Member of IT Team",
      },
      {
        id: 6,
        name: "Sneha Iyer",
        category: "colleges",
        role: "Data Analyst, QuantHive",
        initials: "SI",
        text: "Sneha had theory but lacked confidence in practical application. Live projects and review cycles at Gryphon Academy made her interview ready. She now solves business problems as a Data Analyst.",
      },
      {
        id: 7,
        name: "Aarav Mehta",
        category: "corporate",
        role: "Backend Engineer, NovaStack",
        initials: "AM",
        text: "Aarav came from a non-CS background and built strong fundamentals through project-based learning. With steady mentoring, he moved into backend development and cracked multiple interviews.",
      },
      {
        id: 8,
        name: "Nisha Kulkarni",
        category: "colleges",
        role: "QA Engineer, PixelForge",
        initials: "NK",
        text: "Nisha improved her testing depth through hands-on automation and sprint simulations. She now works as a QA Engineer and contributes to release quality from day one.",
      },
      {
        id: 9,
        name: "Imran Shaikh",
        category: "corporate",
        role: "Support Analyst, TechBridge",
        initials: "IS",
        text: "Imran strengthened communication, debugging, and ticket handling through practical labs. He transitioned confidently into IT support and quickly became a dependable team member.",
      },
      {
        id: 10,
        name: "ABC",
        category: "corporate",
        role: "XYZ, ABC Pvt. Ltd.",
        initials: "ABC",
        text: "irbne[iobnfeio[bnoeifnbeio bnieofbninb inbifnbin birngigrig jdfjfkdjkdgkdjgkj gkgjkgjkg jkgjkgjkg jkgjkgj kgjkgjkgjk gjkgjkgjk gjkgjkgj kgjkg jkgjk fhoe98rhger 8obgworbgrg",
      },
      {
        id: 11,
        name: "Vansh Singla",
        category: "colleges",
        role: "Software Developer, Gryphon Academy",
        initials: "VS",
        text: "Vansh strengthened communication, debugging, and ticket handling through practical labs. He transitioned confidently into IT support and quickly became a dependable team member.",
      },
      {
        id: 12,
        name: "Vansh Singla",
        category: "colleges",
        role: "Software Developer, Gryphon Academy",
        initials: "VS",
        text: "Vansh likes to code",
      },
    ],
    [],
  );

  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [pendingStartIndex, setPendingStartIndex] = useState(null);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");
  const [trackTranslateY, setTrackTranslateY] = useState(0);
  const [isTrackTransitionOn, setIsTrackTransitionOn] = useState(false);
  const [desktopCardHeight, setDesktopCardHeight] = useState(420);

  const pageShiftPxRef = useRef(436);
  const slideTimeoutRef = useRef(null);

  useEffect(() => {
    const getCount = () => {
      if (typeof window === "undefined") return 3;
      const width = window.innerWidth;
      if (width >= 1024) return 3;
      if (width >= 768) return 2;
      return 1;
    };

    const applyCount = () => setVisibleCount(getCount());
    applyCount();
    window.addEventListener("resize", applyCount);
    return () => window.removeEventListener("resize", applyCount);
  }, []);

  useEffect(() => {
    const applyDesktopCardHeight = () => {
      if (typeof window === "undefined") return;

      if (window.innerWidth < 1024) {
        setDesktopCardHeight(420);
        return;
      }

      // Space budget: heading + paddings + controls + margins.
      const reservedHeight = 300;
      const gridGap = 16;
      const usableHeight = Math.max(window.innerHeight - reservedHeight, 0);
      const perCard = Math.floor((usableHeight - gridGap) / 2);
      const bounded = Math.max(220, Math.min(380, perCard));
      setDesktopCardHeight(bounded);
    };

    applyDesktopCardHeight();
    window.addEventListener("resize", applyDesktopCardHeight);
    return () => window.removeEventListener("resize", applyDesktopCardHeight);
  }, []);

  useEffect(() => {
    return () => {
      if (slideTimeoutRef.current) {
        window.clearTimeout(slideTimeoutRef.current);
      }
    };
  }, []);

  const categoryOrder = useMemo(
    () => ["students", "colleges", "corporate"],
    [],
  );

  const storiesByCategory = useMemo(() => {
    const grouped = { students: [], colleges: [], corporate: [] };
    stories.forEach((story) => {
      const key = story.category;
      if (grouped[key]) grouped[key].push(story);
    });
    return grouped;
  }, [stories]);

  const cardsPerCategory = useMemo(
    () => Math.max(Math.floor(visibleCount / categoryOrder.length), 1),
    [categoryOrder.length, visibleCount],
  );

  const totalPages = useMemo(() => {
    const maxCategorySize = Math.max(
      ...categoryOrder.map((category) => storiesByCategory[category].length),
    );
    return Math.max(Math.ceil(maxCategorySize / cardsPerCategory), 1);
  }, [cardsPerCategory, categoryOrder, storiesByCategory]);

  useEffect(() => {
    setStartIndex((idx) => Math.min(Math.max(idx, 0), totalPages - 1));
  }, [totalPages]);

  const currentPageIndex = Math.min(Math.max(startIndex, 0), totalPages - 1);
  const lastPageIndex = Math.max(totalPages - 1, 0);

  const getCategoryChunk = useCallback((categoryStories, pageIndex, count) => {
    if (!categoryStories.length) return [];

    const start = pageIndex * count;
    return Array.from({ length: count }, (_, idx) => {
      const storyIndex = (start + idx) % categoryStories.length;
      return categoryStories[storyIndex];
    });
  }, []);

  const getPageStories = useCallback(
    (pageIndex) => {
      const categoryChunks = categoryOrder.map((category) =>
        getCategoryChunk(
          storiesByCategory[category],
          pageIndex,
          cardsPerCategory,
        ),
      );

      const sortedStories = [];
      for (let row = 0; row < cardsPerCategory; row += 1) {
        for (let col = 0; col < categoryChunks.length; col += 1) {
          const story = categoryChunks[col][row];
          if (story) sortedStories.push(story);
        }
      }

      return sortedStories;
    },
    [cardsPerCategory, categoryOrder, getCategoryChunk, storiesByCategory],
  );

  const visibleStories = useMemo(
    () => getPageStories(startIndex),
    [getPageStories, startIndex],
  );

  const pageGroups = useMemo(() => {
    if (!isSliding || pendingStartIndex === null) return [visibleStories];

    const delta = Math.abs(pendingStartIndex - currentPageIndex);
    if (delta === 0) return [visibleStories];

    if (slideDirection === "next") {
      return Array.from({ length: delta + 1 }, (_, idx) =>
        getPageStories(currentPageIndex + idx),
      );
    }

    return Array.from({ length: delta + 1 }, (_, idx) =>
      getPageStories(pendingStartIndex + idx),
    );
  }, [
    currentPageIndex,
    getPageStories,
    isSliding,
    pendingStartIndex,
    slideDirection,
    visibleStories,
  ]);

  const gridColumns = useMemo(() => {
    if (visibleCount >= 3) return 3;
    if (visibleCount >= 2) return 2;
    return 1;
  }, [visibleCount]);

  const pageRows = useMemo(
    () => Math.max(Math.ceil(visibleStories.length / gridColumns), 1),
    [gridColumns, visibleStories.length],
  );

  const pageViewportHeight = useMemo(
    () => pageRows * desktopCardHeight + (pageRows - 1) * 16,
    [desktopCardHeight, pageRows],
  );

  useEffect(() => {
    pageShiftPxRef.current = pageViewportHeight + 16;
  }, [pageViewportHeight]);

  const endSlide = useCallback((targetStartIndex, durationMs) => {
    if (slideTimeoutRef.current) {
      window.clearTimeout(slideTimeoutRef.current);
    }

    slideTimeoutRef.current = window.setTimeout(() => {
      setStartIndex(targetStartIndex);
      setPendingStartIndex(null);
      setIsTrackTransitionOn(false);
      setTrackTranslateY(0);
      setIsSliding(false);
    }, durationMs);
  }, []);

  const goToPage = useCallback(
    (targetPageIndex) => {
      if (isSliding) return;
      if (targetPageIndex < 0 || targetPageIndex > lastPageIndex) return;
      if (targetPageIndex === currentPageIndex) return;

      const direction = targetPageIndex > currentPageIndex ? "next" : "prev";
      const targetStartIndex = targetPageIndex;
      const steps = Math.abs(targetStartIndex - currentPageIndex);
      const shift = pageShiftPxRef.current * steps;
      const durationMs = Math.min(1200, 520 + steps * 180);

      setSlideDirection(direction);
      setPendingStartIndex(targetStartIndex);
      setIsSliding(true);

      if (direction === "prev") {
        setIsTrackTransitionOn(false);
        setTrackTranslateY(-shift);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsTrackTransitionOn(true);
            setTrackTranslateY(0);
          });
        });
      } else {
        setTrackTranslateY(0);
        setIsTrackTransitionOn(true);
        setTrackTranslateY(-shift);
      }

      endSlide(targetStartIndex, durationMs);
    },
    [currentPageIndex, endSlide, isSliding, lastPageIndex],
  );

  const slide = useCallback(
    (direction) => {
      const targetPageIndex =
        direction === "next" ? currentPageIndex + 1 : currentPageIndex - 1;
      goToPage(targetPageIndex);
    },
    [currentPageIndex, goToPage],
  );

  const nextStory = useCallback(() => slide("next"), [slide]);
  const prevStory = useCallback(() => slide("prev"), [slide]);

  const activeDot =
    isSliding && pendingStartIndex !== null
      ? pendingStartIndex
      : currentPageIndex;

  const textLineClamp = useMemo(() => {
    const estimated = Math.floor((desktopCardHeight - 130) / 24);
    return Math.max(5, Math.min(12, estimated));
  }, [desktopCardHeight]);

  const textFontSize = useMemo(() => {
    if (desktopCardHeight >= 340) return "1rem";
    if (desktopCardHeight >= 300) return "0.93rem";
    if (desktopCardHeight >= 260) return "0.88rem";
    return "0.82rem";
  }, [desktopCardHeight]);

  const nameFontSize = useMemo(() => {
    if (desktopCardHeight >= 340) return "1.25rem";
    if (desktopCardHeight >= 300) return "1.12rem";
    return "1rem";
  }, [desktopCardHeight]);

  const roleFontSize = useMemo(() => {
    if (desktopCardHeight >= 340) return "0.98rem";
    if (desktopCardHeight >= 300) return "0.9rem";
    return "0.82rem";
  }, [desktopCardHeight]);

  return (
    <div className="relative mb-0 overflow-hidden rounded-3xl bg-transparent py-16 md:py-20 xl:py-14">
      <div className="relative z-10 mb-6 text-center md:mb-8 xl:mb-6">
        <h2
          className="mb-4 overflow-visible px-4 pb-1 text-4xl font-semibold tracking-tight leading-[1.15] md:text-6xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            // display: "block",
            width: "100%",
          }}
        >
          Shaping Success Stories Since 2019
        </h2>
        <p
          className="overflow-visible px-4 text-2xl font-bold tracking-tight leading-[1.15] md:text-5xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "block",
            width: "100%",
          }}
        >
          Your Goal. Our Mission
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-300 px-4 md:px-6">
        <div className="mb-3 hidden gap-4 lg:grid lg:grid-cols-3 lg:pr-20">
          {[
            { id: "students", label: "Students" },
            { id: "colleges", label: "Colleges" },
            { id: "corporate", label: "Corporate" },
          ].map((header) => (
            <div
              key={header.id}
              className="rounded-xl border border-[#9bcde8] bg-white/72 py-2 text-center text-3xl font-semibold text-[#0d3d6b] shadow-[0_10px_24px_rgba(31,95,148,0.16)] backdrop-blur-sm"
            >
              {header.label}
            </div>
          ))}
        </div>

        <div className="relative lg:pr-20">
          <div
            className="relative z-10 overflow-hidden"
            style={{ height: `${pageViewportHeight}px` }}
          >
            <div
              className={`flex flex-col gap-4 ${
                isTrackTransitionOn
                  ? "transition-transform duration-700 ease-in-out"
                  : "transition-none"
              }`}
              style={{
                transform: `translate3d(0, ${trackTranslateY}px, 0)`,
                willChange: "transform",
              }}
            >
              {pageGroups.map((group, groupIndex) => (
                <div
                  key={`page-${groupIndex}-${group[0]?.id ?? "empty"}`}
                  data-page="true"
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {group.map((story) => (
                    <article key={`story-${groupIndex}-${story.id}`}>
                      <div
                        className="relative h-full w-full overflow-hidden rounded-2xl border border-[#b8d9ea] bg-[linear-gradient(155deg,rgba(247,252,255,0.92)_0%,rgba(227,242,250,0.9)_100%)] p-4 shadow-[0_14px_30px_rgba(28,85,128,0.16)] backdrop-blur-xl transition-shadow duration-300 md:p-5"
                        style={{ height: `${desktopCardHeight}px` }}
                      >
                        <div className="relative z-10 flex h-full flex-col">
                          <div className="mb-2 text-3xl font-black leading-none text-[#9ab6c8] md:text-4xl">
                            <span>“ ”</span>
                          </div>

                          <p
                            className="min-h-0 flex-1 overflow-hidden leading-[1.35] text-[#0f172a]"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: textLineClamp,
                              WebkitBoxOrient: "vertical",
                              fontSize: textFontSize,
                            }}
                          >
                            {story.text}
                          </p>

                          <div className="mt-3 border-t border-[#cfd6de] pt-3">
                            <div className="flex items-start gap-2.5">
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#dff1fb] text-[10px] font-semibold text-[#2a628d] md:h-8 md:w-8 md:text-[11px]">
                                {story.initials}
                              </div>
                              <div className="min-w-0">
                                <h3
                                  className="font-semibold leading-tight text-[#1c5a86]"
                                  style={{ fontSize: nameFontSize }}
                                >
                                  {story.name}
                                </h3>
                                <p
                                  className="mt-1 leading-tight text-[#15324d]"
                                  style={{ fontSize: roleFontSize }}
                                >
                                  {story.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-6 flex justify-center lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
            <div className="flex items-center gap-3 lg:flex-col lg:gap-3.5">
              <button
                type="button"
                onClick={prevStory}
                className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#62a9ce] bg-white/55 text-2xl text-[#1f709d] shadow-[0_2px_8px_rgba(35,105,150,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/75 hover:shadow-[0_6px_12px_rgba(35,105,150,0.16)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
                aria-label="Previous testimonial"
                disabled={isSliding || currentPageIndex <= 0}
              >
                <span className="-mt-0.5">↑</span>
              </button>

              <div className="flex items-center gap-2.5 lg:flex-col lg:gap-2.5">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const dotIndex = idx;
                  const isActive = dotIndex === activeDot;
                  return (
                    <button
                      type="button"
                      key={`dot-${dotIndex}`}
                      onClick={() => goToPage(dotIndex)}
                      aria-label={`Go to testimonial page ${dotIndex + 1}`}
                      disabled={isSliding || dotIndex === currentPageIndex}
                      className={`rounded-full transition-all ${
                        isActive
                          ? "h-3 w-7 bg-[#2f84b8] shadow-[0_2px_7px_rgba(47,132,184,0.25)] lg:h-8 lg:w-3"
                          : "h-2.5 w-2.5 bg-[#8ebfdb]/90 hover:bg-[#5ea4cf]"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={nextStory}
                className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#62a9ce] bg-white/55 text-2xl text-[#1f709d] shadow-[0_2px_8px_rgba(35,105,150,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/75 hover:shadow-[0_6px_12px_rgba(35,105,150,0.16)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
                aria-label="Next testimonial"
                disabled={isSliding || currentPageIndex >= lastPageIndex}
              >
                <span className="-mt-0.5">↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div
      className="relative py-8 md:py-12"
      style={{
        backgroundImage:
          "radial-gradient(120% 70% at 50% 0%, rgba(247,252,255,0.95) 0%, rgba(247,252,255,0.22) 55%, rgba(247,252,255,0) 100%), radial-gradient(65% 55% at 0% 0%, #ceecf7 0%, rgba(206,236,247,0) 75%), radial-gradient(65% 55% at 100% 0%, #a2d5f4 0%, rgba(162,213,244,0) 75%), radial-gradient(80% 50% at 50% 100%, #d3eef9 0%, rgba(211,238,249,0) 72%), linear-gradient(180deg, #eef8fd 0%, #f7fcff 48%, #ffffff 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.38,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(91,145,227,0.22) 0 1px, transparent 1px 34px), repeating-linear-gradient(60deg, rgba(91,145,227,0.24) 0 1px, transparent 1px 34px), repeating-linear-gradient(-60deg, rgba(91,145,227,0.24) 0 1px, transparent 1px 34px)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <StudentSuccessStories />
      </div>
    </div>
  );
}
