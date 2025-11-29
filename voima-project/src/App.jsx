import { useState, useRef } from 'react'
import { motion } from "motion/react"
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faCircleUser, faDroplet, } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  return (
    <header className="absolute z-20 top-0 bg-transparent w-full">
      <nav className='py-6 mx-8 flex justify-between items-center'>
        <div className="logo">
          <h3 className='uppercase text-white font-bold text-xl tracking-wider'>VOIMA</h3>
        </div>

        <div className='text-white flex items-center gap-x-1'>
          <FontAwesomeIcon icon={faCircleUser} />
          <span>Sign in</span>
        </div>
      </nav>
    </header>
  )
}

const Footer = () => {
  const socials = [
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "https://github.com/WillAsampong"
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
    <footer className='w-full border-t border-gray-200 px-2 md:px-8 py-2 mt-auto'>
      <div className='flex items-center justify-between'>
        <span className='text-gray-600'>&copy;2025</span>
        <p className='text-gray-600 hidden md:block'>Developed by WILL</p>
        <div className='flex gap-x-2'>
          {socials.map((social, index) => (
            <a key={index} href={social.link} target='blank' className='border-2 w-5 h-5 rounded-full p-3 flex justify-center items-center text-gray-500 hover:text-gray-800 transition-all duration-200 ease-linear'>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

const Hero = ({ handleScroll }) => {

  return (
    <div className='relative bg-[url(assets/man-drinking-water.jpeg)] bg-cover bg-center h-screen'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-10 bg-black/60">
      </motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }} 
        className='absolute z-20 w-full h-full flex flex-col justify-center items-center gap-y-5'
      >
        <div className='mt-4 flex flex-col justify-center items-center gap-y-3'>
          <p className='text-2xl md:text-4xl text-white'><span className='font-semibold md:font-bold'>Welcome, </span>User</p>

          <button 
            className='bg-white text-sm px-4 md:px-6 py-1.5 md:py-2 font-normal md:font-semibold hover:bg-transparent hover:text-white transition-all ease-linear border hover:border-gray-400 cursor-pointer flex items-center justify-evenly gap-x-1' 
            onClick={handleScroll}>
              Get Started 
              <span className='animate-bounce '><FontAwesomeIcon icon={faArrowDown} /></span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}



const MainSection = ({ sectionRef, glassesOfWater, setGlassesOfWater, submitted, setSubmitted, handleSubmit }) => {
  const today = new Date().toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const getFeedback = () => {

  };

  const feedback = submitted ? getFeedback() : null;

  return (
    <main className='min-h-screen' ref={sectionRef}>
      <div className='max-w-md mx-auto w-full px-6 py-10 shadow-lg my-12 bg-white'>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <FontAwesomeIcon icon={faDroplet} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Daily Hydration</h1>
            <p className="text-sm text-gray-600">{today}</p>
          </div>
        </div>

        {/* Input Section */}
        {!submitted ? 
          (<div className=''>
            <p className='text-sm font-medium text-gray-700 mb-3'>How many glasses of water have you had today?</p>

            <div className="flex items-center justify-center gap-4 mb-6 mt-8">
              <button
                onClick={() => setGlassesOfWater(Math.max(0, glassesOfWater - 1))}
                className="w-12 h-12 rounded-full border hover:border-2 border-blue-400 hover:bg-blue-50 text-gray-700 text-2xl font-semibold transition-colors cursor-pointer"
                aria-label="Decrease"
              >
                −
              </button>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600">{glassesOfWater}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {glassesOfWater === 1 ? 'glass' : 'glasses'}
                </div>
              </div>
              
              <button
                onClick={() => setGlassesOfWater(glassesOfWater + 1)}
                className="w-12 h-12 rounded-full border border-blue-400 hover:border-2 text-2xl font-semibold cursor-pointer transition-colors"
                aria-label="Increase"
              >
                +
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={glassesOfWater === 0}
              className={`w-full py-3 font-medium transition-colors ${
                glassesOfWater > 0
                  ? 'bg-white hover:bg-blue-500 hover:text-white cursor-pointer text-blue-600 border border-blue-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {glassesOfWater === 0 ? 'Enter your water intake' : "Save Today's Entry"}
            </button>
          </div>
          ) : (
            <>

              

              <button
                onClick={() => {
                  setSubmitted(false)
                  setGlassesOfWater(0)
                }}
                className='w-full py-3 font-medium transition-colors bg-blue-600 hover:bg-blue-900 text-white cursor-pointer'
              >
                Start Over
              </button>
            </>
          )
        }

      </div>
    </main>
  )
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [glassesOfWater, setGlassesOfWater] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    setShowForm(true);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = () => {
    if(glassesOfWater > 0) {
      setSubmitted(true)
    }
  }

  return (
    <div className='min-h-screen flex flex-col bg-blue-50'>
      <Navbar />
      <Hero handleScroll={handleScroll} />
      {showForm && 
        <MainSection 
        sectionRef={sectionRef} 
        glassesOfWater={glassesOfWater} 
        setGlassesOfWater={setGlassesOfWater}
        submitted={submitted}
        setSubmitted={setSubmitted}
        handleSubmit={handleSubmit}/>
      }
      <Footer />
    </div>
  )
}

export default App
