/* eslint-disable react/prop-types */
import { useEffect, useMemo, useRef, useState } from "react";

const TestimonialCard = ({ review }) => {
  const stars = Array.from({ length: review.rating }, (_, i) => i);

  return (
    <div className="bg-white bg-opacity-5 backdrop-blur p-8 rounded-xl hover:bg-opacity-10 transition border border-white border-opacity-10">
      <div className="flex items-center mb-4">
        {stars.map((i) => (
          <span key={`star-${review.name}-${i}`} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <p className="text-black mb-4 italic">&quot;{review.text}&quot;</p>
      <div className="border-t border-white border-opacity-10 pt-4">
        <h4 className="font-bold text-black">{review.name}</h4>
        <p className="text-sm text-black">{review.role}</p>
        <p className="text-sm text-yellow-400">{review.company}</p>
      </div>
    </div>
  );
};

function StudentSuccessStories() {
  const stories = useMemo(() => [
    {
      id: 1,
      name: "Mayuri Samanta",
      role: "Fresher to SDE1 at LogWinTech Pvt. Ltd.",
      initials: "MS",
      text:"Mayuri comes from Navsari near Surat in Gujarat. She was a bright student in school and even received recognition in local newspapers after scoring excellent marks in her 12th-grade exams. After choosing commerce, she aspired to become a Chartered Accountant while supporting her family by giving tuition to neighbourhood children. However, after several unsuccessful attempts at the CA exams, she began facing pressure from her family to get married.Wanting to change her path, Mayuri joined Gryphon Academy, where she trained in Java and developed strong technical and communication skills through intensive industry-focused learning. Her hard work paid off when she secured a job as a Java Developer at LogwinTech Pvt. Ltd. Today, Mayuri is building a successful career in tech. Her journey shows that with determination, the right guidance, and continuous learning, it’s possible to completely transform one’s future. 🚀"

,
      city: "Navsari"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Associate Software Engineer at ByteWave",
      initials: "RV",
      text: "I came from a tier-3 college and lacked confidence in DSA and system fundamentals. Through structured mentorship, peer coding sessions, and placement preparation, I built a strong base. The support team helped me refine my resume and communication, and I eventually secured my first software engineering role.",
      city: "Bhopal"
    },
    {
      id: 3,
      name: "Sneha Iyer",
      role: "Data Analyst at QuantHive",
      initials: "SI",
      text: "I had theoretical knowledge but no confidence in applying it to real business problems. The live projects, regular reviews, and interview drills helped me improve rapidly. I learned SQL, visualization, and stakeholder communication, which directly helped me crack my analyst interviews.",
      city: "Pune"
    },
    {
      id: 4,
      name: "Aditya Singh",
      role: "Frontend Engineer at PixelMint",
      initials: "AS",
      text: "I struggled with consistency and lacked an execution plan. Weekly goals, mentor checkpoints, and project deadlines gave me the structure I needed. By the end of the program, I had production-style projects and enough confidence to clear interviews and start my frontend career.",
      city: "Lucknow"
    },
    {
      id: 5,
      name: "Neha Kulkarni",
      role: "Software Engineer at OrbitSoft",
      initials: "NK",
      text: "I was unsure how to transition from learning concepts to solving real interview problems. The structured curriculum, weekly coding tests, and mentorship calls helped me become consistent. I improved my problem-solving speed and communication, and finally secured a software engineer role.",
      city: "Nagpur"
    }
  ], []);

  const [cardOrder, setCardOrder] = useState(stories.map((_, index) => index));
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimerRef = useRef(null);
  const activeIndex = cardOrder[0];
  const animationMs = 500;

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setCardOrder((prev) => {
      const normalized = prev.filter(
        (idx) => idx >= 0 && idx < stories.length
      );
      for (let idx = 0; idx < stories.length; idx += 1) {
        if (!normalized.includes(idx)) {
          normalized.push(idx);
        }
      }

      if (
        normalized.length === prev.length &&
        normalized.every((val, i) => val === prev[i])
      ) {
        return prev;
      }

      return normalized;
    });
  }, [stories.length]);

  const startAnimationLock = () => {
    setIsAnimating(true);
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    animationTimerRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, animationMs);
  };

  const nextStory = () => {
    if (isAnimating) {
      return;
    }
    startAnimationLock();
    setCardOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevStory = () => {
    if (isAnimating) {
      return;
    }
    startAnimationLock();
    setCardOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const goToStory = (targetIndex) => {
    if (targetIndex === activeIndex || isAnimating) {
      return;
    }
    startAnimationLock();
    setCardOrder((prev) => {
      const targetPos = prev.indexOf(targetIndex);
      return [...prev.slice(targetPos), ...prev.slice(0, targetPos)];
    });
  };

  const getStackState = (slot) => {
    if (slot < 0) {
      return {
        className: "opacity-0 pointer-events-none",
        style: {
          transform: "translateY(-80px) scale(0.84)",
          borderColor: "transparent",
          backgroundColor: "transparent",
          zIndex: 0
        }
      };
    }

    if (slot === 0) {
      return {
        className: "z-30 pointer-events-auto",
        style: {
          transform: "translateY(0px) scale(1)",
          borderColor: "#FDC800",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 26px 56px rgba(253, 200, 0, 0.22)"
        }
      };
    }

    const translateY = -20 * slot;
    const scale = Math.max(1 - slot * 0.045, 0.78);
    const borderAlpha = Math.max(0.8 - slot * 0.15, 0.16);
    const bgAlpha = Math.max(1 - slot * 0.2, 0.1);
    const zIndex = Math.max(30 - slot, 1);

    return {
      className: "pointer-events-none",
      style: {
        transform: `translateY(${translateY}px) scale(${scale})`,
        borderColor: `rgba(253, 200, 0, ${borderAlpha})`,
        backgroundColor: `rgba(255, 255, 255, ${bgAlpha})`,
        boxShadow: `0 ${18 - slot * 2}px ${38 - slot * 3}px rgba(253, 200, 0, ${Math.max(
          0.14 - slot * 0.02,
          0.06
        )})`,
        zIndex
      }
    };
  };

  const renderStoryContent = (story) => (
    <>
      <div className="mb-4 flex items-end gap-2 text-[#d9d9d9] leading-none">
        <span className="text-7xl md:text-8xl font-black">“</span>
        <span className="text-7xl md:text-8xl font-black">“</span>
      </div>
      <p className="text-[#475569] text-lg md:text-[1.05rem] leading-[1.65] min-h-[230px] md:min-h-[250px]">
        {story.text}
      </p>

      <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#fff7cc] text-[#FDC800] font-bold flex items-center justify-center text-sm">
          {story.initials}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#FDC800]">{story.name}</h3>
          <p className="text-[#495061] text-xl">{story.role}</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="mb-24 py-20 md:py-24 bg-[#01224F] rounded-3xl">
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-7xl font-bold text-[#FFFFFF] mb-3 tracking-tight">
          Shaping Success Stories Since 2019
        </h2>
        <p className="text-2xl md:text-6xl text-[#FFFFFF] font-bold tracking-tight">
          Your Goal. Our Mission
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative min-h-[560px] md:min-h-[620px]">
          {stories.map((story, storyIndex) => {
            const slot = cardOrder.indexOf(storyIndex);
            const stackState = getStackState(slot);

            return (
              <article
                key={story.id}
                className={`absolute inset-x-0 top-0 mx-auto w-full rounded-[2.2rem] border p-7 md:p-12 transition-[transform] duration-500 ease-in-out ${stackState.className}`}
                style={stackState.style}
              >
                {slot === 0 ? (
                  renderStoryContent(story)
                ) : (
                  <div className="h-full min-h-[420px] md:min-h-[460px] opacity-0" />
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prevStory}
            className="h-14 w-14 rounded-full border border-[#FDC800] text-[#FDC800] text-4xl leading-none flex items-center justify-center hover:bg-[#ffffff12] transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <span className="-mt-1">‹</span>
          </button>

          <div className="flex items-center gap-3">
            {stories.map((story, idx) => (
              <button
                key={story.id}
                type="button"
                onClick={() => goToStory(idx)}
                className={`h-3 rounded-full transition-all ${
                  idx === activeIndex ? "w-10 bg-[#FDC800]" : "w-3 bg-[#fde68a]"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextStory}
            className="h-14 w-14 rounded-full border border-[#FDC800] text-[#FDC800] text-4xl leading-none flex items-center justify-center hover:bg-[#ffffff12] transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <span className="-mt-1">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const corporateReviews = [
    {
      name: "Vikram Patel",
      role: "HR Director",
      company: "Accenture",
      text: "Gryphon Academy's hiring assistance program has been instrumental in building our talent pipeline. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Nair",
      role: "Training Head",
      company: "Infosys",
      text: "Their corporate training solutions are tailored perfectly to our needs. Outstanding ROI and employee satisfaction.",
      rating: 5
    }
  ];

  const collegeReviews = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Dean",
      company: "Tech Institute",
      text: "The end-to-end admission and placement support has significantly improved our institutional metrics.",
      rating: 5
    },
    {
      name: "Prof. Sneha Desai",
      role: "Placement Coordinator",
      company: "Engineering College",
      text: "Their induction programs and placement drives have transformed our placement records. Partnering with Gryphon was the best decision!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#01224F] border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <StudentSuccessStories />

        {/* Corporate Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Corporate Partners
            </h2>
            <p className="text-white">What leading organizations say about us</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {corporateReviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </div>

        {/* College Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">College Partners</h2>
            <p className="text-white">
              Institutions benefit from our comprehensive solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {collegeReviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
