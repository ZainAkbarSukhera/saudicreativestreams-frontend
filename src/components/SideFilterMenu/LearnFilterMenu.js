import React from 'react';

import skill_icon1 from '../../assets/skill_icon.png';
import skilllevel_icon from '../../assets/skilllevel_icon.png';
import workshoptype_icon from '../../assets/workshoptype_icon.png';
import duration_icon from '../../assets/duration_icon.png';
import language_icon from '../../assets/language_icon.png';
import certifications_icon from '../../assets/certification_icon.png';
import location_icon from '../../assets/location_icon.png';
import pricerange_icon from '../../assets/pricerange_icon.png';


const LearnFilterMenu = () => {
  return (
    <div className='mt-28'>
      <div className="w-60 h-full p-4 border-r border-black left-0 bg-white">
      {/* Calligraphy Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
        <img src={skill_icon1} alt="skill icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">SKILLS</h3>
        </div>
        <div>
        <span className="ml-2 text-yankees-blue  font-montserrat-light text-sm">CALLIGRAPHY</span><br />
        <span className="ml-2 text-yankees-blue  font-montserrat-light text-xs">ARABIC CALLIGRAPHY STYLES</span>
        </div>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Naskh</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Thuluth</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Diwani</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Kufi</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Ruq'ah</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Farisi (Persian)</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Maghrebi</span>
          </label>
        </div>
     
      <div>
        <span className="ml-2 text-yankees-blue  font-montserrat-light text-xs">WESTERN CALLIGRAPHY STYLES</span>
      </div>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Italic</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Gothic</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Copperplate</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Uncial</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black  font-montserrat-light">Roman Capitals</span>
          </label>
        </div>
  

      {/* Drawing & Illustration Section */}
      <div className="mb-6">
        <div>
        <span className="ml-2 text-yankees-blue  font-montserrat-light text-sm">DRAWING & ILLUSTRATION</span><br />
        <span className="ml-2 text-yankees-blue  font-montserrat-light text-xs">DRAWING</span>
        </div>
        <div className="ml-6">
          {['Realistic Drawing','Portrait Drawing','Character Design','Environmental Drawing','Still Life Drawing','Gesture Drawing','Perspective Drawing','Line Drawing'].map((type) => (
            <label key={type} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="projectType" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{type}</span>
            </label>
          ))}
        </div>
        <div>
        <span className="ml-2 text-yankees-blue  font-montserrat-light text-xs">ILLUSTRATION</span>
        </div>
        <div className="ml-6">
          {['Digital Illustration','Vector Illustration','Editorial Illustration','Fashion Illustration','Scientific Illustration','Manga/Anime Illustration'].map((type) => (
            <label key={type} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="projectType" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* skill level Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
        <img src={skilllevel_icon} alt="skill level icon" className='w-8' />
                <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">SKILL LEVEL</h3>
              </div>
        <div className="ml-6">
          {[
            'Beginner (0-2 years)',
            'Intermediate (3-5 years)',
            'Advanced (6-10 years)',
            'Professional (11+ years)',
          ].map((SkillLevel) => (
            <label key={SkillLevel} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{SkillLevel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* workshop type Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <img src={workshoptype_icon} alt="workshop type icon" className='w-8' />
                <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">WORKSHOP TYPE</h3>
              </div>
        <div className="ml-6">
          {[
            'In-Person Workshop',
            'Lecture/Seminar',
            'Online / Remote',
            'Hybrid (Online & In-Person)',
          ].map((WorkshopType) => (
            <label key={WorkshopType} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{WorkshopType}</span>
            </label>
          ))}
        </div>
      </div>

      {/* duration Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <img src={duration_icon} alt="duration icon" className='w-8' />
                <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">DURATION</h3>
              </div>
        <div className="ml-6">
          {[
            'One-Day Workshop',
            'Two Day Workshop',
            'Three Day Workshop',
            'Five Day Workshop',
          ].map((duration) => (
            <label key={duration} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{duration}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Language Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <img src={language_icon} alt="language icon" className='w-8' />
                <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">LANGUAGE</h3>
              </div>
        <div className="ml-6">
          {[
            'Arabic',
            'English',
            'Other',
          ].map((language) => (
            <label key={language} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{language}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
      <img src={certifications_icon} alt="certification icon" className='w-8' />
                <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">CERTIFICATIONS</h3>
              </div>
        <div className="ml-6">
          {[
            'Certificate of Completion',
            'Professional Accreditation',
            'Nano Certificate',
            'No Certification',
          ].map((Certifications) => (
            <label key={Certifications} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{Certifications}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className='mb-6'>
        <div className="flex items-center mb-2">
        <img src={location_icon} alt="location icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">LOCATION</h3>
        </div>
        <div className="ml-6">
          {[
            'Riyadh',
            'Jeddah',
            'Makkah',
            'Madina',
            'Khobar',
            'Dammam',
            'Tabuk',
            'Ta\'if',
            'Abha',
            'Khamis Mushait',
            'Buraidah',
            'Hail',
          ].map((location) => (
            <label key={location} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="location" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
      <img src={pricerange_icon} alt="price range icon" className='w-8' />
          <h3 className="ml-2 text-yankees-blue  font-montserrat-light text-sm">PRICE RANGE</h3>
        </div>
        <div className="ml-6">
          {[
            'Free',
            'Under SAR 500',
            'SAR 500 - SAR 1,000',
            'SAR 1,000 - SAR 5,000',
            'Above SAR 5,000',
          ].map((price) => (
            <label key={price} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black  font-montserrat-light">{price}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
    
  );
};

export default LearnFilterMenu;