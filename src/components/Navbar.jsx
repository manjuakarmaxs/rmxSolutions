import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [productCertOpen, setProductCertOpen] = useState(false);
  const [qciSchemesOpen, setQciSchemesOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control the mobile menu

  const closeAllDropdowns = () => {
    setProductCertOpen(false);
    setQciSchemesOpen(false);
    setDocumentsOpen(false);
  };

  return (
    <div className="bg-light text-white px-8 py-4 flex items-center justify-between shadow-lg">
      {/* Logo or Title can be added here */}
      <div className="text-lg font-bold">RMX</div>

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

      {/* Left Nav Links */}
      <div className={`flex-col md:flex md:flex-row md:space-x-8 justify-center ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
        <Link to="/" className="hover:text-blue-500 transition duration-300 ease-in-out">AboutUs</Link>

        {/* Product Certification Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProductCertOpen(!productCertOpen)}
            className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out"
          >
            Product Certification
          </button>
          {productCertOpen && (
            <div className="absolute z-10 bg-white text-black rounded-md shadow-md mt-2 py-2 w-64 transition-transform transform origin-top">
              <Link 
                to="/qci"
                className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out"
                onClick={closeAllDropdowns}
              >
                QCI Schemes - RMCPCS
              </Link>
            </div>
          )}
        </div>

        {/* QCI Schemes Dropdown */}
        <div className="relative">
          <button
            onClick={() => setQciSchemesOpen(!qciSchemesOpen)}
            className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out"
          >
            QCI Schemes - RMCPCS
          </button>
          {qciSchemesOpen && (
            <div className="absolute z-10 bg-white text-black rounded-md shadow-md mt-2 py-2 w-64">
              <Link to="/quotation-request" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Quotation Request Form</Link>
              <Link to="/procedure-granting-cert" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure for Granting of Certification</Link>
              <Link to="/condition-logo-use" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Condition for Logo Use</Link>
              <Link to="/impartiality-policy" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Impartiality Policy</Link>
              <Link to="/certification-process" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Certification Process</Link>
              <Link to="/procedure-resln" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure Resln Appeal Complaint Disputes</Link>
              <Link to="/fee-structure" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Fee Structure</Link>
              <Link to="/list-of-clients" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>List of Clients</Link>
            </div>
          )}
        </div>

        {/* Documents Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDocumentsOpen(!documentsOpen)}
            className="hover:text-blue-500 focus:outline-none transition duration-300 ease-in-out"
          >
            Documents
          </button>
          {documentsOpen && (
            <div className="absolute z-10 bg-white text-black rounded-md shadow-md mt-2 py-2 w-64">
              <Link to="/condition-logo-use-doc" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Condition for Logo Use</Link>
              <Link to="/impartiality-policy-doc" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Impartiality Policy</Link>
              <Link to="/certification-process-doc" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Certification Process</Link>
              <Link to="/procedure-granting-cert-doc" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure for Granting of Certification</Link>
              <Link to="/procedure-resln-doc" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Procedure Resln Appeal Complaint Disputes</Link>
              <Link to="/certification-agreement" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Certification Agreement</Link>
              <Link to="/feedback-form" className="block px-4 py-2 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" onClick={closeAllDropdowns}>Feedback Form</Link>
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
