import React from 'react';
import rectImage from '../../assets/About/rect-i.avif';

function AboutNew() {
  return (
    <div className="p-0 text-center roboto-regular relative">
      {/* New Section: TRAINING EVALUATION JOURNEY */}
      <div className="w-full  bg-[#ffffff] relative">
        <link rel="preload" href={rectImage} as="image" />
        <img 
          src={rectImage} 
          alt="Infographic" 
          className="w-full  block mx-auto"
        />
      </div>
    </div>
  );
}

export default AboutNew;
