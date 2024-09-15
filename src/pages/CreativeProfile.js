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