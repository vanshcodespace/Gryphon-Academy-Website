const galleryCards = [
  {
    id: "leading-minds",
    title: "A Lifetime Exposure To Leading Minds",
    description:
      "An immersive academic culture that brings students into dialogue with pioneers, innovators, and thought leaders through intra-mural and extra-mural engagements.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=80",
    className: "lg:col-span-6 lg:row-span-1",
  },
  {
    id: "study-tours",
    title: "Thrilling Study Tours & Academic Events",
    description:
      "Learning that travels beyond the classroom. Be it national industry tours or international academic summits, we offer a real-world context to every discipline.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    className: "lg:col-span-6 lg:row-span-1",
  },
  {
    id: "diverse-campus",
    title: "A Vibrant & Diverse Campus",
    description:
      "A community where cultures, disciplines, and ideas converge, celebrating diversity through art, festivals, research, and student-led initiatives.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: "nep-learning",
    title: "A Skill-Based & NEP Aligned Learning",
    description:
      "A forward-looking approach to education that integrates skill development, interdisciplinary learning, and NEP-driven pedagogy for future-ready graduates.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=80",
    className: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: "induction-programmes",
    title: "Structured Induction Programmes",
    description:
      "Thoughtfully designed orientation and bridge-learning experiences that help learners transition smoothly, build confidence, and begin with clarity.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
    className: "lg:col-span-4 lg:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f2f2f3] py-6 sm:py-8 lg:py-8">
      <div className="mx-auto max-w-400 px-3 sm:px-4">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:gap-1.5 lg:h-[78vh] lg:max-h-245 lg:min-h-160">
          {galleryCards.map((card) => (
            <article
              key={card.id}
              className={`group relative min-h-65 overflow-hidden rounded-2xl bg-slate-900 sm:min-h-75 lg:h-full ${card.className}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,5,12,0.88)_0%,rgba(2,5,12,0.72)_35%,rgba(2,5,12,0.2)_65%,rgba(2,5,12,0)_100%)]" />

              {card.id === "leading-minds" && (
                <p className="absolute left-5 top-5 z-10 text-sm font-semibold tracking-[0.24em] text-white sm:left-6 sm:top-6 sm:text-base lg:left-7 lg:top-7 lg:text-2xl">
                  EVENTS
                </p>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <h3 className="max-w-[20ch] text-[20px] font-semibold leading-[1.16] tracking-tight text-transparent bg-[linear-gradient(90deg,#d94f9f,#f1a352)] bg-clip-text sm:text-[22px] lg:text-[30px]">
                  {card.title}
                </h3>
                <p className="mt-2 max-w-[58ch] text-[11px] leading-[1.42] text-white/95 sm:text-xs lg:mt-2.5 lg:text-[15px] lg:leading-[1.32]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
