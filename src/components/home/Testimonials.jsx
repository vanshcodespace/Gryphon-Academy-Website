import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import iuLogo from "../../assets/GA College Partners/IULo.png";
import diet from "../../assets/GA College Partners/g (17).png";
import sanj from "../../assets/GA College Partners/2.png";
import sit from "../../assets/GA College Partners/sit.png";
import icem from "../../assets/GA College Partners/6.png";
import lead from "../../assets/GA College Partners/g (21).png";
import dy from "../../assets/GA College Partners/10.png";
import dkte from "../../assets/GA College Partners/g (2).png";
import lex from "../../assets/GA College Partners/g (7).png";
import ultra from "../../assets/Recruiters/ultra.png";
import dentsu from '../../assets/Recruiters/dentsu.png';
import juspay from "../../assets/Recruiters/Logo (18).jpg";
import fis from "../../assets/Recruiters/fis.png";
import mastercard from "../../assets/Recruiters/master.png";
import ey from "../../assets/Recruiters/ey.png";
import sas from "../../assets/Recruiters/sas.png";
import coc from "../../assets/Recruiters/coc.png";
import schneider from "../../assets/Recruiters/sch.png";
function StudentSuccessStories() {
  const stories = useMemo(
    () => [
      // Students
      {
        id: 1,
        name: "Mr. Siddhant Kadam",
        category: "students",
        role: "BE Computer Engineering,\n Batch:2024, \n Indira College of Engineering & Management, Pune",
        initials: "MS",
        image:juspay,
        text: "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
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
      // Colleges
      {
        id: 2,
        name: "Dr. Tarita Shankar",
        category: "colleges",
        role: "President Designate - Indira University & Chairperson and Chief Mentor - Indira Group of Institutes, Pune",
        initials: "AR",
        image: iuLogo,
        text: "Gryphon holds a special place for me. Over the years, Gryphon has experienced signinificant growth, and it's been a remarkable journey filled with valuable lessons. I wish them continued success in all their future endeavors.",
      },
      {
        id: 6,
        name: "Ms. Dhanwantari Wangde",
        category: "colleges",
        role: "CEO - Dnyanshree Institute of Engineering & Technology, Satara",
        initials: "SI",
        image: diet,
        text: "Gryphon Academy has achieved remarkable success in securing placements for our students in prestigious companies such as Tata Technology, KPIT, and Tata Motors, along with Plank and Weave for our students in the real estate sector. Gryphon's tailored training and placement services have opened up diverse opportunities for our students.",
      },
      {
        id: 8,
        name: "Mr. Amit Kolhe",
        category: "colleges",
        role: "Chancellor Sanjivani Group of Institutes, Kopargaon",
        initials: "NK",
        image: sanj,
        text: "Gryphon Academy's personalized training and placements are exceptional. They prepare students for the industry while shaping their future with a dedicated commitment to excellence. With more than 2000+ students trained, Gryphon Academy continues to make a signiificant impact in the realm of education.",
      },
      {
        id: 11,
        name: "Ms. Neha A Parsoon",
        category: "colleges",
        role: "Training and Placement Officer Sharad Institute Of Technology College Of Engineering Ichalkaranji, Kolhapur",
        initials: "VS",
        image: sit,
        text: "Sharad Institute of Technology, College of Engineering, Ichalkaranji Kolhapur, has partnered with Gryphon Academy. Together, we are dedicated to providing comprehensive services to students across all domains. Gryphon's proven track record in delivering outstanding results for various institutions has impressed us.",
      },
      {
        id: 12,
        name: "Ms. Priyanka Pawar ",
        category: "colleges",
        role: "Associate Professor & Dean Training & DevelopmentIndira College of Engineering & Management(ICEM), Pune",
        initials: "VS",
        image: icem,
        text: "ICEM is associated with Gryphon Academy for the past three years,, benefiting from 3000 hours of training annually for students. Gryphon Academy has extended invaluable industry support, particularly for our students seeking core engineering job placements.",
      },
      {
        id: 13,
        name: "Dr. Thomas George ",
        category: "colleges",
        role: "Director - Lead College of Management, Palakkad, Kerala",
        initials: "VS",
        image: lead,
        text: "In academia and the corporate world, Gryphon Academy stands as a leader driven by vision and dedication. Gryphon Academy's training and placements are outstanding, lighting the path towards a brighter future for students.",
      },
      {
        id: 14,
        name: "Mr. Makrand Kaingade",
        category: "colleges",
        role: "TPO -DY Patil College of Engineering & Technology, Kolhapur",
        initials: "VS",
        image: dy,
        text: "Gryphon Academy's training kindles potential. Our students' achievements in the competitive world validate Gryphon's commitment to excellence. The expertise of their experienced trainers from various fields is second to none.",
      },
      {
        id: 13,
        name: "Mr. Manoj Choughule",
        category: "colleges",
        role: "Director - Lead College of Management, Palakkad, Kerala",
        initials: "VS",
        image: dkte,
        text: "Thanks to Gryphon's industry-focused training and the expertise of their trainers, our students have embarked on an incredible journey from classrooms to successful careers.",
      },
      {
        id: 13,
        name: "Mr. Anup Sheth ",
        category: "colleges",
        role: "Director- Placements & Corporate ConnectLexicon MILE - Management Institute For Leadership and Excellence",
        initials: "VS",
        image: lex,
        text: "Gryphon's training isn't just a curriculum; it's a compass guiding students toward a prosperous future. Their commitment to excellence aligns with our vision of nurturing future leaders a huge Thanks to Gryphon Academy for their exclusive trainings and placements.",
      },

      // Corporate
      {
        id: 3,
        name: "Dr. Rahul Bagale",
        category: "corporate",
        role: "Vice President Human ResourcesUltra Corpotech Pvt. Ltd.",
        initials: "KS",
        image: ultra,
        text: "We recruited 145 fresh engineers from batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job.",
      },
      {
        id: 7,
        name: "Mr. Suvarnanidhi Rao",
        category: "corporate",
        role: "Associate Director - Talent Acquisition Dentsu Global Services",
        initials: "AM",
        image: dentsu,
        text: "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent.",
      },
      {
        id: 9,
        name: "Ms. Shipra Pandit",
        category: "corporate",
        role: "Director - HR Juspay",
        initials: "IS",
        image: juspay,
        text: "We've had the opportunity to undergo Gryphon Academy's training process, extending its reach to candidates from various regions. Gryphon's high-quality training programme has undeniably enhanced students’ skills.",
      },
      {
        id: 9,
        name: "Mr. Tushar Desai ",
        category: "corporate",
        role: "Senior Director - Talent Acquisition, India and APAC, FIS",
        initials: "IS",
        image: fis,
        text: "What sets Gryphon Academy apart is how precisely their training maps to our job descriptions. The students we hired from their last-minute training program understood our business context, our tech stack, and our expectations from day one.",
      },{
        id: 9,
        name: "Mr. Urvish Pandey",
        category: "corporate",
        role: "India Head - University Recruitment & Early Talent Engagement, Mastercard",
        initials: "IS",
        image: mastercard,
        text: "Highly impressed with Gryphon Academy's training modules to create industry ready force. All the best.",
      },
      {
        id: 9,
        name: "Mr. Sushant Kumar",
        category: "corporate",
        role: "Assistant Director - EY",
        initials: "IS",
        image: ey,
        text: "Gryphon Academy trained students are well-prepared for the demands of the engineering industry, with a strong foundation in both technical and professional skills.",
      },
      {
        id: 10,
        name: "Mr. Supreet Kakroo ",
        category: "corporate",
        role: "Human Resources Specialist SaS",
        initials: "ABC",
        image: sas,
        text: "The dedication and commitment displayed by Team Gryphon is unwavering. The talent they prepare is ready for the industry.",
      },
      {
        id: 10,
        name: "Mr. Ram Honap",
        category: "corporate",
        role: "National Head - HR Hindustan Coca-Cola Beverages",
        initials: "ABC",
        image: coc,
        text: "The Synergy Sphere 2024 event showcased Gryphon Academy’s dedication to bridging academia and industry. Bringing together over 100 HR leaders on one platform was a masterstroke that facilitated meaningful collaborations and highlighted Gryphon's role as a talent powerhouse."
      },
      {
        id: 10,
        name: "Mr. Avinash Talreja  ",
        category: "corporate",
        role: "Deputy General Manager Human Resource | Schneider ",
        initials: "ABC",
        image: schneider,
        text: "The training modules at Gryphon Academy are tailored to meet the evolving needs of the industry. This foresight and adaptability are why their students excel across diverse domains, making them a valuable addition to any organization.",
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

  const getStoryImage = useCallback((story) => {
    return story.image || "";
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
         Trusted by the best 
        </h2>
        <p
          className="overflow-visible px-4 text-2xl font-medium tracking-tight leading-[1.15] md:text-2xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            // display: "block",
            width: "100%",
          }}
        >
          Read what the students, colleges and corporate leaders have to say about us!
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
                  <div className="relative h-52 overflow-hidden border-b border-[#c9deea] bg-white md:h-56 lg:h-52 xl:h-56 flex items-center justify-center p-2">
                    <img
                      src={getStoryImage(story)}
                      alt=""
                      className="max-h-52 max-w-48 object-contain"
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

                    <div className="mt-auto border-t border-[#c6d2dd] pt-1.5">
                      <h3 className="inline-block bg-[#d8e2eb] px-2.5 py-0.5 font-black uppercase tracking-wide text-[#1f4f47] text-sm md:text-base">
                        {story.name}
                      </h3>
                      <p className="mt-0.5 leading-tight text-[#375e56] text-xs md:text-sm">
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
                        <div className="relative h-52 overflow-hidden border-b border-[#c9deea] bg-white md:h-56 lg:h-52 xl:h-56 flex items-center justify-center p-2">
                          <img
                            src={getStoryImage(story)}
                            alt={story.name}
                            className="max-h-52 max-w-48 object-contain"
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

                          <div className="mt-auto border-t border-[#c6d2dd] pt-1.5">
                            <h3 className="inline-block bg-[#d8e2eb] px-2.5 py-0.5 font-black uppercase tracking-wide text-[#1f4f47] text-sm md:text-base">
                              {story.name}
                            </h3>
                            <p className="mt-0.5 leading-tight text-[#375e56] text-xs md:text-sm">
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
