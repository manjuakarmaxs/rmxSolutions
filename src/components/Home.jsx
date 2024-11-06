// Home.jsx
import React from 'react';
import a from '../assets/HomeImg.jpeg';
import workshopImage from '../assets/workshopImage.webp'
import workshopImage2 from '../assets/workshopImage2.webp'

// import About from './About';

const Home = () => {
  return (
    <>

    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={a}
        alt="Background"
        className="absolute inset-0 w-full h-full"
      />
    </div>  
            <div className="bg-gradient-to-b from-blue-100 to-blue-600 min-h-screen p-6">
      {/* Mission Card */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden mb-8 border-l-8 border-blue-600 transition-transform duration-300 hover:shadow-3xl hover:scale-105">
          <div className="p-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-4 text-center animate-fade-in-up">
              OUR MISSION
            </h2>
            <p className="text-gray-800 leading-snug mb-4 text-justify transition-all duration-500 hover:text-blue-600 hover:shadow-lg shadow-blue-300 p-2 rounded-lg">
              ACT - With a team of young and dynamic engineers, aspires to educate and share the knowledge (Theory and Practical) to Engineering students and working civil Engineers to bridge the gap between industry and academia by organizing seminars and workshops.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-2 transition-colors duration-300 hover:text-blue-600 animate-fade-in-up">
              "Experience is not what happens to you, but it is what you do with what happens to you."
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4 transition-colors duration-300 hover:text-blue-600 animate-fade-in-up">
              "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, sharing experience, discussion & directed research."
            </blockquote>
          </div>
        </div>
      </div>
    
      {/* About ACT Card */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden border-l-8 border-blue-600 transition-transform duration-300 hover:shadow-3xl hover:scale-105">
          <div className="p-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-4 text-center animate-fade-in-up">
              ABOUT A C T
            </h2>
            <p className="text-gray-800 leading-snug mb-4 text-justify transition-all duration-500 hover:text-blue-600 hover:shadow-lg shadow-blue-300 p-2 rounded-lg">
              A C T - Academy of Concrete Technology established by Mr. Raghunath Ravula B.E. (Civil), M.E. (CT) who has 2 decades of experience in the Concrete Industry.
            </p>
            <p className="text-gray-800 leading-snug mb-4 text-justify transition-all duration-500 hover:text-blue-600 hover:shadow-lg shadow-blue-300 p-2 rounded-lg">
              The Academy of Concrete Technology is the first of its kind in India, imparting theory and practical training and research exclusively on Concrete Technology by industry experts for engineering students, fresh graduates, working engineers, and technicians.
            </p>
            <p className="text-gray-800 leading-snug mb-4 text-justify transition-all duration-500 hover:text-blue-600 hover:shadow-lg shadow-blue-300 p-2 rounded-lg">
              The Academy aims to become one of the leading practical academies and research institutes that produce the best concrete technologists/QA-QC Managers for the construction industry.
            </p>
            <p className="text-gray-800 leading-snug text-justify transition-all duration-500 hover:text-blue-600 hover:shadow-lg shadow-blue-300 p-2 rounded-lg">
              A C T was established with the purpose of training fresh civil engineering graduates to improve their employability quotient.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.5s ease forwards;
      }
    `}</style>
    
    
    
    
    
    
    
    <div className="bg-gradient-to-b from-blue-100 to-blue-500 p-6 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">A C T OFFERS THE FOLLOWING PROGRAMS AND SERVICES</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Programs for Civil Engineering Students */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">FOR CIVIL ENGINEERING STUDENTS:</h4>
          <ul className="list-disc ml-4 text-gray-700 space-y-2">
            <li>Three-day Workshop on “Concrete Mix Designs.” Theory and practical sessions.</li>
            <li>Guidance for semester projects and dissertation work in consent with the student guide.</li>
            <li>Internship opportunities.</li>
            <li>Free samples of basic concrete materials for semester projects (Cement, GGBS, Fly-ash, etc.).</li>
            <li>Testing of materials – Cement, Aggregates, Fresh and Hardened concrete.</li>
            <li>Design of concrete mixes and conducting trials.</li>
            <li>RMC Plant visits will be arranged.</li>
          </ul>
        </div>
    
        {/* Services for Working Civil Engineers */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">FOR WORKING CIVIL ENGINEERS:</h4>
          <ul className="list-disc ml-4 text-gray-700 space-y-2">
            <li>Two-day training program on "Understanding Concrete." Theory and practical sessions.</li>
            <li>Exclusive training sessions for corporates.</li>
            <li className="font-semibold">Certificate Programs on:</li>
            
            <ul className="list-inside list-disc ml-4 text-gray-700 space-y-2">
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
    
    
    
    
    
    
    
    
        
    
         <div className=" min-h-screen flex justify-center items-center shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-100">
          <div className="max-w-md h-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <img src={workshopImage} alt="Workshop" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                FOR CIVIL ENGINEERING STUDENTS:
              </h2>
              <ul className="list-disc ml-4 text-gray-700 space-y-2">
                <li>Three-day Workshop on “Concrete Mix Designs.” Theory and practical sessions.</li>
                <li>Guidance for semester projects and dissertation work in consent with the student guide.</li>
                <li>Internship opportunities.</li>
                <li>Free samples of basic concrete materials for semester projects (Cement, GGBS, Fly-ash, etc.).</li>
                <li>Testing of materials – Cement, Aggregates, Fresh and Hardened concrete.</li>
                <li>Design of concrete mixes and conducting trials.</li>
                <li>RMC Plant visits will be arranged.</li>
              </ul>
            </div>
          </div>
          </div>
    
          <div className="min-h-screen  flex justify-center items-center shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-100">
          <div className="max-w-md h-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl ">
            <img src={workshopImage2} alt="Training Program" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                FOR WORKING CIVIL ENGINEERS:
              </h2>
              <ul className="list-disc ml-4 text-gray-700 space-y-2">
                <li>Two-day training program on "Understanding Concrete." Theory and practical sessions.</li>
                <li>Exclusive training sessions for corporates.</li>
                <li className="font-semibold">Certificate Programs on:</li>
                <ul className="list-inside list-disc ml-4 text-gray-700 space-y-2">
                  <li>Concrete Quality Control through material testing.</li>
                  <li>Construction Quality Control through material testing.</li>
                  <li>Training on Construction Project Management.</li>
                  <li>Project Planning & Scheduling through MS-Project Software.</li>
                  <li>Quality Management.</li>
                  <li>Quantity Survey.</li>
                  <li>Training on finishing works in buildings.</li>
                </ul>
              </ul>
            </div>
          </div>
      </div>
    
    
    
    
    
    
    
    
    
    
      </div>
    </div>
    
    
    
    
    
    
    
    
       
       </>
   

    

  );
};

export default Home;









 {/* <div className=" relative w-screen h-screen overflow-hidden " >
      <img src={a} alt="Background" className="w-full h-full object-cover overflow-hidden" />
    </div>
    <About/>
    
    <div className="bg-gradient-to-b from-blue-100 to-blue-500 p-6  shadow-md mt-1 ">
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

<div className="bg-gradient-to-b from-blue-500 to-blue-100 p-6 shadow-md mt-1">
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
</div> */}













   {/* <About/>
  

<div>
   <div className="bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-4 text-gray-800">A C T OFFERS THE FOLLOWING PROGRAMS TO CIVIL ENGINEERING STUDENTS</h2>
  <ul className="list-disc ml-6 space-y-2 text-gray-700">
    <li>Three day Workshop on “Concrete Mix Designs.” Theory and practical sessions.</li>
    <li>Guidance will be given for students for semester projects. Dissertation work in consent with the student guide.</li>
    <li>Internship.</li>
    <li>Free samples of basic concrete materials required for semester projects. Dissertation work will be arranged for students (Cement, GGBS, Fly-ash, Aggregates, Fibres, Chemical Admixtures, etc.).</li>
    <li>Testing of materials – Cement, Aggregates, Fresh and Hardened concrete.</li>
    <li>Design of concrete mixes and conducting trials.</li>
    <li>RMC Plant visits will be arranged.</li>
  </ul>
</div>

      
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-4 text-gray-800">A C T PROVIDES THE FOLLOWING SERVICES TO WORKING CIVIL ENGINEERS</h2>
  <ul className="list-disc ml-6 space-y-4 text-gray-700">
    <li>Two day training program on "Understanding Concrete." Theory and practical sessions.</li>
    <li>Exclusive training sessions can be provided for corporates.</li>
    <li className="font-semibold">Certificate Programs for fresh graduates and working engineers on:</li>
    
    <ul className="list-inside list-disc ml-6 space-y-2 text-gray-700">
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
</div>


   <Training/> */}