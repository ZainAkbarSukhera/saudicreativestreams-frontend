import React from "react";

import CreatorProfile from "../components/CreativeProfile/profileCreator";
import Navbar from "../components/NavigationBar/Navbar";
import SideProfileCreator from "../components/CreativeProfile/SideProfileCreator";
import HeaderCreativeProfile from "../components/CreativeProfile/headerCreativeProfile";
import BidProfileFooter from "../components/BidderProfile/BidProfileFooter";

import image1 from "../assets/abqandeelprofile.jpg";

const CreatorDetails = {
  CreatorName: "Abdullah Qandeel",
  host: 'Jeddah- Saudi Arabia',
  profession: 'CONTEMPORARY ARTIST',
  website: 'www.theqandeel.com',
  ProfileViews: 25000,
  Appreciations: 5000,
  Followers: 7900,
  imageUrl: image1,
  profilebio:"Abdullah Qandeel is a prominent Saudi contemporary artist known for his bold and dynamic abstract paintings. Born in 1988 in Jeddah, Saudi Arabia, Qandeel’s artistic journey began with a deep interest in exploring identity, cultural heritage, and the complexities of modern life. Educated in both the Middle East and the West, his works reflect a unique blend of influences that challenge traditional norms while embracing modernity. Over the years, Qandeel has gained international recognition, exhibiting his work in major cities around the world and becoming a leading figure in Saudi Arabia’s contemporary art scene.",
  eligibilityCriteria: [
    'Open to Saudi nationals and international calligraphers with expertise in Arabic script.',
    'Artists of all experience levels are encouraged to apply, with a demonstrated portfolio in Arabic calligraphy.',
    'Collaborative submissions are allowed, but the lead artist must be clearly identified.'
  ],
  overview: `The Calligraphy Initiative by Saudi Aramco is a prestigious project aimed at preserving and celebrating the rich tradition of 
Arabic calligraphy, a fundamental aspect of Saudi Arabia’s cultural heritage. This initiative invites talented calligraphers 
from across the Kingdom and beyond to participate in a unique opportunity to create works that merge the timeless 
beauty of traditional Arabic script with modern artistic interpretations.
Through this initiative, Saudi Aramco seeks to commission a series of calligraphic artworks that reflect the Kingdom’s 
heritage, values, and the evolving nature of Arabic calligraphy in the contemporary art world. These artworks will be 
displayed in Aramco’s cultural centers, public spaces, and corporate offices, serving as a testament to the enduring 
significance of calligraphy in Saudi Arabia’s cultural identity.`,
  goals: [
    'To preserve and promote Arabic calligraphy as a key element of Saudi Arabia’s cultural heritage.',
    'To foster creativity and innovation in the field of calligraphy by encouraging modern interpretations of traditional scripts.',
    'To provide a platform for emerging and established calligraphers to showcase their work.',
    'To integrate calligraphy into contemporary public and corporate spaces, enhancing their cultural and aesthetic value',
  ],
  bidRequirements: [
        'Submit a portfolio containing 3-5 examples of your recent calligraphy work. The portfolio should demonstrate your technical skills, creativity, and familiarity with traditional Arabic scripts. (Accepted formats: PDF, JPEG - minimum resolution of 300 dpi).',
    'A detailed project proposal (up to 500 words) outlining your concept for the calligraphic artwork. The proposal should describe how your work will reflect Saudi Arabia’s cultural heritage and how it can be integrated into modern contexts (Include sketches or digital renderings of the proposed work.',
    'A proposed budget for the creation of the artwork, including materials, time, and any additional resources required.',
    'A breakdown of costs, including artist fees, materials, and any other expenses.',
    'A proposed timeline for the creation and completion of the artwork, ensuring alignment with the project’s overall schedule.',
    'A short artist statement (200 words) explaining your artistic philosophy and your connection to Arabic calligraphy.',
    'Provide at least two professional references who can speak to your experience and skills in calligraphy.',
  ],
  selectionCriteria: [
    'Artistic merit and originality of the proposal.',
    'Technical proficiency in Arabic calligraphy.',
    'Alignment with the cultural and thematic goals of the initiative.',
    'Feasibility of the proposed budget and timeline',
  ],
  prizesAndCompensation: [
    'SAR 75,000 Cash Prize: Awarded to the selected artists as a commission fee for the creation of the artwork.',
    'Exhibition Opportunity: The completed works will be prominently displayed in Aramco’s cultural centers, public spaces, and corporate offices',
    'Publication and Media Coverage: Selected artworks will be featured in a special publication celebrating Saudi calligraphy, with media coverage provided through Aramco’s channels and partners',
  ]
};


const CreativeProfileComponent =()=>{

  return(
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
      
      <div className="mt-36">
      <HeaderCreativeProfile CreatorName={CreatorDetails.CreatorName} host={CreatorDetails.host} profession={CreatorDetails.profession} website={CreatorDetails.website} ProfileViews={CreatorDetails.ProfileViews}Appreciations={CreatorDetails.Appreciations} Followers={CreatorDetails.Followers} />
      </div>
  
      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow">
        
        {/* Sidebar filter menu on the left */}
        <aside className="w-1/4 p-4 mt-0">
          <SideProfileCreator 
            imageUrl={CreatorDetails.imageUrl}
            profilebio={CreatorDetails.profilebio}  
          />
        </aside>
        <main className="flex-grow p-4">
          <CreatorProfile />

          {/* Footer always at the bottom */}
          <footer className="bg-gray-200 mt-auto">
              {/* <BidProfileFooter /> */}
            </footer>

        </main>
      </div>
    </div>


  );

};

export default CreativeProfileComponent;