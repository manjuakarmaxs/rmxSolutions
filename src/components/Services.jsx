
import React from 'react';
import { useParams } from 'react-router-dom';

const Services = () => {

  const { type } = useParams();

  const renderContent = () => {

    
    if (type === 'programs') {
      return (

        <div className="bg-gradient-to-b from-blue-500 to-blue-100 p-6 rounded-lg shadow-md">
  <h4 className="text-2xl font-bold mb-8 text-gray-800">A C T OFFERS THE FOLLOWING PROGRAMS TO CIVIL ENGINEERING STUDENTS</h4>
  <ul className="list-disc ml-8 space-y-2 text-black">
    <li>Three day Workshop on “Concrete Mix Designs.” Theory and practical sessions.</li>
    <li>Guidance will be given for students for semester projects. Dissertation work in consent with the student guide.</li>
    <li>Internship.</li>
    <li>Free samples of basic concrete materials required for semester projects. Dissertation work will be arranged for students (Cement, GGBS, Fly-ash, Aggregates, Fibres, Chemical Admixtures, etc.).</li>
    <li>Testing of materials – Cement, Aggregates, Fresh and Hardened concrete.</li>
    <li>Design of concrete mixes and conducting trials.</li>
    <li>RMC Plant visits will be arranged.</li>
  </ul>
</div>

      
      );
    }
    
    else if (type === 'services') {
      return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">A C T PROVIDES THE FOLLOWING SERVICES TO WORKING CIVIL ENGINEERS</h2>
  <ul className="list-disc ml-8 space-y-4 text-black">
    <li>Two day training program on "Understanding Concrete." Theory and practical sessions.</li>
    <li>Exclusive training sessions can be provided for corporates.</li>
    <li className="font-semibold">Certificate Programs for fresh graduates and working engineers on:</li>
    
    <ul className="list-inside list-disc ml-8 space-y-2 text-black">
      <li>Concrete Quality Control through material testing.</li>
      <li>Construction Quality Control through material testing.</li>
      <li>Training on Construction Project Management.</li>
      <li>Project Planning & Scheduling through MS-Project Software.</li>
      <li>Quality Management.</li>
      <li>Quality Survey.</li>
      <li>Training on finishing works in buildings.</li>
    </ul>
  </ul>
</div>

      );
    }
  };

  return (
    <div className="container mx-auto py-8">
      {renderContent()}
    </div>
  );

};

export default Services;











// import React from 'react'

//  const Services = () => {
//   return (
//     <div>Services</div>
//   )
// }
// export default Services;