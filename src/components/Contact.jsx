import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mkgnoage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setStatus('');
  
        setFormData({ name: '', email: '', phone:'',message: '' }); // Clear the form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md  text-gray-800">
      <h2 className="text-2xl text-center mb-4 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 ">
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 mt-1 rounded-md"
          />
        </label>
        <label className="block mb-2">
        
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 mt-1 rounded-md"
          />
        </label>

        <label className="block mb-2">
          
          <input
            type="tel"
            name="phone"
            placeholder='Contact number'
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 mt-1 rounded-md"
          />
        </label>


        <label className="block mb-4">
  <textarea
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
    required
    className="w-full border px-3 py-2 mt-1 rounded-md text-gray-800"
  />
</label>


        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
    </div>
  );
};

export default Contact;





















// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Email sent successfully!');
//         setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
//       } else {
//         alert('Failed to send email.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while sending the email.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-500">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
//         <p className="text-center text-gray-500 mb-8">We will get back to you asap!</p>
//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-950"
//             />
//           </div>
//           <div className="relative mb-4">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-950"
//             />
//           </div>
//           <div className="relative mb-6">
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//               className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-950"
//             />
//           </div>
//           <div className="relative mb-4">
//             <input
//               type="text"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Message"
//               className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-950"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//             Send
//           </button>
//         </form>
//         <p className="text-center text-gray-500 mt-4">You may also call us at 1234567890</p>
//       </div>
//     </div>
//   );
// };

// export default Contact;
