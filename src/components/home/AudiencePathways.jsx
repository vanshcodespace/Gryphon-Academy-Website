
import videoBridge from "../../assets/Bridge.mp4";

export default function AudiencePathways() {
  return (
    <section
      id="audience-pathways"
      className="relative w-full overflow-hidden bg-white pt-8 md:pt-10"
    >
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-white leading-none">
        <video
          ref={videoRef}
          className="block w-full h-auto align-top"
          autoPlay
          muted
          loop
          controlsList="nodownload"
          style={{ maxHeight: "100vh" }}
        >
          <source src={videoBridge} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Seam guard */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
      </div>

      {/* Service Boxes */}
      <div className="w-full px-6 pt-12 md:pt-16 pb-24 relative z-10 bg-linear-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-6 lg:gap-10">
          {/* Colleges Box */}
          <div className="group relative overflow-visible bg-linear-to-br from-blue-50 via-blue-50 to-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200/80 hover:border-blue-400 w-full md:max-w-lg lg:max-w-xl md:justify-self-end min-h-96 md:min-h-105 hover:-translate-y-2">
            <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-blue-300/30 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎓</span>
            </div>
            <div className="mt-4 relative z-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                For Colleges
              </h3>
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

          {/* Center Tagline */}
          <div className="hidden md:flex items-center justify-center px-2 lg:px-4">
            <div className="px-4 py-5 rounded-2xl border border-slate-200 bg-white/80 shadow-md backdrop-blur-xs">
              <p className="text-center text-xl lg:text-xl font-extrabold leading-8 tracking-[0.14em] text-slate-700">
                <span className="block">WE TRAIN YOU.</span>
                <span className="block">WE PREPARE YOU.</span>
                <span className="block">WE PLACE YOU.</span>
              </p>
            </div>
          </div>

          <div className="md:hidden py-2">
            <p className="text-center text-lg font-bold leading-relaxed tracking-wide text-slate-700">
              <span className="block">We Train You.</span>
              <span className="block">We Prepare You.</span>
              <span className="block">We Place You.</span>
            </p>
          </div>

          {/* Corporate Box */}
          <div className="group relative overflow-visible bg-linear-to-br from-orange-50 via-orange-50 to-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-orange-200/80 hover:border-orange-400 w-full md:max-w-lg lg:max-w-xl md:justify-self-start min-h-96 md:min-h-105 hover:-translate-y-2">
            <div className="pointer-events-none absolute -top-16 -left-16 h-44 w-44 rounded-full bg-orange-300/30 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-orange-200/35 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-orange-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🏢</span>
            </div>
            <div className="mt-4 relative z-10">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">
                For Corporates
              </h3>
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
