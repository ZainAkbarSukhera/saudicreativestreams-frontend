// import React from "react";

// const SnapShot = () => {
//   const data = [
//     {
//       title: "Total Sales",
//       subtitle: "2024-2025",
//       value: "- 2.5%",
//       icon: "📉",
//     },
//     {
//       title: "Sell Through Rate",
//       subtitle: "How many of offered artworks were sold",
//       value: "50%",
//       icon: "🎯",
//     },
//     {
//       title: "Sold Lots",
//       subtitle: "The percentage of all sold lots by price segment",
//       segments: [
//         { label: "Under SAR 10,000", value: "75%" },
//         { label: "SAR 10,000 - SAR 100,000", value: "24%" },
//         { label: "Above SAR 100,000", value: "1%" },
//       ],
//     },
//     {
//       title: "Top Countries",
//       subtitle: "Countries with the highest spending buyers",
//       countries: [
//         { label: "SAR 950,000", flag: "🇸🇦" },
//         { label: "SAR 450,000", flag: "🇦🇪" },
//         { label: "SAR 350,000", flag: "🇰🇼" },
//       ],
//     },
//     {
//       title: "Fasting Growing Category",
//       subtitle: "The category with the most rapid growth in sales",
//       categories: [
//         { label: "Painting", growth: "+ 21%" },
//         { label: "Photography", growth: "+ 16%" },
//         { label: "Graphics", growth: "+ 12%" },
//       ],
//     },
//   ];

//   return (
//     <div className="p-4 ">
//       <h2 className="border-b border-black text-base font-semibold mb-4">SNAPSHOT</h2>
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-4 shadow-md flex flex-col items-center"
//           >
//             <h3 className="text-base font-semibold">{item.title}</h3>
//             <p className="text-sm text-gray-600">{item.subtitle}</p>
//             {item.value && (
//               <div className="text-red-500 text-lg mt-2">{item.value}</div>
//             )}
//             {item.icon && (
//               <div className="text-2xl mt-2">
//                 {item.icon === "📉" ? (
//                   <span className="text-red-500">{item.icon}</span>
//                 ) : (
//                   <span className="text-green-500">{item.icon}</span>
//                 )}
//               </div>
//             )}
//             {item.segments && (
//               <div className="mt-4">
//                 {item.segments.map((segment, i) => (
//                   <p key={i} className="text-xs">
//                     {segment.label}: <span className="font-semibold">{segment.value}</span>
//                   </p>
//                 ))}
//               </div>
//             )}
//             {item.countries && (
//               <div className="mt-4">
//                 {item.countries.map((country, i) => (
//                   <p key={i} className="text-sm">
//                     {country.flag} - <span className="font-semibold">{country.label}</span>
//                   </p>
//                 ))}
//               </div>
//             )}
//             {item.categories && (
//               <div className="mt-4">
//                 {item.categories.map((category, i) => (
//                   <p key={i} className="text-xs">
//                     {category.label}: <span className="text-green-500">{category.growth}</span>
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SnapShot;

import React from "react";

const SnapShot = () => {
  const data = [
    {
      title: "Total Sales",
      subtitle: "2024-2025",
      value: "- 2.5%",
      icon: "",
    },
    {
      title: "Sell Through Rate",
      subtitle: "How many of offered artworks were sold",
      value: "50%",
      icon: "",
    },
    {
      title: "Sold Lots",
      subtitle: "The percentage of all sold lots by price segment",
      segments: [
        { label: "Under SAR 10,000", value: "75%" },
        { label: "SAR 10,000 - SAR 100,000", value: "24%" },
        { label: "Above SAR 100,000", value: "1%" },
      ],
    },
    {
      title: "Top Countries",
      subtitle: "Countries with the highest spending buyers",
      countries: [
        { label: "SAR 950,000", flag: "🇸🇦" },
        { label: "SAR 450,000", flag: "🇦🇪" },
        { label: "SAR 350,000", flag: "🇰🇼" },
      ],
    },
    {
      title: "Fastest Growing Category",
      subtitle: "The category with the most rapid growth in sales",
      categories: [
        { label: "Painting", growth: "+ 21%" },
        { label: "Photography", growth: "+ 16%" },
        { label: "Graphics", growth: "+ 12%" },
      ],
    },
  ];

  return (
    <div className="p-4 justify-center">
      <h2 className="border-b border-black text-base font-semibold mb-4">
        SNAPSHOT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md flex flex-col text-center"
          >
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.subtitle}</p>
            {item.value && (
              <div className="text-red-500 text-lg mt-2">{item.value}</div>
            )}
            {item.icon && (
              <div className="text-2xl mt-2">
                {item.icon === "📉" ? (
                  <span className="text-red-500">{item.icon}</span>
                ) : (
                  <span className="text-green-500">{item.icon}</span>
                )}
              </div>
            )}
            {item.segments && (
              <div className="mt-4 text-left">
                {item.segments.map((segment, i) => (
                  <p key={i} className="text-xs mb-1">
                    {segment.label}:{" "}
                    <span className="font-semibold">{segment.value}</span>
                  </p>
                ))}
              </div>
            )}
            {item.countries && (
              <div className="mt-4 text-left">
                {item.countries.map((country, i) => (
                  <p key={i} className="text-sm mb-1">
                    {country.flag} -{" "}
                    <span className="font-semibold">{country.label}</span>
                  </p>
                ))}
              </div>
            )}
            {item.categories && (
              <div className="mt-4 text-left">
                {item.categories.map((category, i) => (
                  <p key={i} className="text-xs mb-1">
                    {category.label}:{" "}
                    <span className="text-green-500">{category.growth}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapShot;

