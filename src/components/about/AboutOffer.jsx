import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Local Images for Corporates
import corporateIcon1 from '../../assets/About/reading-group.png';
import corporateIcon2 from '../../assets/About/hr-a.png';
import corporateIcon3 from '../../assets/About/trophy-a.png';
import corporateIcon4 from '../../assets/About/leadership.png';
import corporateIcon5 from '../../assets/About/owner.png';

// Local Images for Colleges
import trainingProgramIcon from '../../assets/About/training-program.png';
import adaptabilityIcon from '../../assets/About/adaptability.png';
import lectureIcon from '../../assets/About/lecture.png';
import recruitmentIcon from '../../assets/About/recruitment.png';
import jobOpportunitiesIcon from '../../assets/About/job-opportunities.png';
import projectIcon from '../../assets/About/project.png';

function AboutOffer() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });

    AOS.refresh();
  }, []);

  const collegeOffers = [
    {
      icon: <img src={trainingProgramIcon} alt="Training Icon" className="w-16 h-16" />,
      description: 'Training Need Analysis and Competence Mapping',
    },
    {
      icon: <img src={adaptabilityIcon} alt="Customized Program Icon" className="w-16 h-16" />,
      description: 'Customized Industry Ready Programmes',
    },
    {
      icon: <img src={lectureIcon} alt="Guest Icon" className="w-16 h-16" />,
      description: 'Industry Guest Lectures',
    },
    {
      icon: <img src={recruitmentIcon} alt="Recruiter Icon" className="w-16 h-16" />,
      description: 'Empanelment with Industry: 450+ recruiters',
    },
    {
      icon: <img src={jobOpportunitiesIcon} alt="Job Icon" className="w-16 h-16" />,
      description: 'Job opportunities for Final Year Students',
    },
    {
      icon: <img src={projectIcon} alt="Last Mile Icon" className="w-16 h-16" />,
      description: 'Last mile programmes',
    },
  ];

  const corporateOffers = [
    {
      icon: <img src={corporateIcon1} alt="Trained Students Icon" className="w-16 h-16" />,
      description: 'Provide Trained Pool of students',
    },
    {
      icon: <img src={corporateIcon2} alt="HR Summits Icon" className="w-16 h-16" />,
      description: 'Curated HR Summits',
    },
    {
      icon: <img src={corporateIcon3} alt="HR Awards Icon" className="w-16 h-16" />,
      description: 'HR Excellence Awards',
    },
    {
      icon: <img src={corporateIcon4} alt="PAN India Talent Icon" className="w-16 h-16" />,
      description: 'Talent from PAN India',
    },
    {
      icon: <img src={corporateIcon5} alt="Corporate Trainings Icon" className="w-16 h-16" />,
      description: 'Corporate Trainings',
    },
  ];

  return (
    <section className="bg-[#01224F] w-full py-8" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#FFC80E] text-center mb-6">
        What We Offer
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Colleges Section - Left Side */}
        <div className="flex-1 flex flex-col items-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 text-center">For Colleges :</p>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 w-full px-2">
  {collegeOffers.map((offer, index) => (
    <div key={index} className="flex flex-col items-center justify-center text-center space-y-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
      <div className="flex-shrink-0 drop-shadow-md">
        {offer.icon}
      </div>
      <p className="text-sm md:text-lg font-medium text-gray-200">{offer.description}</p>
    </div>
  ))}
</div>

        </div>

        {/* Corporates Section - Right Side */}
        <div className="flex-1 flex flex-col items-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 text-center">For Corporates :</p>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 w-full px-2">
  {corporateOffers.map((offer, index) => (
    <div key={index} className="flex flex-col items-center justify-center text-center space-y-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
      <div className="flex-shrink-0 drop-shadow-md">
        {offer.icon}
      </div>
      <p className="text-sm md:text-lg font-medium text-gray-200">{offer.description}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutOffer;
