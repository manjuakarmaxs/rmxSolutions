import React from 'react'

 const Contact = () => {
  return (
    <>
     
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-500">
  <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
    <h2 class="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
    <p class="text-center text-gray-500 mb-8">We will get back to you asap!</p>
    <form>
    
      <div class="flex space-x-4 mb-4">
        <div class="flex-1">
          <label class="relative block">
            <input type="text" placeholder="First Name" class="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-user text-gray-400"></i>
            </span>
          </label>
        </div>
        <div class="flex-1">
          <label class="relative block">
            <input type="text" placeholder="Last Name" class="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-user text-gray-400"></i>
            </span>
          </label>
        </div>
      </div>
      
      <div class="relative mb-4">
        <input type="email" placeholder="Email" class="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="fas fa-envelope text-gray-400"></i>
        </span>
      </div>
    
      <div class="relative mb-6">
        <input type="tel" placeholder="Phone" class="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="fas fa-phone text-gray-400"></i>
        </span>
      </div>
    
      <button type="submit" class="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send</button>
    </form>
    <p class="text-center text-gray-500 mt-4">You may also call us at 1234567890</p>
  </div>
</div>

    </>
   
  )
}
export default Contact;