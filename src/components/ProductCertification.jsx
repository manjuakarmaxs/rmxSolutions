import React from 'react';
import cert1 from '../assets/cert1.jpg'
import cert2 from '../assets/cert2.jpg'
import cert3 from '../assets/cert3.jpg'
import cert4 from '../assets/cert4.jpg'
    

const ProductCertification = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center mb-12">
        <h1 className="text-red-600 text-4xl font-bold">PRODUCT CERTIFICATION</h1>
        <p className="text-white mt-4">We assist Organizations to enhance their capability and achieve the best performance in their market place with impartiality in carrying out its management certification services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-4">
        {/* HACCP Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src={cert1} alt="HACCP Certification" className="mx-auto mb-4" />
          <h3 className="text-red-600 text-xl font-bold">HACCP CERTIFICATIONS</h3>
          <p className="text-gray-700 mt-4">
            The objective of HACCP is to define the requirements for hazard analysis and critical control points (HACCP) based system that any food business needs to implement
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full">VIEW DETAILS</button>
        </div>

        {/* GMP Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src={cert2} alt="GMP Certification" className="mx-auto mb-4" />
          <h3 className="text-red-600 text-xl font-bold">GMP CERTIFICATIONS</h3>
          <p className="text-gray-700 mt-4">
            Good Manufacturing Practices forms an important part of the overall HACCP food safety system in a food business. Good manufacturing practices (GMP) are important.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full">VIEW DETAILS</button>
        </div>

        {/* CE Marking Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src={cert3} alt="CE Marking Certification" className="mx-auto mb-4" />
          <h3 className="text-red-600 text-xl font-bold">CE MARKING CERTIFICATIONS</h3>
          <p className="text-gray-700 mt-4">
            The CE mark is a mandatory European marking for certain product groups to indicate conformity with the essential health and safety requirements.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full">VIEW DETAILS</button>
        </div>

        {/* QCI Scheme RMCPCS */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src={cert4} alt="QCI Scheme RMCPCS" className="mx-auto mb-4" />
          <h3 className="text-red-600 text-xl font-bold">QCI SCHEME RMCPCS</h3>
          <p className="text-gray-700 mt-4">
            There is an increasing demand for improving quality of construction and infrastructure works. Developers and Public Authorities are demanding.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full">VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCertification;
