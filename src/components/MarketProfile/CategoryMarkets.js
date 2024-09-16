import React, { useState } from "react";

// Importing images correctly
import p1 from '../../assets/abq_sm_1.PNG';
import p2 from '../../assets/shaker1.jpeg';
import p3 from '../../assets/khalidzahid1.png';
import p4 from '../../assets/basmah1.jpg';
import p5 from '../../assets/abq_sm_4.png';

// Categories and data for the cards
const categories = [
  "TOP SALE",
  "TOP ARTIST",
  "TOP NEWCOMER",
  "MOST APPRECIATED",
  "MOST VIEWED",
];

const cardsData = {
  "TOP SALE": {
    title: "Kingdom of Love (2012)",
    instructor: "Abdullah Qandeel",
    imgSrc: p1,
    details: {
      Buyer: "Buyer: Sofana Dahlan",
      Price: "Price: SAR 150,000",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "TOP ARTIST": {
    title: "Shaker Kashgari",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p2,
    details: {
      sales: "Total Sales last 12 months: SAR 75,000",
      comparison: "VS Previous Year: + 99%",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "TOP NEWCOMER": {
    title: "Khalid Zahid",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p3,
    details: {
      sales: "Total Sales last 12 months: SAR 50,500",
      comparison: "VS Previous Year: + 95%",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "MOST APPRECIATED": {
    title: "Basmah Felemban",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p4,
    details: {
      likes: "No. of Likes: 790,000",
      artwork: "Most Liked Artwork: Sidana",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "MOST VIEWED": {
    title: "Abdullah Qandeel",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p5,
    details: {
      attendees: "No. of Views: 360,000",
      locations: "Most Viewed Artwork: The Race",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
};

const CategoryMarket = () => {
  const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

  return (
    <div className="container mx-auto mt-20 p-2 bg-white">
      {/* Categories */}
      <div className="flex justify-around mb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-bold border-b-4 ${
              selectedCategory === category
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="border-t border-black grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-5">
        {categories.map((category) => {
          const card = cardsData[category];

          return (
            <div
              key={category}
              className={`w-full mt-4  border border-black rounded-lg p-6 transition transform ${
                selectedCategory === category
                  ? "hover:scale-105 hover:shadow-2xl"
                  : "opacity-70"
              }`}
            >
              <h3 className="text-sm font-semibold mb-2 text-center">{card.title}</h3>
              <p className="text-xs text-gray-600 text-center mb-4">{card.instructor}</p>

              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="flex flex-row items-center mt-4 mb-6 space-x-8 text-xs font-montserrat-extralight">
                {Object.values(card.details).map((detail, index) => (
                  <p key={index} className="text-gray-500 mb-2">
                    {detail}
                  </p>
                ))}
              </div>

              <button
                className={`mt-4 w-full py-2 rounded-lg text-white ${card.buttonColor}`}>
                {card.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMarket;
