import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DUMMY_PHOTO_IDS = [12, 24, 28, 32, 36, 41, 45, 47, 52, 57, 61, 66];

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
        image: "https://images.zoomnews.com/photo/msid-153873071/153873071.jpg",
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
        name: "Deep Mahire",
        category: "corporate",
        role: "Software Engineer, TechBridge",
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
  const [uniformCardHeight, setUniformCardHeight] = useState(460);

  const pageShiftPxRef = useRef(436);
  const slideTimeoutRef = useRef(null);
  const trackRef = useRef(null);
  const sizingRef = useRef(null);

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
    return () => {
      if (slideTimeoutRef.current) {
        window.clearTimeout(slideTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const existing = document.querySelector(
      'link[data-font="playfair-display-900"]',
    );
    if (existing) return undefined;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap";
    link.setAttribute("data-font", "playfair-display-900");
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
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

  const measureUniformCardHeight = useCallback(() => {
    if (!sizingRef.current) return;

    const sizingCards = Array.from(
      sizingRef.current.querySelectorAll("[data-sizing-card='true']"),
    );
    if (!sizingCards.length) return;

    const maxHeight = sizingCards.reduce((max, node) => {
      const current = Math.ceil(node.getBoundingClientRect().height);
      return Math.max(max, current);
    }, 0);

    if (maxHeight > 0) {
      setUniformCardHeight(maxHeight);
    }
  }, []);

  useEffect(() => {
    measureUniformCardHeight();
  }, [measureUniformCardHeight, visibleCount, stories]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    window.addEventListener("resize", measureUniformCardHeight);
    return () => window.removeEventListener("resize", measureUniformCardHeight);
  }, [measureUniformCardHeight]);

  const pageViewportHeight = useMemo(
    () => pageRows * uniformCardHeight + (pageRows - 1) * 16,
    [pageRows, uniformCardHeight],
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

  const getDummyPhotoForStory = useCallback((storyId) => {
    const photoId = DUMMY_PHOTO_IDS[(storyId - 1) % DUMMY_PHOTO_IDS.length];
    return `https://i.pravatar.cc/800?img=${photoId}`;
  }, []);

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
          className="overflow-visible px-4 text-2xl font-bold tracking-tight leading-[1.15] md:text-4xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            // display: "block",
            width: "100%",
          }}
        >
          Your Goal. Our Mission
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-300 px-4 md:px-6">
        <div
          ref={sizingRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute inset-x-4 top-0 -z-10 md:inset-x-6"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={`sizing-${story.id}`}>
                <div
                  data-sizing-card="true"
                  className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#b8d9ea] bg-[linear-gradient(165deg,#f6fbff_0%,#dff1fb_100%)] shadow-[0_14px_30px_rgba(28,85,128,0.16)] backdrop-blur-xl"
                >
                  <div className="relative h-52 overflow-hidden border-b border-[#c9deea] bg-[#dceff9] md:h-56 lg:h-52 xl:h-56">
                    <img
                      src={story.image || getDummyPhotoForStory(story.id)}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onLoad={measureUniformCardHeight}
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col bg-[linear-gradient(180deg,#f9fdff_0%,#e7f4fc_100%)] p-4 pt-8 md:p-5 md:pt-9">
                    <div
                      className="absolute left-4 -top-8 z-20 select-none text-[4.4rem] font-black leading-none text-white md:left-5 md:-top-9 md:text-[5rem]"
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        textShadow: "0 4px 12px rgba(0,0,0,0.28)",
                      }}
                    >
                      “
                    </div>

                    <p className="min-h-0 flex-1 pb-4 whitespace-normal wrap-break-word font-semibold leading-[1.3] text-[#2f4b42] text-sm md:text-[0.95rem]">
                      {story.text}
                    </p>

                    <div className="mt-auto h-16 border-t border-[#c6d2dd] pt-1.5">
                      <h3 className="inline-block bg-[#d8e2eb] px-2.5 py-0.5 font-black uppercase tracking-wide text-[#1f4f47] text-sm md:text-base">
                        {story.name}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 leading-tight text-[#375e56] text-xs md:text-sm">
                        {story.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

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
              ref={trackRef}
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
                        className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#b8d9ea] bg-[linear-gradient(165deg,#f6fbff_0%,#dff1fb_100%)] shadow-[0_14px_30px_rgba(28,85,128,0.16)] backdrop-blur-xl transition-shadow duration-300"
                        style={{ height: `${uniformCardHeight}px` }}
                      >
                        <div className="relative h-52 overflow-hidden border-b border-[#c9deea] bg-[#dceff9] md:h-56 lg:h-52 xl:h-56">
                          <img
                            src={story.image || getDummyPhotoForStory(story.id)}
                            alt={story.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            onLoad={measureUniformCardHeight}
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col bg-[linear-gradient(180deg,#f9fdff_0%,#e7f4fc_100%)] p-4 pt-8 md:p-5 md:pt-9">
                          <div
                            className="absolute left-4 -top-8 z-20 select-none text-[4.4rem] font-black leading-none text-white md:left-5 md:-top-9 md:text-[5rem]"
                            style={{
                              fontFamily: '"Playfair Display", serif',
                              textShadow: "0 4px 12px rgba(0,0,0,0.28)",
                            }}
                            aria-hidden="true"
                          >
                            “
                          </div>

                          <p className="min-h-0 flex-1 pb-4 whitespace-normal wrap-break-word font-semibold leading-[1.3] text-[#2f4b42] text-sm md:text-[0.95rem]">
                            {story.text}
                          </p>

                          <div className="mt-auto h-16 border-t border-[#c6d2dd] pt-1.5">
                            <h3 className="inline-block bg-[#d8e2eb] px-2.5 py-0.5 font-black uppercase tracking-wide text-[#1f4f47] text-sm md:text-base">
                              {story.name}
                            </h3>
                            <p className="mt-0.5 line-clamp-1 leading-tight text-[#375e56] text-xs md:text-sm">
                              {story.role}
                            </p>
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
