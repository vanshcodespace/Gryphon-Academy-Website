export default function Events() {
  const events = [
    {
      name: "SNS 2024",
      date: "2024",
      description: "Annual summit bringing together industry leaders and professionals",
      category: "Summit"
    },
    {
      name: "Vyom 2025",
      date: "2025",
      description: "Innovation conference showcasing cutting-edge technologies",
      category: "Conference"
    },
    {
      name: "Masterclass Series",
      date: "2022 & 2023",
      description: "Expert-led sessions on industry best practices and trends",
      category: "Workshop"
    },
    {
      name: "Trainers Meet & Greet",
      date: "2025",
      description: "Networking event connecting trainers and industry professionals",
      category: "Networking"
    },
    {
      name: "Connect n' Converse",
      date: "Ongoing",
      description: "Interactive discussion forums on professional development",
      category: "Discussion"
    },
    {
      name: "Foundation Day Celebration",
      date: "Annual",
      description: "Celebrating Gryphon Academy's founding and milestones",
      category: "Celebration"
    },
    {
      name: "Industrial Development Alliance (IDA)",
      date: "Ongoing",
      description: "Fostering partnerships between institutions and industries",
      category: "Partnership"
    },
    {
      name: "Industrial Women Alliance (IWA)",
      date: "Ongoing",
      description: "Empowering women professionals in the workplace",
      category: "Empowerment"
    },
    {
      name: "Innovation & Excellence",
      date: "Annual",
      description: "Recognition and celebration of outstanding achievements",
      category: "Recognition"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Summit: "from-[#01224F] to-[#01224F]",
      Conference: "from-[#01224F] to-[#1a3a6a]",
      Workshop: "from-[#01224F] to-[#01224F]",
      Networking: "from-[#01224F] to-[#1a3a6a]",
      Discussion: "from-[#01224F] to-[#01224F]",
      Celebration: "from-[#01224F] to-[#1a3a6a]",
      Partnership: "from-[#01224F] to-[#01224F]",
      Empowerment: "from-[#01224F] to-[#1a3a6a]",
      Recognition: "from-[#01224F] to-[#01224F]"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section className="py-20 bg-[#01224F] border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Events</h2>
          <p className="text-xl text-white">
            Connecting people, fostering innovation, and building networks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.name}
              className="bg-white bg-opacity-5 backdrop-blur rounded-xl overflow-hidden hover:bg-opacity-10 transition border border-white border-opacity-10"
            >
              <div className={`bg-linear-to-r ${getCategoryColor(event.category)} p-6 text-white`}>
                <div className="text-sm font-semibold mb-2 opacity-90">
                  {event.category}
                </div>
                <h3 className="text-2xl font-bold">{event.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-black mb-3">📅 {event.date}</p>
                <p className="text-black">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white bg-opacity-5 backdrop-blur rounded-xl p-12 text-center border border-white border-opacity-10">
          <h3 className="text-2xl font-bold text-black mb-4">
            Want to Partner With Us?
          </h3>
          <p className="text-black mb-6">
            Join our network of event partners and reach thousands of professionals
          </p>
          <button className="bg-yellow-400 text-[#01224F] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Learn About Partnerships
          </button>
        </div>
      </div>
    </section>
  );
}
