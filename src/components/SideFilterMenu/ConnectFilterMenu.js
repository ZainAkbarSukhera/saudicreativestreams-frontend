import React from 'react';

import skill_icon from '../../assets/skill_icon.png';
import experience_icon from '../../assets/experience_icon.png';
import location_icon from '../../assets/location_icon.png';
import budget_icon from '../../assets/budget_icon.png';
import availability_icon from '../../assets/availability_icon.png';

const ConnectFilterMenu = () => {
  return (
    <div className='mt-28 border-r border-black'>
      <div className="w-60 h-full p-4 left-0 bg-white">
        {/* Calligraphy Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src={skill_icon} alt="skill icon" className='w-8' />
            <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">SKILLS</h3>
          </div>
          <div>
            <span className="ml-2 text-yankees-blue font-montserrat-light text-sm">CALLIGRAPHY</span><br />
            <span className="ml-2 text-yankees-blue font-montserrat-light text-xs">ARABIC CALLIGRAPHY STYLES</span>
          </div>

          {["Naskh", "Thuluth", "Diwani", "Kufi", "Ruq'ah", "Farisi (Persian)", "Maghrebi"].map((style, index) => (
            <label key={index} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="arabicCalligraphy" className="mr-1 w-2 h-2 text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{style}</span>
            </label>
          ))}

          <div>
            <span className="ml-2 text-yankees-blue font-montserrat-light text-xs">WESTERN CALLIGRAPHY STYLES</span>
          </div>

          {["Italic", "Gothic", "Copperplate", "Uncial", "Roman Capitals"].map((style, index) => (
            <label key={index} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="westernCalligraphy" className="mr-1 w-2 h-2 text-black focus:ring-black" />
              <span className="text-xs text-black font-montserrat-light">{style}</span>
            </label>
          ))}
        </div>

        {/* Drawing & Illustration Section */}
        <div className="mb-6">
          <div>
            <span className="ml-2 text-yankees-blue font-montserrat-light text-sm">DRAWING & ILLUSTRATION</span><br />
            <span className="ml-2 text-yankees-blue font-montserrat-light text-xs">DRAWING</span>
          </div>

          <div >
            {["Realistic Drawing", "Portrait Drawing", "Character Design", "Environmental Drawing", "Still Life Drawing", "Gesture Drawing", "Perspective Drawing", "Line Drawing"].map((type, index) => (
              <label key={index} className="flex items-center mb-1 text-yankees-blue font-montserrat-light">
                <input type="radio" name="drawingType" className="mr-1 w-2 h-2 text-black focus:ring-black" />
                <span className="text-xs text-black">{type}</span>
              </label>
            ))}
          </div>

          <div>
            <span className="ml-2 text-yankees-blue font-montserrat-light text-xs">ILLUSTRATION</span>
          </div>

          <div >
            {["Digital Illustration", "Vector Illustration", "Editorial Illustration", "Fashion Illustration", "Scientific Illustration", "Manga/Anime Illustration"].map((type, index) => (
              <label key={index} className="flex items-center mb-1 text-yankees-blue font-montserrat-light">
                <input type="radio" name="illustrationType" className="mr-1 w-2 h-2 text-black focus:ring-black" />
                <span className="text-xs text-black">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src={experience_icon} alt="experience icon" className='w-8' />
            <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">EXPERIENCE</h3>
          </div>

          <div >
            {["Beginner (0-2 years)", "Intermediate (3-5 years)", "Advanced (6-10 years)", "Professional (11+ years)"].map((level, index) => (
              <label key={index} className="flex items-center mb-1 text-yankees-blue font-montserrat-light">
                <input type="radio" name="experienceLevel" className="mr-1 w-2 h-2 text-black focus:ring-black" />
                <span className="text-xs text-black">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src={location_icon} alt="location icon" className='w-8' />
            <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">LOCATION</h3>
          </div>

          <div >
            {["Riyadh", "Jeddah", "Makkah", "Madina", "Khobar", "Dammam", "Tabuk", "Ta'if", "Abha", "Khamis Mushait", "Buraidah", "Hail"].map((location, index) => (
              <label key={index} className="flex items-center mb-1 text-yankees-blue font-montserrat-light">
                <input type="radio" name="location" className="mr-1 w-2 h-2 text-black focus:ring-black" />
                <span className="text-xs text-black">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src={budget_icon} alt="budget icon" className='w-8' />
            <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">BUDGET</h3>
          </div>

          <div >
            {["Free", "Under 1,000 SAR", "1,000 SAR - 5,000 SAR", "5,000 SAR - 10,000 SAR", "Custom Budget"].map((budget, index) => (
              <label key={index} className="flex items-center mb-1 text-yankees-blue font-montserrat-light">
                <input type="radio" name="budget" className="mr-1 w-2 h-2 text-black focus:ring-black" />
                <span className="text-xs text-black">{budget}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability Section */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <img src={availability_icon} alt="availability icon" className='w-8' />
            <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">AVAILABILITY</h3>
          </div>

          <div >
            {["Immediately Available", "Available within 1-2 weeks", "Available within 1 month", "Part-Time", "Full-Time"].map((availability, index) => (
              <label key={index} className="flex items-center mb-1 text-yankees-blue font-montserrat-light">
                <input type="radio" name="availability" className="mr-1 w-2 h-2 text-black focus:ring-black" />
                <span className="text-xs text-black">{availability}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectFilterMenu;
