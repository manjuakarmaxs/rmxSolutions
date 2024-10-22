import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // to get the current path

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleDropdownClick = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  const getLinkClass = (path) => {
    // If current path matches the link's path, apply the active styles
    return location.pathname === path
      ? 'text-blue-800 font-bold'
      : 'hover:text-blue-700 font-bold';
  };

  return (
    <div className="bg-light black text-white px-8 py-4 flex items-center justify-center shadow-lg">
      <div className="flex space-x-8">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/about" className={getLinkClass('/about')}>AboutUs</Link>

        {/* Dropdown for Services */}
        <div className="relative dropdown">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`${
              location.pathname.includes('/services') ? 'text-blue-800 font-bold' : 'hover:text-blue-700 font-bold'
            } focus:outline-none`}
          >
            Services
          </button>

          {showDropdown && (
            <div className="absolute z-10 bg-white text-black shadow-lg mt-2 rounded-md w-64">
              <button
                onClick={() => handleDropdownClick('/services/programs')}
                className="block w-full text-left text-sm px-4 py-2 hover:bg-gray-200"
              >
                A C T OFFERS THE FOLLOWING PROGRAMS TO CIVIL ENGINEERING STUDENTS
              </button>
              <button
                onClick={() => handleDropdownClick('/services/services')}
                className="block w-full text-left text-sm px-4 py-2 hover:bg-gray-200"
              >
                A C T PROVIDES THE FOLLOWING SERVICES TO WORKING CIVIL ENGINEERS
              </button>
            </div>
          )}
        </div>

        <Link to="/training" className={getLinkClass('/training')}>Training</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>ContactUs</Link>
      </div>
      
      <div className="ml-8">
        <Link to='/getstarted' className={getLinkClass('/getstarted') + " bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;




















// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
    
//     <div className="bg-light black text-white px-8 py-4 flex items-center justify-center shadow-lg">
//       <div className="flex space-x-8">
//         <Link to="/" className="hover:text-gray-500">Home</Link> 
//         <Link to="/about" className="hover:text-gray-500">AboutUs</Link>
//         <Link to="/services" className="hover:text-gray-500">Services</Link>
//         <Link to="/training" className="hover:text-gray-500">Training</Link>
//         <Link to="/contact" className="hover:text-gray-500">ContactUs</Link>
//       </div>
//       <div className="ml-8">
//         <a href="#" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300">Get Started</a>
//       </div>
//     </div>
    
//   );
// };

// export default Navbar;





