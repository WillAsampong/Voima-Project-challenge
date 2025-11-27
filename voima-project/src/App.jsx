import { useState } from 'react'
import { motion } from "motion/react"
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  return (
    <header className="absolute top-0 bg-transparent">
      <nav className='py-6 mx-8'>
        <div className="logo">
          <h3 className='uppercase text-white font-bold text-xl tracking-wider'>VOIMA</h3>
        </div>
        
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </header>
  )
}

const Footer = () => {
  const socials = [
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "#"
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "#"
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} />,
      link: "#"
    },
  ];

  return (
    <footer className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full border-t-2 border-gray-200 px-2 md:px-8 py-2 mx-auto max-w-9/10'>
      <div className='flex justify-between'>
        <span className='text-gray-600'>&copy;2025</span>
        <p className='text-gray-600'>Developed by WILL</p>
        <div className='flex gap-x-3'>
          {socials.map((social, index) => (
            <a key={index} href={social.link} className='border-2 w-7 h-7 rounded-full p-4 flex justify-center items-center text-gray-500 hover:text-gray-700 transition-all duration-200 ease-linear'>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

const Hero = () => {

  return (
    <div className='relative bg-[url(assets/man-drinking-water.jpeg)] bg-cover bg-center h-[250px] md:h-[400px] -z-20'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-0 bg-black/65">

        </motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }} 
        className='absolute z-20 w-full h-full flex justify-center items-center'
      >
        <p className='text-2xl md:text-4xl text-white'><span className='font-semibold md/;font-bold'>Welcome, </span>User</p>
      </motion.div>
    </div>
  )
} 

function App() {

  return (
    <div className='relative h-screen overflow-hidden'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
