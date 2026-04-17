import videoBridge from "../../assets/Bridge4.mp4";

export default function AudiencePathways() {
  return (
    <section
      id="audience-pathways"
      className="relative w-full overflow-hidden bg-[#01224F]"
    >
      {/* Video Container */}
      <div className="relative w-full overflow-hidden bg-white leading-none">
        <video
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
        <div className="max-w-7xl mx-auto">
          {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-6 lg:gap-10">
          {/* Corporate Box */}
          <div className="group relative overflow-visible bg-linear-to-br from-orange-50 via-orange-50 to-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-orange-200/80 hover:border-orange-400 w-full md:max-w-lg lg:max-w-xl md:justify-self-end min-h-96 md:min-h-105 hover:-translate-y-2">
            <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-orange-300/30 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-orange-200/35 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-orange-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🏢</span>
            </div>
            <div className="mt-4 relative z-10">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-4xl mb-4 text-[#1B3A6B]">
                For Corporates
              </h3>
              <ul className="space-y-3 text-orange-800">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Zero-cost end-to-end campus hiring solutions for seamless and efficient recruitment processes across institutions </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Pre-trained and industry-ready talent pool available across all major academic and professional streams </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Job Description (JD)-aligned candidate preparation with role-specific training and assessment readiness </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Pan-India campus hiring drives conducted across 25+ cities ensuring wide talent reach and diversity </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span> Corporate training & L&D solutions </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 font-bold">•</span>
                  <span>Employer branding across our institutional network  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Heading Section */}
          <div className="hidden md:flex flex-col items-center justify-center px-2 lg:px-4 -mt-16 mb-8">
            <div className="text-center mb-6">
              <h2 className="mb-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-6xl" style={{
                background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Our Services
              </h2>
              <p className="text-lg text-gray-700 sm:text-xl">
                One Partner for Every Dimension of Growth
              </p>
            </div>
            <div className="px-6 py-6 rounded-2xl border-2 border-slate-300 bg-linear-to-br from-white to-slate-50 shadow-lg backdrop-blur-xs">
              <p className="text-center text-lg lg:text-2xl font-extrabold leading-8 tracking-[0.14em] text-slate-800">
                <span className="block">WE TRAIN YOU.</span>
                <span className="block">WE PREPARE YOU.</span>
                <span className="block">WE PLACE YOU.</span>
              </p>
            </div>
          </div>

          {/* Colleges Box */}
          <div className="group relative overflow-visible bg-linear-to-br from-blue-50 via-blue-50 to-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200/80 hover:border-blue-400 w-full md:max-w-lg lg:max-w-xl md:justify-self-start min-h-96 md:min-h-105 hover:-translate-y-2">
            <div className="pointer-events-none absolute -top-16 -left-16 h-44 w-44 rounded-full bg-blue-300/30 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-400 group-hover:scale-110 transition-transform">
              <span className="text-3xl">🎓</span>
            </div>
            <div className="mt-4 relative z-10">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-4xl mb-4 text-[#1B3A6B]">
                For Colleges
              </h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Professional training embedded in your curriculum (IRP & CLDP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Faculty Development Programmes </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Digital marketing, social media management & branding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Website development, landing pages & feedback systems </span>
                </li>
                 <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>End-to-end admissions support  </span>
                </li>
                 <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span> Campus events — fests, HR summits & corporate conclaves </span>
                </li>
                 <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Assessment platforms & customised feedback systems  </span>
                </li>
                 <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span>Recruiter connect & placement facilitation  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
