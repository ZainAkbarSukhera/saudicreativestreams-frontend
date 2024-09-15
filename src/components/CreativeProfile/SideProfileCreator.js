import React from "react";
import { MdHexagon } from "react-icons/md";


const sideProfileBidder =({imageUrl,profilebio}) => {
  return (
    <div className="flex flex-col mb-8">
    <img 
      src={imageUrl} 
      alt="creatorImage"
      className="w-full h-auto rounded-md shadow-md col-span-1"
    />
    
    <div className=" flex flex-col lg:col-span-2">
    <p className=" text-sm font-montserrat-light mb-4 mt-4">{profilebio}</p>
  <div className="mt-4">
     {/* Badges Section */}
     <div className='mb-6'>
        <div className="flex items-center mb-2">
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">BADGES</h3>
        </div>
        <div>
          <p>*Insert Badges Here*</p>
          </div>
      </div>

      {/* skill Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">SKILLS</h3>
              </div>
        <div className="space-x-2">
          {[
            'Abstract Painting',
            'Colour Theory',
            'Mixed Media Techniques',
            'Large-Scale Art',
            'Concept Development',
            'Expressive Brushwork',
            'Public Art',
            'Installation Art',
          ].map((SkillLevel) => (
          <span className="border border-black rounded-md text-xs text-black">{SkillLevel}</span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">EXPERIENCE</h3>
              </div>
        <div >
          {[
            'Chief Operating Officer - UMT (2023 - Present)',
            'Art Consultant - PIF (2020-2021)', 
            'Creative Art Director - AQ Studios (2010 - Present)',
          ].map((Experience) => (
          <p className=" text-xs text-black">{Experience}</p>
          ))}
        </div>
      </div>

      {/* Exhibitions Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">EXHIBITIONS</h3>
              </div>
        <div >
          {[
            "Solo Exhibition: 'Vision in Motion' – New York (2022)",
            "Solo Exhibition: 'Color and Chaos' – Athr Gallery, Jeddah (2018)",
            "Group Exhibition: 'Art Dubai' – Dubai, UAE (2020)",
            "Solo Exhibition: 'Beyond Boundaries' – London (2019)",
            "Group Exhibition: 'Contemporary Voices' – Paris (2017)",
            "Solo Exhibition: 'The Awakening Series' – Riyadh (2016)",
          ].map((Exhibition) => (
          <p className="text-xs text-black">{Exhibition}</p>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">ACHIEVEMENTS</h3>
              </div>
        <div >
          {[
            "Venice Biennale – Saudi Pavilion (2019)",
            "Sharjah Biennial – United Arab Emirates (2017)",
            "Biennale of Contemporary Art – Florence, Italy (2015)",
          ].map((Achievements) => (
          <p className=" text-xs text-black">{Achievements}</p>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">EDUCATION</h3>
              </div>
        <div >
          {[
            "Bachelor of Arts in Fine Arts – Parsons School of Design, New York, USA",
          ].map((Education) => (
          <p className=" text-xs text-black">{Education}</p>
          ))}
        </div>
      </div>

      {/* Digital Tools Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">DIGITAL TOOLS</h3>
              </div>
        <div >
          {[
            "Adobe Illustrator",
            "Adobe Indesign",
            "Adobe Photoshop",
            "Keynote",
            "Canva",
          ].map((DigitalTools) => (
          <p className=" text-xs text-black">{DigitalTools}</p>
          ))}
        </div>
      </div>

   </div> 
  </div>
  </div>
  );
};

export default sideProfileBidder;