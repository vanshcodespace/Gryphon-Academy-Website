export default function Stats() {

  const stats = [
    { num: "10,000+", text: "Students Trained" },
    { num: "150+", text: "Hiring Partners" },
    { num: "92%", text: "Placement Rate" },
    { num: "12+", text: "Years Experience" },
  ];

  return (
    <section className="py-16 bg-[#01224F] border-t border-white border-opacity-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">

        {stats.map((s) => (
          <div key={s.text} className="bg-white bg-opacity-5 backdrop-blur p-8 rounded-xl border border-white border-opacity-10 hover:bg-opacity-10 transition">
            <h2 className="text-4xl font-bold text-yellow-400">
              {s.num}
            </h2>
            <p className="text-black mt-2">
              {s.text}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}