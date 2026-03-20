export default function WhyChooseUs() {
  const reasons = [
    {
      title: "What",
      description: "Comprehensive training programs across aviation, hospitality, and corporate sectors designed to make you industry-ready.",
      points: ["End-to-end curriculum", "Hands-on projects", "Industry certifications"]
    },
    {
      title: "How",
      description: "Through expert trainers, modern learning methodologies, and partnerships with leading companies in the industry.",
      points: ["Expert faculty", "Latest tools & tech", "Real-world case studies"]
    },
    {
      title: "Why",
      description: "Your one decision to choose Gryphon Academy can 100x your growth with guaranteed placement and career advancement.",
      points: ["92% placement rate", "Top recruiter network", "Career support"]
    }
  ];

  return (
    <section className="py-20 bg-[#01224F] border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Why Choose Gryphon Academy?
          </h2>
          <p className="text-xl text-white">
            Your one decision to choose us can 100x your growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white bg-opacity-5 backdrop-blur rounded-xl p-8 hover:bg-opacity-10 transition border border-white border-opacity-10"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400 text-[#01224F] flex items-center justify-center text-4xl font-bold mb-4">
                {reason.title}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {reason.title === "What" && "We Offer"}
                {reason.title === "How" && "We Deliver"}
                {reason.title === "Why" && "We Impact"}
              </h3>
              <p className="text-black mb-6">
                {reason.description}
              </p>
              <ul className="space-y-3">
                {reason.points.map((point) => (
                  <li key={point} className="flex items-center text-black">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-yellow-400 to-orange-500 rounded-xl p-12 text-[#01224F] text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-lg mb-8 opacity-90 font-semibold">
            Join thousands of successful professionals who've grown with Gryphon Academy
          </p>
          <button className="bg-[#01224F] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
