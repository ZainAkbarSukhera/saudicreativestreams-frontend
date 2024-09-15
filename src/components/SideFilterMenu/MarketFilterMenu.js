import React from 'react';

// Icon placeholders (replace with actual icons if needed)
const StatusIcon = () => <span>🔄</span>;
const ProjectTypeIcon = () => <span>📅</span>;
const EligibilityIcon = () => <span>📄</span>;
const LocationIcon = () => <span>📍</span>;

const MarketFilterMenu = () => {
  return (
    <div className='mt-28'>
      <div className="w-60 h-full p-4 border-r border-black left-0 bg-white">
      {/* Categories Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
                <LocationIcon />
                <h3 className="ml-2 text-yankees-blue font-semibold text-sm">CATEGORIES</h3>
              </div>
        <div className="ml-6">
          {[
            'Calligraphy',
            'Drawing & Illustration',
            'Graphics',
            'Mixed Media',
            'Painting',
            'Photography',
            'Printmaking',
            'Sculpture',
          ].map((Categories) => (
            <label key={Categories} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{Categories}</span>
            </label>
          ))}
        </div>
      </div>

      {/* FORMAT Section */}
      <div className='mb-6'>
        <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">FORMAT</h3>
        </div>
        <div className="ml-6">
          {[
            'Digital Print on Archival Paper',
            'Ink on Paper',
            'Mixed Media on Canvas',
            'Engraving on Wood or Metal',
            'Oil on Canvas',
            'Acrylic on Canvas',
            'Watercolour on Paper',
            'Freestanding Sculptures',
            'Metal work Sculptures',
            '3D Printed',
            'Mixed Media Assemblage',
            'C-Prints',
            'Aluminium Mounted Prints',
            'Framed Photographs',
            'Collage on Canvas or Board',
            'Assemblage on Panel',
            'Textile Art (Fabric & Embroidery)',
            'Screen Print on Paper',
            'Lithograph on Paper',
            'Etching on Metal',
            'Monotype Prints',
            'Giclée Prints on Canvas or Paper',
            'Charcoal on Paper',
            'Pen and Ink on Paper',
            'Graphite on Board',
            'Coloured Pencil on Bristol Paper',
            'PDF',
            'AI',
            'PSD',
            'SVG',
            'EPS',
            'JPG',
            'PNG',
          ].map((format) => (
            <label key={format} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="location" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{format}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">SIZE</h3>
        </div>
        <div className="ml-6">
          {[
            "Small (under 50 cm)",
            "Medium (50 - 100 cm)",
            "Large (100-150 cm)",
            "Extra Large (Above 150 cm)",
          ].map((size) => (
            <label key={size} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{size}</span>
            </label>
          ))}
        </div>
      </div>


    {/* Certifications Section */}
    <div className="mb-6">
    <div className="flex items-center mb-2">
        <LocationIcon />
        <h3 className="ml-2 text-yankees-blue font-semibold text-sm">CERTIFICATIONS</h3>
      </div>
      <div className="ml-6">
        {[
          'Certificate of Authenticity',
          'Gallery Provenance',
          'Signed By Artist',
          'Copyrighted',
        ].map((certification) => (
          <label key={certification} className="flex items-center mb-1 text-yankees-blue">
            <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
            <span className="text-xs text-black">{certification}</span>
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
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">PRICE RANGE</h3>
        </div>
        <div className="ml-6">
          {[
            'Under SAR 5,000',
            'SAR 5,000 - SAR 20,000',
            'SAR 20,000 - SAR 50,000',
            'SAR 50,000 - SAR 100,000',
            'Above SAR 100,000',
          ].map((price) => (
            <label key={price} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Style Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">STYLE</h3>
        </div>
        <div className="ml-6">
          {[
            'Abstract',
            'Realism',
            'Impressionism',
            'Minimalism',
            'Surrealism',
            'Contemporary',
            'Traditional',
          ].map((style) => (
            <label key={style} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Themes Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">THEMES</h3>
        </div>
        <div className="ml-6">
          {[
            'Cultural Heritage',
            'Nature',
            'Urban Life',
            'Portraits',
            'Conceptual',
          ].map((themes) => (
            <label key={themes} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{themes}</span>
            </label>
          ))}
        </div>
      </div>

       {/* Year of Creation Section */}
       <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">YEAR OF CREATION</h3>
        </div>
        <div className="ml-6">
          {[
            'Recent Works (Last 1-2 Years)',
            'Within the Last 5 Years',
            'Older Works (5+ Years)',
          ].map((yearofcreation) => (
            <label key={yearofcreation} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{yearofcreation}</span>
            </label>
          ))}
        </div>
      </div>

      {/* intermediaries Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">INTERMEDIARIES</h3>
        </div>
        <div className="ml-6">
          {[
            'Athr Gallery',
            'Hafez Gallery',
            'Hayy Jameel',
            'Naila Art Gallery',
            'Ithra (King Abdulaziz Center for World Culture)', 
            'Kingdom Heritage',
            'Madina Arts Center',
          ].map((intermediaries) => (
            <label key={intermediaries} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{intermediaries}</span>
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
            'Instant Download',
            'Available Now',
            'Commission Available',
            'Sold but Similar Works Available',
          ].map((availability) => (
            <label key={availability} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{availability}</span>
            </label>
          ))}
        </div>
      </div>

       {/* Framing Section */}
       <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">FRAMING OPTIONS</h3>
        </div>
        <div className="ml-6">
          {[
            'Framed',
            'Unframed',
            'Custom Framing Available',
          ].map((Framing) => (
            <label key={Framing} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{Framing}</span>
            </label>
          ))}
        </div>
      </div>

      {/* SHIPPING Section */}
      <div className="mb-6">
      <div className="flex items-center mb-2">
          <LocationIcon />
          <h3 className="ml-2 text-yankees-blue font-semibold text-sm">SHIPPING</h3>
        </div>
        <div className="ml-6">
          {[
            'Local Pickup',
            'Domestic Shipping',
            'International Shipping',
          ].map((Shipping) => (
            <label key={Shipping} className="flex items-center mb-1 text-yankees-blue">
              <input type="radio" name="eligibility" className="mr-1 w-2 h-2  text-black focus:ring-black" />
              <span className="text-xs text-black">{Shipping}</span>
            </label>
          ))}
        </div>
      </div>


      

    

  </div>
  </div>
    
  );
};

export default MarketFilterMenu;