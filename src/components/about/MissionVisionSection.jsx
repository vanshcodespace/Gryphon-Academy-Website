import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import visionDotImage from '../../assets/About/Vision.png'; // Update with your actual vision dot image path
import missionDotImage from '../../assets/About/Mission.png'; // Update with your actual mission dot image path
import arrowImage from '../../assets/About/arrow.svg'; // Update with your actual arrow image path

const MissionVisionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing for animations
      once: true, // Animation only happens once
    });
  }, []);

  const fixedHeight = '250px'; // Set a fixed height for both cards

  return (
    <section 
      className="flex flex-col w-full h-auto bg-gradient-to-br from-blue-50 via-white to-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 py-12 roboto-regular overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl">

        {/* Vision Card */}
        <div
          className="flex-1 mx-4 md:mx-6 lg:mx-8 mt-2"
          style={{ minHeight: fixedHeight, boxSizing: 'border-box' }}
          data-aos="fade-right" // Animation effect for vision card
        >
          <h3 className="text-lg sm:text-xl md:text-4xl font-bold text-black mb-4 md:mb-4 lg:mb-8 drop-shadow-sm">
            Our <span className='text-[#01224F]'>Vision</span>
          </h3>
          <div className="bg-white/70 backdrop-blur-md border border-white/50 shadow-xl rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" style={{ minHeight: '80%', boxSizing: 'border-box' }}>
            <div className="flex flex-col items-start mb-4">
              <img src={visionDotImage} alt="Vision Dot" className="w-32 h-32 mb-1" />
              <img src={arrowImage} alt="Arrow" className="w-auto h-auto mb-2" />
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
                To create an industry-ready workforce within the walls of the institutions, through the customized learning & development programmes for professional courses.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div
          className="flex-1 mx-4 md:mx-6 lg:mx-8 mt-2"
          style={{ minHeight: fixedHeight, boxSizing: 'border-box' }}
          data-aos="fade-left" // Animation effect for mission card
          data-aos-delay="200" // Staggered delay for the mission card
        >
          <h3 className="text-lg sm:text-xl md:text-4xl font-bold text-black mb-4 md:mb-4 lg:mb-8 drop-shadow-sm">
            Our <span className='text-[#01224F]'>Mission</span>
          </h3>
          <div className="bg-white/70 backdrop-blur-md border border-white/50 shadow-xl rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" style={{ minHeight: '80%', boxSizing: 'border-box' }}>
            <div className="flex flex-col items-start mb-4">
              <img src={missionDotImage} alt="Mission Dot" className="w-32 h-32 mb-1" />
              <img src={arrowImage} alt="Arrow" className="w-auto h-auto mb-2" />
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
                To offer equal job opportunities to every student across all tiers, through a vast industry network.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;
