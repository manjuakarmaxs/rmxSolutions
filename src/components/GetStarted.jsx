import React from 'react';

const GetStarted = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get Started with Our Platform
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Discover how our platform can help you achieve your goals with our
          powerful and intuitive features. Start by exploring our free resources or
          dive right in with a quick sign-up to begin your journey.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
