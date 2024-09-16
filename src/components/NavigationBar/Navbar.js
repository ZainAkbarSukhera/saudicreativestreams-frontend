import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/SCS Logo.png';
// import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: 'About', path: 'about' },
    { link: 'Art-Connect', path: '/art-connect' },
    { link: 'Art-Bid', path: '/art-bid' },
    { link: 'Art-Market', path: '/art-market' },
    { link: 'Art-Learn', path: '/art-learn' }
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : 'bg-transparent'} transition-all duration-75`}>
      <nav className='flex justify-between items-center py-4 px-8'>
        <a href="/" className='flex items-center'>
          <img src={logo} alt="Logo" className='w-20 h-auto' />
        </a>

        {/* Navigation Links for Desktop */}
        <ul className='hidden md:flex space-x-16 items-center text-lg'>
          {navItems.map(({ link, path }) => (
            <Link 
              key={path} 
              to={path} 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className='cursor-pointer text-yankees-blue hover:text-gray-900 font-montserrat-light'>
              {link}
            </Link>
          ))}
        </ul>

        {/* Authentication Buttons for Desktop */}
        <div className='hidden md:flex space-x-1'>
        <button className='bg-fire-opal text-white py-1 px-8 rounded-lg hover:bg-orange-400 font-montserrat-light'>
            Sign Up
          </button>
          <button className='bg-madder-lake text-white py-1 px-8 rounded-lg hover:bg-red-600 font-montserrat-light'>
            Login
          </button>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

