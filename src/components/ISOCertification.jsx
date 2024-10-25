import React, { useState } from 'react';
import img1 from '../assets/14001.jpg';
import img2  from '../assets/18001.jpg';
import img3 from '../assets/22000.jpg';
import img4 from '../assets/9001.jpg';
import img5 from '../assets/20000-1.jpg';
import img6 from '../assets/45001.jpg';

const ISOCertification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "ISO 14001 Certifications",
      description:
        "ISO 14001 is the internationally recognised standard for the Environmental Management of businesses. It prescribes controls for those activities that have an effect.",
      img: img1,
    },
    {
      title: "OHSAS 18001 Certifications",
      description:
        "You are not the only one in intuition this. This diagram direct is here for you to gain proficiency with the fundamentals of OHSAS 18001 Certification.",
      img: img2,
    },
    {
      title: "ISO 22000 Certifications",
      description:
        "The ISO 22000 standard has been developed within ISO by experts from the food industry along with representatives of specialized international organizations.",
      img: img3,
    },

    {
        title: "ISO 9001 Certifications",
        description:
          "ISO 14001 is the internationally recognised standard for the Environmental Management of businesses. It prescribes controls for those activities that have an effect.",
        img: img4,
      },
      {
        title: "OHSAS 18001 Certifications",
        description:
          "You are not the only one in intuition this. This diagram direct is here for you to gain proficiency with the fundamentals of OHSAS 18001 Certification.",
        img: img5,
      },
      {
        title: "ISO 22000 Certifications",
        description:
          "The ISO 22000 standard has been developed within ISO by experts from the food industry along with representatives of specialized international organizations.",
        img: img6,
      },
    // Add more cards here if needed
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gray-100 py-12 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-red-600 text-4xl font-bold">ISO CERTIFICATION</h1>
        <p className="text-gray-600 mt-4">
          QMG Certifications Offers a wide range of specialized multi ISO Certification Services
        </p>
      </div>

      {/* Card Grid with Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
              >
                {cards.slice(index, index + cardsPerPage).map((card, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <img src={card.img} alt={card.title} className="mx-auto mb-4" />
                    <h3 className="text-blue-700 text-xl font-bold">{card.title}</h3>
                    <p className="text-gray-700 mt-4">{card.description}</p>
                    <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-full">
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>




        

        {/* Previous/Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-full"
        >
          Next
        </button>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-8">
          {Array(totalPages)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full mx-1 ${
                  i === currentIndex ? "bg-red-600" : "bg-gray-400"
                }`}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ISOCertification;
