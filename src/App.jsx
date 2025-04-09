

import React from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <div class="font-sans bg-gray-50 text-gray-900">
      <header class="bg-sky-800 text-white py-6">
    <div class="container mx-auto flex justify-between items-center px-6">
      <h1 class="text-3xl font-semibold ">Archana Ekka</h1>
      <nav>
        <ul class="flex space-x-6">
          <li class="flex "><a href="#about" class="hover:text-yellow-400 hover:scale-180">About</a></li>
          <li class="flex"><a href="#skills" class="hover:text-yellow-400 hover:scale-180">Skills</a></li>
          <li class="flex"><a href="#projects" class="hover:text-yellow-400 hover:scale-180">Projects</a></li>
          <li class="flex "><a href="#contact" class="hover:text-yellow-400 hover:scale-180">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

    

  <section id="about" class="py-10 bg-blue-200  flex flex-row justify-center h-fit">
   
    <div class="container my-auto  text-center w-300 px-10">
      <h2 class="text-4xl font-bold text-gray-800 mb-4 hover:animate-spin" >About Me</h2>
      <p class="text-lg text-gray-600 flex  flex-wrap">I am a passionate web developer with experience in building beautiful and functional websites. I love learning new technologies and applying them to real-world projects. Let's create something amazing!</p>
    </div >
    <div class="container mx-auto px-6 text-center w-100 ">
      <img src="image1.jpeg" alt="Image with Border" class="w-70 h-auto shadow-black"/></div>
    
  </section>

  {/* <!-- Skills Section --> */}
  <section id="skills" class="py-16  md:bg-amber-600">  
    <div class="container mx-auto px-6 text-center max-sm:bg-amber-300 max-md:bg-fuchsia-400 py-5" >
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-amber-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl ">
          <h3 class="text-2xl font-semibold text-gray-800">HTML</h3>
          <p class="text-gray-600">I build semantic, well-structured HTML for accessible and responsive websites.</p>
        </div>
        <div class="bg-amber-100 p-6 rounded-lg shadow-lg  transform transition duration-500 hover:scale-110 hover:shadow-2xl">
          <h3 class="text-2xl font-semibold text-gray-800">CSS</h3>
          <p class="text-gray-600">I use modern CSS techniques like Flexbox and Grid to create layouts that are both beautiful and responsive.</p>
        </div>
        <div class="bg-amber-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
          <h3 class="text-2xl font-semibold text-gray-800">JavaScript</h3>
          <p class="text-gray-600">I write clean and efficient JavaScript code to make websites interactive and dynamic.</p>
        </div>
        <div class="bg-amber-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
          <h3 class="text-2xl font-semibold text-gray-800">React</h3>
          <p class="text-gray-600">I create fast and scalable applications with React, utilizing hooks, state management, and component-based architecture.</p>
        </div>
        <div class="bg-amber-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
          <h3 class="text-2xl font-semibold text-gray-800">Tailwind CSS</h3>
          <p class="text-gray-600">I use Tailwind CSS for efficient utility-first styling and creating custom, responsive designs.</p>
        </div>
        <div class="bg-amber-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
          <h3 class="text-2xl font-semibold text-gray-800">Node.js</h3>
          <p class="text-gray-600">I build backend services and APIs with Node.js for fast, scalable server-side applications.</p>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="py-16 bg-pink-100">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideInRight duration-700">
        <div class="bg-fuchsia-200
             p-6 rounded-lg shadow-lg hover:animate-bounce">
          <h3 class="text-2xl font-semibold text-gray-800">Project 1</h3>
          <p class="text-gray-600">A simple project description. This is a cool project I worked on using HTML, CSS, and JavaScript.</p>
          <a href="https://portfolio-478n.vercel.app/" class="text-blue-500 hover:underline mt-2 block">View Project</a>
        </div>
        <div class="bg-fuchsia-200 p-6 rounded-lg shadow-lg hover:animate-bounce">
          <h3 class="text-2xl font-semibold text-gray-800">Project 2</h3>
          <p class="text-gray-600">Another project description. It was built with React and Node.js for a more dynamic and functional experience.</p>
          <a href="https://portfolio-478n.vercel.app/" class="text-blue-500 hover:underline mt-2 block">View Project</a>
        </div>
        <div class="bg-fuchsia-200 p-6 rounded-lg shadow-lg hover:animate-bounce">
          <h3 class="text-2xl font-semibold text-gray-800">Project 3</h3>
          <p class="text-gray-600">This project includes advanced Tailwind CSS layouts and custom animations for a unique user experience.</p>
          <a href="https://tailwind-project-gamma-amber.vercel.app/" class="text-blue-500 hover:underline mt-2 block">View Project</a>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Contact Section --> */}
  <section id="contact" class="py-16 bg-gradient-to-r from-blue-200 to-green-200 p-10">
    <div class="container mx-auto px-6 text-center shadow-lg shadow-black rounded-xl w-4xl hover:animate-pulse bg-blue-100">
      <div class="py-20 ">  
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
      <p class="text-lg text-gray-600 mb-8">Feel free to reach out to me for collaboration, questions, or just to chat!</p>
      <form action="#" method="POST" class="max-w-xl mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" class="w-full p-4 border border-gray-300 rounded-lg bg-gray-50" required/>
        <input type="email" name="email" placeholder="Your Email" class="w-full p-4 border border-gray-300 rounded-lg bg-gray-50" required/>
        <textarea name="message" placeholder="Your Message" class="w-full p-4 border border-gray-300 rounded-lg bg-gray-50" rows="4" required></textarea>
        <button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
      </form>
      </div>
      
   </div>
  </section>
  

  {/* <!-- Footer Section --> */}
  <footer class="bg-gray-800 text-white py-6 text-center">
    <p>&copy; 2025 Archana Ekka. All rights reserved.</p>
  </footer>



  
      </div>
      
    </>
  )
} 

export default App
