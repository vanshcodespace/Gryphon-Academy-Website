export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-[#01224F] text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Your Career With
            {" "}
            <span className="text-yellow-400">Industry Ready Skills</span>
          </h1>

          <p className="text-lg text-white mb-8">
            Professional training programs in aviation, hospitality
            and corporate sectors with placement support.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-[#01224F] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Explore Programs
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Download Brochure
            </button>
          </div>

        </div>

        <img
          src="/students.png"
          alt="Professional training students at work"
          className="rounded-xl shadow-2xl"
        />

      </div>

    </section>
  );
}