import React from 'react';

// Icon placeholders (replace with actual icons if needed)
const StatusIcon = () => <span>🔄</span>;
const ProjectTypeIcon = () => <span>📅</span>;
const EligibilityIcon = () => <span>📄</span>;
const LocationIcon = () => <span>📍</span>;

const LearnFilterMenu = () => {
  return (
    <div className='mt-28'>
      <div className="w-60 h-full p-4 border-r border-black left-0 bg-white">
      {/* Calligraphy Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <StatusIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">SKILLS</h3>
        </div>
        <div>
        <span className="ml-2 text-yankees-blue font-semibold text-sm">CALLIGRAPHY</span><br />
        <span className="ml-2 text-yankees-blue font-semibold text-xs">ARABIC CALLIGRAPHY STYLES</span>
        </div>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Naskh</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">Thuluth</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Diwani</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">Kufi</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Ruq'ah</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">Farisi (Persian)</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Maghrebi</span>
          </label>
        </div>
     
      <div>
        <span className="ml-2 text-yankees-blue font-semibold text-xs">WESTERN CALLIGRAPHY STYLES</span>
      </div>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Italic</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">Gothic</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Copperplate</span>
          </label>
          <label className="flex items-center text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">Uncial</span>
          </label>
          <label className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="status" className="mr-1 w-2 h-2 text-black focus:ring-black" />
            <span className="text-xs text-black">Roman Capitals</span>
          </label>
        </div>
  

      {/* Drawing & Illustration Section */}
      <div className="mb-6">
        <div>
        <span className="ml-2 text-yankees-blue font-semibold text-sm">DRAWING & ILLUSTRATION</span><br />
        <span className="ml-2 text-yankees-blue font-semibold text-xs">DRAWING</span>
        </div>
        <div className="ml-6">
          {['Realistic Drawing','Portrait Drawing','Character Design','Environmental Drawing','Still Life Drawing','Gesture Drawing','Perspective Drawing','Line Drawing'].map((type) => (
            <label key={type} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="projectType" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{type}</span>
            </label>
          ))}
        </div>
        <div>
        <span className="ml-2 text-yankees-blue font-semibold text-xs">ILLUSTRATION</span>
        </div>
        <div className="ml-6">
          {['Digital Illustration','Vector Illustration','Editorial Illustration','Fashion Illustration','Scientific Illustration','Manga/Anime Illustration'].map((type) => (
            <label key={type} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="projectType" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* skill level Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <LocationIcon />
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">EXPERIENCE</h3>
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
              <span className="text-xs text-black">{SkillLevel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className='mb-6'>
        <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">LOCATION</h3>
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
              <span className="text-xs text-black">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">BUDGET</h3>
        </div>
        <div className="ml-6">
          {[
            'Free',
            'Under 1,000 SAR',
            '1,000 SAR - 5,000 SAR',
            '5,000 SAR - 10,000 SAR',
            'Custom Budget',
          ].map((price) => (
            <label key={price} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{price}</span>
            </label>
          ))}
        </div>
      </div>


    {/* Availability Section */}
    <div className="mb-6">
    <div className="flex items-center mb-2">
        <LocationIcon />
        <h3 className="ml-2 text-yankees-blue font-semibold text-sm">AVAILABILITY</h3>
      </div>
      <div className="ml-6">
        {[
          'Immediately Available',
          'Available within 1-2 weeks',
          'Available within 1 month',
          'Part-Time',
          'Full-Time',
        ].map((price) => (
          <label key={price} className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">{price}</span>
          </label>
        ))}

      </div>
    </div>
  </div>
    
  );
};

export default LearnFilterMenu;