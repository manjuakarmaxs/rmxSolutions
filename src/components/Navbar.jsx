import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [aboutUsOpen,setaboutUsOpen]=useState(false)
  const [productCertOpen, setProductCertOpen] = useState(false);
  const [qciSchemesOpen, setQciSchemesOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutUsRef=useRef(null);
  const productCertTimeoutRef = useRef(null);
  const qciSchemesTimeoutRef = useRef(null);
  const documentsTimeoutRef = useRef(null);

  const closeAllDropdowns = () => {
    setProductCertOpen(false);
    setQciSchemesOpen(false);
    setDocumentsOpen(false);
  };

  // Event handlers with delay to prevent dropdown from hiding too quickly
  const handleMouseEnter = (setDropdownOpen, timeoutRef) => {
    clearTimeout(timeoutRef.current); // Clear any existing timeout
    setDropdownOpen(true);
  };

  const handleMouseLeave = (setDropdownOpen, timeoutRef) => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 300); // Adjust delay as needed
  };

  return (
    <div className="bg-light text-white font-bold px-8 py-4 flex items-center justify-center shadow-lg relative">
      {/* Hamburger Icon for mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navbar Links */}
      <div className={`flex-col md:flex md:flex-row md:space-x-8 justify-center ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
        <Link to="/" className="hover:text-blue-500  transition duration-300 ease-in-out">Home</Link>



{/* about us Dropdown */}
<div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setaboutUsOpen, aboutUsRef)}
          onMouseLeave={() => handleMouseLeave(setaboutUsOpen, aboutUsRef)}
        >
          <button className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out">
           About Us
          </button>
          {aboutUsOpen && (
            <div className="absolute z-20 bg-white text-black rounded-md shadow-md mt-2 py-2 w-64">
              <Link 
                to="/corporate"
                className="block px-4 py-2 hover:font-extrabold  hover:text-blue-800 focus:outline-none rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
                Corporate Profile
              </Link>



              <Link 
                to="/accreditations"
                className="block px-4 py-2 hover:font-extrabold  hover:text-blue-800 focus:outline-none rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
               Accreditations
              </Link>

              <Link 
                to="/certification-process"
                className="block px-4 py-2 hover:font-extrabold  hover:text-blue-800 focus:outline-none rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
               Accreditations Certification Process
              </Link>

              <Link 
                to="/clients"
                className="block px-4 py-2 hover:font-extrabold  hover:text-blue-800 focus:outline-none rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
               Clients
              </Link>


              <Link 
                to="/quality-policy"
                className="block px-4 py-2 hover:font-extrabold  hover:text-blue-800 focus:outline-none rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
               Quality Policy
              </Link>
             
            </div>
          )}
        </div>


        {/* Product Certification Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setProductCertOpen, productCertTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setProductCertOpen, productCertTimeoutRef)}
        >
          <button className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out">
            Product Certification
          </button>
          {productCertOpen && (
            <div className="absolute z-20 bg-white text-black rounded-md shadow-md mt-2 py-2 w-64">
              <Link 
                to="/qci"
                className="block px-4 py-2 hover:font-extrabold  hover:text-blue-800 focus:outline-none rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
                QCI Schemes - RMCPCS
              </Link>
            </div>
          )}
        </div>

        {/* QCI Schemes Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setQciSchemesOpen, qciSchemesTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setQciSchemesOpen, qciSchemesTimeoutRef)}
        >
          <button className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out">
            QCI Schemes - RMCPCS
          </button>
          {qciSchemesOpen && (
            <div className="absolute z-20  bg-white text-black rounded-md shadow-md mt-2 py-2 w-64">
              <Link to="/quotation-request" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Quotation Request Form</Link>
              <Link to="/procedure-granting-cert" className="hover:font-extrabold hover:text-blue-500 focus:outline-none block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure for Granting of Certification</Link>
             
              <Link to="/condtion-for-logo" className="hover:font-extrabold hover:text-blue-500 focus:outline-none block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Condition for logo use</Link>
              <Link to="/impartiality-policy" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Impartiality Policy</Link>
              <Link to="/certification-process" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Certification Process</Link>

              <Link to="/procedure-resln" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure Resln Appeal Complaints Disputes</Link>
              <Link to="/fee-structure" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Fee Structure</Link>
              <Link to="/qci/clients-list" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>List of Clients</Link>
           </div>
          )}
        </div>

        {/* Documents Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setDocumentsOpen, documentsTimeoutRef)}
          onMouseLeave={() => handleMouseLeave(setDocumentsOpen, documentsTimeoutRef)}
        >
          <button className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out">
            Documents
          </button>
          {documentsOpen && (
            <div className="absolute z-20 bg-white text-black rounded-md shadow-md mt-2 py-2 w-64">
              <Link to="/condition-logo-use-doc" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Condition for Logo Use</Link>
              <Link to="/impartiality-policy-doc" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Impartiality Policy</Link>

              <Link to="/certification-rocess" className=" hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Certification Process</Link>
              <Link to="/procedure-granting-cert" className=" hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure for Granting of Certification</Link>
              <Link to="/procedure-resln" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure Resln Appeal Complaints Disputes</Link>

              
              <Link to="/certification-agrement" className="hover:font-extrabold hover:text-blue-500 focus:outline-none  block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Certification Agreement</Link>
              <Link to="/feedback-form" className="hover:font-extrabold hover:text-blue-500 focus:outline-none                         block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Feedback Form</Link>
             
            </div>
          )}
        </div>

        {/* Contact Us Link */}
        <Link to="/contact" className="hover:text-blue-500 transition duration-300 ease-in-out">ContactUs</Link>
      </div>
    </div>
  );
};

export default Navbar;
