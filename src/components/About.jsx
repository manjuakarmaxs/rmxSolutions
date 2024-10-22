// About.jsx
import React from 'react';

const About = () => {
  return (
   <>
   
   <div className="bg-gradient-to-b from-blue-600 to-blue-100   min-h-screen p-6">
      {/* Mission Card */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ACT - With a team of young and dynamic engineers, aspires to educate and share the knowledge (Theory and Practical) to Engineering students and working civil Engineers to bridge the gap between industry and academia by organizing seminars and workshops.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
              "Experience is not what happens to you, but it is what you do with what happens to you."
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, sharing experience, discussion & directed research."
            </blockquote>
          </div>
        </div>
      </div>

      {/* About ACT Card */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ABOUT A C T</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A C T - Academy of Concrete Technology established by Mr. Raghunath Ravula B.E. (Civil), M.E. (CT) who has 2 decades of experience in Concrete Industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Academy of Concrete Technology, the very first of its kind in India, to impart theory and practical training and research exclusively on Concrete Technology by Industry experts for Engineering students, fresh graduates, working engineers, and technicians.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Academy of Concrete Technology aims to become one of the leading practical academy and research institutes that produces the best concrete technologists / QA-QC Managers for the construction Industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A C T was established with a purpose of training fresh civil engineering graduates to improve the employability quotient.
            </p>
          </div>
        </div>
      </div>
    </div>
   
   </>
  );
};

export default About; // This makes About the default export
