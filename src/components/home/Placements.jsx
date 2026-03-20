export default function Placements() {

  const companies = [
    "Indigo",
    "Air India",
    "Taj Hotels",
    "Accenture",
    "Infosys"
  ];

  return (
    <section className="py-20 bg-[#01224F] border-t border-white border-opacity-10">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-12 text-white">
          Our Placement Partners
        </h2>

        <div className="flex justify-center gap-12 flex-wrap text-xl font-semibold text-white">

          {companies.map((c) => (
            <div key={c} className="hover:text-yellow-400 transition">{c}</div>
          ))}

        </div>

      </div>

    </section>
  );
}