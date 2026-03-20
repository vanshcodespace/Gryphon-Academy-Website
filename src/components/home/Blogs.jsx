export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Professional Training in 2025",
      excerpt: "Discover the latest trends and technologies shaping the corporate training landscape.",
      category: "Training",
      date: "March 10, 2025",
      image: "📚"
    },
    {
      id: 2,
      title: "How to Land Your Dream Job: A Complete Guide",
      excerpt: "Expert tips on resume building, interview preparation, and salary negotiation.",
      category: "Career",
      date: "March 8, 2025",
      image: "🎯"
    },
    {
      id: 3,
      title: "The Role of Soft Skills in Career Success",
      excerpt: "Why communication, leadership, and emotional intelligence matter more than ever.",
      category: "Skills",
      date: "March 5, 2025",
      image: "💡"
    },
    {
      id: 4,
      title: "Industry 4.0: Preparing for the Digital Workplace",
      excerpt: "Understanding automation, AI, and its impact on future job markets.",
      category: "Industry",
      date: "March 1, 2025",
      image: "🤖"
    },
    {
      id: 5,
      title: "Success Stories: From Training to Top Positions",
      excerpt: "Real stories of our graduates who made it big in their careers.",
      category: "Success",
      date: "February 28, 2025",
      image: "🌟"
    },
    {
      id: 6,
      title: "Upskilling for Career Transition: A Roadmap",
      excerpt: "How to successfully switch careers with the right training and preparation.",
      category: "Transition",
      date: "February 25, 2025",
      image: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-[#01224F] border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Blogs</h2>
          <p className="text-xl text-gray-300">
            Insights, tips, and stories to guide your professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white bg-opacity-5 backdrop-blur rounded-xl overflow-hidden hover:bg-opacity-10 transition cursor-pointer group border border-white border-opacity-10"
            >
              <div className="bg-linear-to-br from-yellow-500 to-orange-600 h-48 flex items-center justify-center text-7xl">
                {blog.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400 bg-opacity-10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-black">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h3>
                <p className="text-black mb-6">{blog.excerpt}</p>
                <button className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-yellow-400 text-[#01224F] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
