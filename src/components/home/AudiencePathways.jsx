
import videoBridge from "../../assets/Bridge.mp4";

export default function AudiencePathways() {
  return (
    <section
      id="audience-pathways"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Video Container */}
      <div className="relative w-full">
        <video
          className="w-full h-auto display-block"
          autoPlay
          muted
          loop
          controlsList="nodownload"
          style={{ maxHeight: "100vh" }}
        >
          <source src={videoBridge} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Shadow overlay connecting to boxes */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-black/10 to-black/5"></div>
      </div>

      {/* Service Boxes */}
      <div className="w-full px-6 pb-20 mt-0 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colleges Box */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎓</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">For Colleges</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Industry-ready curriculum development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Student placement assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Faculty training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Campus recruitment drives</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Corporate Box */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-400">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-orange-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🏢</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">For Corporates</h3>
              <ul className="space-y-3 text-orange-800">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Talent acquisition & recruitment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Employee training & development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Corporate events & programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Skill enhancement workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
