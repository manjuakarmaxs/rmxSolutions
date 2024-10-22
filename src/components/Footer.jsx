import React from 'react'

 const Footer = () => {
  return (
    <>
    <footer class="bg-black text-white py-8">
  <div class="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
   
    <div>
      <h3 class="font-bold mb-4">PRODUCT</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">Features</a></li>
        <li><a href="#" class="hover:underline">Pricing</a></li>
        <li><a href="#" class="hover:underline">FAQ</a></li>
        <li><a href="#" class="hover:underline">Support</a></li>
      </ul>
    </div>


    <div>
      <h3 class="font-bold mb-4">COMPANY</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">About Us</a></li>
        <li><a href="#" class="hover:underline">Blog</a></li>
        <li><a href="#" class="hover:underline">Careers</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="font-bold mb-4">RESOURCES</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">Documentation</a></li>
        <li><a href="#" class="hover:underline">API Reference</a></li>
        <li><a href="#" class="hover:underline">Community</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="font-bold mb-4">LEGAL</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        <li><a href="#" class="hover:underline">Terms of Service</a></li>
      </ul>
    </div>
  </div>
</footer>

    </>
  )
}
export default Footer