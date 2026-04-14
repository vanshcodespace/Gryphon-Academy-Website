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
import dentsu from "../../assets/Recruiters/dentsu.png";
import juspay from "../../assets/Recruiters/Logo (18).jpg";
import fis from "../../assets/Recruiters/fis.png";
import mastercard from "../../assets/Recruiters/master.png";
import ey from "../../assets/Recruiters/ey.png";
import sas from "../../assets/Recruiters/sas.png";
import coc from "../../assets/Recruiters/coc.png";
import schneider from "../../assets/Recruiters/sch.png";
import tata from "../../assets/Recruiters/tata.png";
import hit from "../../assets/Recruiters/15f39d5273ba1f50b413b5f5232aefed.jpg";
import force from "../../assets/Recruiters/Logo (1).jpg";
import pw from "../../assets/Recruiters/pw.jpeg";
import king from "../../assets/Recruiters/kin.png";
import veloc from "../../assets/Recruiters/veloc.jpeg";
import hous from "../../assets/Recruiters/hous.jpeg";
import home from "../../assets/Recruiters/homes.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import s9 from "../../assets/s9.png";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/c9.png";
import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.png";
import e4 from "../../assets/e4.png";
import e5 from "../../assets/e5.png";
import e6 from "../../assets/e6.png";
import e7 from "../../assets/e7.png";
import e8 from "../../assets/e8.png";
import e9 from "../../assets/e9.png";
function StudentSuccessStories() {
  const stories = useMemo(
    () => [
      // Students
      {
        id: 1,
        name: "Mr. Nihal Shirkar",
        category: "students",
        role: "B. E. Computer Engineering",
        company: "Juspay",
        initials: "MS",
        image: juspay,
        personImage: s1,
        text: " My experience with Gryphon Academy was incredible. I got placed in Force Motors and I would love to thank Gryphon Academy for being such an amazing partner for my placement opportunity",
      },
      {
        id: 2,
        name: "Mr Vishal Tambe",
        category: "students",
        role: "Electrical Engineering",
        company: "Tata Technologies",
        image: tata,
        personImage: s2,
        initials: "PP",
        text: "Gryphon Academy is a great resource for students to learn and explore various topics related to the placement drives. This Training programme will help students to develop their skills required during placement drives. ",
      },
      {
        id: 3,
        name: "Mr.Kishor Turkane",
        category: "students",
        role: "Civil Engineering",
        company: "Hettich",
        image: hit,

        initials: "AP",
        personImage: s3,
        text: "The training on aptitude and soft skills proved to be highly beneficial, equipping us with valuable knowledge across various subjects and preparing us for the industry demands",
      },
      {
        id: 4,
        name: "Mr Shubham Bagul",
        category: "students",
        role: "Mechanical Engineering",
        company: "Force Motors",
        image: force,
        initials: "AP",
        personImage: s4,
        text: "Gryphon Academy is where dreams come true. The diverse range of training programmes gave me the confidence to enter the professional world. The trainers' practical wisdom and real -world experience were instrumental in my success.",
      },
      {
        id: 5,
        name: "Mr. Sonu Kambhire",
        category: "students",
        role: "Mechanical Engineering",
        company: "P&W",
        image: pw,
        initials: "AP",
        personImage: s5,
        text: "It was a great experience with Gryphon Academy. The informative and simplified teaching style of trainers made our placement journey smooth. Grateful to Gryphon Academy for providing the opportunity to learn and aquire industry skillset.",
      },
      {
        id: 6,
        name: "Mr.Niket Gawali",
        category: "students",
        role: "Civil Engineering",
        company: "Kin Long",
        image: king,
        initials: "AP",
        personImage: s6,
        text: "Gryphon Academy has changed me for the better. Their encompassing aptitude, soft skills and technical prowess, prepared me for industry challenges.",
      },
      {
        id: 7,
        name: "Ms. Srishti Shetty",
        category: "students",
        role: "MBA- HR",
        company: "Velocitta",
        image: veloc,
        initials: "AP",
        personImage: s7,
        text: "The Industry Readiness Program at Gryphon Academy was a game-changer for my career. From soft skills to technical expertise, every session was designed to prepare us for real-world challenges. It gave me the confidence to excel in interviews and thrive in my new role.",
      },
      {
        id: 8,
        name: "Mr.Harsh Pal",
        category: "students",
        role: "MBA Marketing",
        company: "Housiey",
        image: hous,
        initials: "AP",
        personImage: s8,
        text: "The program was more than just training; it was a transformation. Gryphon Academy helped me refine my skills, build my confidence, and understand what the industry truly expects from professionals like me.",
      },
      {
        id: 9,
        name: "Ms Ajal Padmam",
        category: "students",
        role: "MBA Marketing",
        company: "Homesfy",
        image: home,
        initials: "AP",
        personImage: s9,
        text: "The Tailored approach of Gryphon's Industry Readiness Program what I needed. The focus on current industry trends and in demand skills has not only made me confident but also highly competitive in the job market.",
      },

      // Colleges
      {
        id: 10,
        name: "Dr. Tarita Shankar",
        category: "colleges",
        role: "President Designate - Indira University & Chairperson and Chief Mentor - Indira Group of Institutes, Pune",
        initials: "AR",
        image: iuLogo,
        personImage: c1,
        text: "Gryphon holds a special place for me. Over the years, Gryphon has experienced signinificant growth, and it's been a remarkable journey filled with valuable lessons. I wish them continued success in all their future endeavors.",
      },
      {
        id: 11,
        name: "Ms. Dhanwantari Wangde",
        category: "colleges",
        role: "CEO - Dnyanshree Institute of Engineering & Technology, Satara",
        initials: "SI",
        image: diet,
        personImage: c2,
        text: "Gryphon Academy has successfully placed students in top companies like Tata Technologies, KPIT, and Tata Motors, as well as real estate firms like Plank and Weave. Its focused training and placement support create strong career opportunities.",
      },
      {
        id: 12,
        name: "Mr. Amit Kolhe",
        category: "colleges",
        role: "Chancellor Sanjivani Group of Institutes, Kopargaon",
        initials: "NK",
        image: sanj,
        personImage: c3,
        text: "Gryphon Academy's personalized training and placements are exceptional. They prepare students for the industry while shaping their future with a dedicated commitment to excellence. With more than 2000+ students trained, Gryphon Academy continues to make a signiificant impact in the realm of education.",
      },
      {
        id: 13,
        name: "Ms. Neha A Parsoon",
        category: "colleges",
        role: "TPO Sharad Institute Of Technology College Of Engineering Ichalkaranji, Kolhapur",
        initials: "VS",
        image: sit,
        personImage: c4,
        text: "Sharad Institute of Technology College of Engineering Ichalkaranji has partnered with Gryphon Academy to deliver comprehensive student support across domains. Gryphon’s proven results across institutions make it a trusted partner.",
      },
      {
        id: 14,
        name: "Ms. Priyanka Pawar ",
        category: "colleges",
        role: "Associate Professor,Dean(T&D) Indira College of Engineering & Management(ICEM), Pune",
        initials: "VS",
        image: icem,
        personImage: c5,
        text: "ICEM is associated with Gryphon Academy for the past three years,, benefiting from 3000 hours of training annually for students. Gryphon Academy has extended invaluable industry support, particularly for our students seeking core engineering job placements.",
      },
      {
        id: 15,
        name: "Dr. Thomas George ",
        category: "colleges",
        role: "Director - Lead College of Management, Palakkad, Kerala",
        initials: "VS",
        image: lead,
        personImage: c6,
        text: "In academia and the corporate world, Gryphon Academy stands as a leader driven by vision and dedication. Gryphon Academy's training and placements are outstanding, lighting the path towards a brighter future for students.",
      },
      {
        id: 16,
        name: "Mr. Makrand Kaingade",
        category: "colleges",
        role: "TPO -DY Patil College of Engineering & Technology, Kolhapur",
        initials: "VS",
        image: dy,
        personImage: c7,
        text: "Gryphon Academy's training kindles potential. Our students' achievements in the competitive world validate Gryphon's commitment to excellence. The expertise of their experienced trainers from various fields is second to none.",
      },
      {
        id: 17,
        name: "Mr. Manoj Choughule",
        category: "colleges",
        role: "DKTE - Yashwntaro Chavan college of polytechnic ",
        initials: "VS",
        image: dkte,
        personImage: c8,
        text: "Thanks to Gryphon's industry-focused training and the expertise of their trainers, our students have embarked on an incredible journey from classrooms to successful careers.",
      },
      {
        id: 18,
        name: "Mr. Anup Sheth ",
        category: "colleges",
        role: "Director- Placements & Corporate Connect Lexicon  Management Institute For Leadership and Excellence",
        initials: "VS",
        image: lex,
        personImage: c9,
        text: "Gryphon's training isn't just a curriculum; it's a compass guiding students toward a prosperous future. Their commitment to excellence aligns with our vision of nurturing future leaders a huge Thanks to Gryphon Academy for their exclusive trainings and placements.",
      },

      // Corporate
      {
        id: 19,
        name: "Dr. Rahul Bagale",
        category: "corporate",
        role: "Vice President Human ResourcesUltra Corpotech Pvt. Ltd.",
        initials: "KS",
        image: ultra,
        personImage: e1,
        text: "We recruited 145 fresh engineers from batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job.",
      },
      {
        id: 20,
        name: "Mr. Suvarnanidhi Rao",
        category: "corporate",
        role: "Associate Director - Talent Acquisition Dentsu Global Services",
        initials: "AM",
        image: dentsu,
        personImage: e2,
        text: "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent.",
      },
      {
        id: 21,
        name: "Ms. Shipra Pandit",
        category: "corporate",
        role: "Director - HR Juspay",
        initials: "IS",
        image: juspay,
        personImage: e3,
        text: "We've had the opportunity to undergo Gryphon Academy's training process, extending its reach to candidates from various regions. Gryphon's high-quality training programme has undeniably enhanced students’ skills.",
      },
      {
        id: 22,
        name: "Mr. Tushar Desai ",
        category: "corporate",
        role: "Senior Director - Talent Acquisition, India and APAC, FIS",
        initials: "IS",
        image: fis,
        personImage: e4,
        text: "What sets Gryphon Academy apart is how precisely their training maps to our job descriptions. The students we hired from their last-minute training program understood our business context, our tech stack, and our expectations from day one.",
      },
      {
        id: 23,
        name: "Mr. Urvish Pandey",
        category: "corporate",
        role: "India Head - University Recruitment & Early Talent Engagement, Mastercard",
        initials: "IS",
        image: mastercard,
        personImage: e5,
        text: "Highly impressed with Gryphon Academy's training modules to create industry ready force. All the best.",
      },
      {
        id: 24,
        name: "Mr. Sushant Kumar",
        category: "corporate",
        role: "Assistant Director - EY",
        initials: "IS",
        image: ey,
        personImage: e6,
        text: "Gryphon Academy trained students are well-prepared for the demands of the engineering industry, with a strong foundation in both technical and professional skills.",
      },
      {
        id: 25,
        name: "Mr. Supreet Kakroo ",
        category: "corporate",
        role: "Human Resources Specialist SaS",
        initials: "ABC",
        image: sas,
        personImage: e7,
        text: "The dedication and commitment displayed by Team Gryphon is unwavering. The talent they prepare is ready for the industry.",
      },
      {
        id: 26,
        name: "Mr. Ram Honap",
        category: "corporate",
        role: "National Head - HR Hindustan Coca-Cola Beverages",
        initials: "ABC",
        image: coc,
        personImage: e8,
        text: "The Synergy Sphere 2024 event showcased Gryphon Academy’s dedication to bridging academia and industry. Bringing together over 100 HR leaders on one platform was a masterstroke that facilitated meaningful collaborations and highlighted Gryphon's role as a talent powerhouse.",
      },
      {
        id: 27,
        name: "Mr. Avinash Talreja  ",
        category: "corporate",
        role: "Deputy General Manager Human Resource | Schneider ",
        initials: "ABC",
        image: schneider,
        personImage: e9,
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
  const [uniformNameRoleHeight, setUniformNameRoleHeight] = useState(72);
  const [autoScrollProgress, setAutoScrollProgress] = useState(100);
  const [isHovering, setIsHovering] = useState(false);

  const pageShiftPxRef = useRef(436);
  const slideTimeoutRef = useRef(null);
  const trackRef = useRef(null);
  const sizingRef = useRef(null);
  const autoScrollTimerRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

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

    // Measure name/role height
    const nameRoleSections = Array.from(
      sizingRef.current.querySelectorAll("[data-name-role='true']"),
    );
    if (nameRoleSections.length > 0) {
      const maxNameRoleHeight = nameRoleSections.reduce((max, node) => {
        const current = Math.ceil(node.getBoundingClientRect().height);
        return Math.max(max, current);
      }, 0);
      if (maxNameRoleHeight > 0) {
        setUniformNameRoleHeight(maxNameRoleHeight);
      }
    }
  }, []);

  useEffect(() => {
    measureUniformCardHeight();
  }, [
    measureUniformCardHeight,
    visibleCount,
    stories,
    startIndex,
    visibleStories,
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    window.addEventListener("resize", measureUniformCardHeight);
    return () => window.removeEventListener("resize", measureUniformCardHeight);
  }, [measureUniformCardHeight]);

  useEffect(() => {
    const timer = setTimeout(() => {
      measureUniformCardHeight();
    }, 1200);
    return () => clearTimeout(timer);
  }, [measureUniformCardHeight, visibleCount, stories]);

  useEffect(() => {
    const timer = setTimeout(() => {
      measureUniformCardHeight();
    }, 2000);
    return () => clearTimeout(timer);
  }, [measureUniformCardHeight, visibleCount, stories]);

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

  useEffect(() => {
    if (isSliding) return;

    let timeElapsed = 0;
    const AUTO_SCROLL_DELAY = 5000;
    const PROGRESS_UPDATE_INTERVAL = 100;

    // Single interval that pauses when hovering but doesn't restart
    const interval = setInterval(() => {
      if (!isHoveringRef.current) {
        timeElapsed += PROGRESS_UPDATE_INTERVAL;
        const progress = Math.max(
          0,
          100 - (timeElapsed / AUTO_SCROLL_DELAY) * 100,
        );
        setAutoScrollProgress(progress);

        if (timeElapsed >= AUTO_SCROLL_DELAY) {
          if (currentPageIndex >= lastPageIndex) {
            goToPage(0);
          } else {
            nextStory();
          }
          timeElapsed = 0;
          setAutoScrollProgress(100);
        }
      }
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isSliding, currentPageIndex, lastPageIndex, nextStory, goToPage]);

  return (
    <div className="relative mb-0 overflow-hidden rounded-3xl bg-transparent py-6 md:py-8 xl:py-6">
      <div className="relative z-10 mb-4 text-center md:mb-6 xl:mb-5">
        <h2
          className="mb-2 overflow-visible px-4 pb-1 text-4xl font-bold tracking-tight leading-[1.1] md:text-5xl lg:text-6xl drop-shadow-sm"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            width: "100%",
          }}
        >
          Trusted by the best
        </h2>
        <p
          className="overflow-visible px-4 text-lg font-semibold tracking-tight leading-[1.3] md:text-xl lg:text-xl text-opacity-90"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            width: "100%",
          }}
        >
          Read what the students, colleges and corporate leaders have to say
          about us!
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
                  className="relative flex h-full w-full flex-col overflow-visible rounded-2xl shadow-[0_10px_40px_rgba(28,85,128,0.18)] hover:shadow-[0_15px_50px_rgba(28,85,128,0.22)] transition-all duration-300"
                >
                  {/* Testimonial Section */}
                  <div className="relative flex-1 bg-[linear-gradient(165deg,#f6fbff_0%,#dff1fb_100%)] rounded-t-2xl border border-[#a8d4eb] p-4 md:p-5 flex flex-col justify-center">
                    <div
                      className="absolute left-6 top-3 select-none text-5xl md:text-6xl font-black leading-none text-[#5a9fcc] opacity-15"
                      style={{
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      "
                    </div>
                    <p className="relative z-10 text-center font-semibold leading-normal text-[#1a3d5c] text-sm md:text-[0.95rem]">
                      {story.text}
                    </p>
                  </div>

                  {/* Person's Circular Photo - Overlapping */}
                  <div className="relative flex justify-center -my-6 z-20">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-linear-to-br from-[#f0f8ff] to-[#e6f2ff]">
                      <img
                        src={story.personImage || story.image}
                        alt={story.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        onLoad={measureUniformCardHeight}
                      />
                    </div>
                  </div>
                  <br />

                  {/* Name & Role - Simple */}
                  <div
                    data-name-role="true"
                    className="relative bg-white rounded-b-2xl border border-t-0 border-[#a8d4eb] p-2 md:p-3 pt-2 md:pt-3 flex flex-col justify-start"
                    style={{ minHeight: `${uniformNameRoleHeight}px` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-0">
                      <h3 className="font-black text-[#0d3d6b] text-sm md:text-base mb-1 text-center">
                        {story.name}
                      </h3>
                      <p className="text-[#375e56] text-xs md:text-xs font-medium leading-tight text-center">
                        {story.role}
                      </p>
                    </div>

                    {/* Company Logo */}
                    <div className="flex justify-center items-center pt-1 border-t border-[#d0e4f2] mt-auto">
  <div
    className="rounded-lg flex items-center justify-center bg-white"
    style={{ flex: "1", height: "100px" }}
  >
    <img
      src={story.image}
      alt="Organization"
      className="max-w-[90%] max-h-[80%] object-contain"
      loading="lazy"
    />
  </div>
</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-3 hidden gap-3 lg:grid lg:grid-cols-3 lg:pr-20">
          {[
            { id: "students", label: "Students" },
            { id: "colleges", label: "Colleges" },
            { id: "corporate", label: "Corporate" },
          ].map((header) => (
            <div
              key={header.id}
              className="rounded-2xl border border-[#8fbde8] bg-white/80 py-3 px-2 text-center text-3xl font-bold text-[#0d3d6b] shadow-[0_8px_28px_rgba(31,95,148,0.18)] backdrop-blur-md hover:bg-white/90 transition-all duration-200"
            >
              {header.label}
            </div>
          ))}
        </div>

        <div className="relative lg:pr-20" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <div
            className="relative z-10 overflow-hidden"
            style={{ height: `${pageViewportHeight}px` }}
          >
            <div
              ref={trackRef}
              className={`flex flex-col gap-3 ${
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
                  className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
                >
                  {group.map((story) => (
                    <article key={`story-${groupIndex}-${story.id}`}>
                      <div
                        className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-[#a8d4eb] bg-[linear-gradient(165deg,#f6fbff_0%,#dff1fb_100%)] shadow-[0_10px_40px_rgba(28,85,128,0.18)] hover:shadow-[0_15px_50px_rgba(28,85,128,0.22)] backdrop-blur-xl transition-all duration-300"
                        style={{ height: `${uniformCardHeight}px` }}
                      >
                        {/* Testimonial Section */}
                        <div className="relative flex-1 bg-[linear-gradient(165deg,#f6fbff_0%,#dff1fb_100%)] rounded-t-2xl border border-[#a8d4eb] p-4 md:p-5 flex flex-col justify-center">
                          <div
                            className="absolute left-6 top-3 select-none text-5xl md:text-6xl font-black leading-none text-[#5a9fcc] opacity-15"
                            style={{
                              fontFamily: '"Playfair Display", serif',
                            }}
                          >
                            "
                          </div>
                          <p className="relative z-10 text-center font-semibold leading-normal text-[#1a3d5c] text-sm md:text-[0.95rem]">
                            {story.text}
                          </p>
                        </div>

                        {/* Person's Circular Photo - Overlapping */}
                        <div className="relative flex justify-center -my-6 z-20">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-linear-to-br from-[#f0f8ff] to-[#e6f2ff]">
                            <img
                              src={story.personImage || story.image}
                              alt={story.name}
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                              onLoad={measureUniformCardHeight}
                            />
                          </div>
                        </div>
                        <br />

                        {/* Name & Role - Simple */}
                        <div
                          data-name-role="true"
                          className="relative bg-white rounded-b-2xl border border-t-0 border-[#a8d4eb] p-2 md:p-3 pt-2 md:pt-3 flex flex-col justify-start"
                          style={{ minHeight: `${uniformNameRoleHeight}px` }}
                        >
                          <div className="flex flex-col items-center justify-center gap-0">
                            <h3 className="font-black text-[#0d3d6b] text-sm md:text-base mb-1 text-center">
                              {story.name}
                            </h3>
                            <p className="text-[#375e56] text-xs md:text-xs font-medium leading-tight text-center">
                              {story.role}
                            </p>
                          </div>

                          {/* Company Logo */}
                          <div className="flex justify-center items-center pt-1 border-t border-[#d0e4f2] mt-auto">
                            <div
                              className="rounded-lg flex items-center justify-center"
                              style={{ flex: "1", height: "100px" }}
                            >
                              <img
                                src={story.image}
                                alt="Organization"
                                className="w-full h-full object-contain"
                                loading="lazy"
                              />
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
                className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#5a9fcc] bg-linear-to-br from-white/70 to-white/50 text-2xl text-[#1f709d] shadow-[0_4px_12px_rgba(35,105,150,0.18)] transition-all duration-300 hover:-translate-y-1 hover:from-white/85 hover:to-white/65 hover:shadow-[0_8px_16px_rgba(35,105,150,0.24)] hover:border-[#3d8dbe] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:shadow-[0_2px_6px_rgba(35,105,150,0.08)] font-semibold"
                aria-label="Previous testimonial"
                disabled={isSliding || currentPageIndex <= 0}
              >
                <span className="-mt-0.5">↑</span>
              </button>

              <div className="flex items-center justify-center gap-2.5 lg:flex-col lg:gap-2.5 w-full lg:w-auto">
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
                      className={`rounded-full transition-all duration-300 overflow-hidden relative ${
                        isActive
                          ? "h-3 w-8 bg-[#1f6fa8] shadow-[0_3px_10px_rgba(47,132,184,0.35)] lg:h-9 lg:w-3"
                          : "h-3 w-3 bg-[#2f84b8]/70 hover:bg-[#1f6fa8] hover:shadow-[0_2px_6px_rgba(31,106,168,0.25)]"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-full overflow-hidden bg-[#d1e7f4]">
                          <div
                            className="absolute top-0 w-full bg-[#1f6fa8] rounded-b-full"
                            style={{
                              height:
                                window.innerWidth >= 1024
                                  ? `${100 - autoScrollProgress}%`
                                  : "100%",
                              width: "100%",
                              transition: "height 100ms linear",
                              willChange: "height",
                            }}
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 rounded-full pointer-events-none border-2 border-[#2f84b8]/80" />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={nextStory}
                className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#5a9fcc] bg-linear-to-br from-white/70 to-white/50 text-2xl text-[#1f709d] shadow-[0_4px_12px_rgba(35,105,150,0.18)] transition-all duration-300 hover:-translate-y-1 hover:from-white/85 hover:to-white/65 hover:shadow-[0_8px_16px_rgba(35,105,150,0.24)] hover:border-[#3d8dbe] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0 disabled:shadow-[0_2px_6px_rgba(35,105,150,0.08)] font-semibold"
                aria-label="Next testimonial"
                disabled={isSliding || currentPageIndex >= lastPageIndex}
              >
                <span className=" -mt-0.5">↓</span>
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
      className="relative py-4 md:py-6"
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
