import { useState, useRef } from 'react'
import { easeIn, motion } from "motion/react"
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faArrowRight, faArrowUpRightDots, faCheckCircle, faCircleExclamation, faCircleUser, faDroplet, } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  return (
    <header className="absolute z-20 top-0 bg-transparent w-full">
      <nav className='py-6 mx-8 flex justify-between items-center'>
        <div className="logo">
          <h3 className='uppercase text-white font-bold text-xl tracking-wider'>VOIMA 
            <span className='text-sm italic tracking-widest lowercase font-thin hidden md:flex'> – Your daily hydration tracker</span>
          </h3>
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
              <span className=' '><FontAwesomeIcon icon={faArrowRight} /></span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const MainSection = ({ 
  sectionRef, 
  glassesOfWater, 
  setGlassesOfWater, 
  submitted, 
  setSubmitted, 
  handleSubmit,
  setShowSection
}) => {
  const today = new Date().toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const getFeedback = () => {

    const goalGlasses = 8;

    switch (true) {
      case glassesOfWater >= goalGlasses:
        return {
          type: "excellent",
          icon: <FontAwesomeIcon icon={faCheckCircle} />,
          message: "Great work staying hydrated today!",
          details: "Consistent hydration is one of the best ways to support your health."
        };

      case glassesOfWater >= goalGlasses - 2:
        return {
          type: "almost",
          icon: <FontAwesomeIcon icon={faArrowUpRightDots} />,
          message: "You're almost there.",
          details: `Try to get ${goalGlasses - glassesOfWater} more glass${
            goalGlasses - glassesOfWater > 1 ? "es" : ""
          }.`
        };

      default:
        return {
          type: "concern",
          icon: <FontAwesomeIcon icon={faCircleExclamation} />,
          message: "You're below your hydration goal.",
          details: "Try to drink more water throughout the day to stay healthy."
        };
    }
  };


  const feedback = submitted ? getFeedback() : null;

  return (
    <main className='min-h-screen flex justify-center items-center' ref={sectionRef}>
      <motion.div 
        className='max-w-md mx-auto w-full px-6 py-10 shadow-lg my-12 bg-white'
        initial={{ y: 30, opacity: 0, }}
        animate={{ y: 0, opacity: 1, }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
        >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <FontAwesomeIcon icon={faDroplet} color='blue' />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-blue-700">Daily Hydration</h1>
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
                className="w-12 h-12 rounded-full border border-blue-400 hover:bg-blue-50 hover:border-2 text-2xl font-semibold cursor-pointer transition-colors"
                aria-label="Increase"
              >
                +
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                <span className="font-medium">Goal: 8 glasses per day.</span>
              </p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={glassesOfWater === 0}
              className={`w-full py-3 font-medium transition-colors ${
                glassesOfWater > 0
                  ? 'bg-blue-600 hover:bg-blue-900 text-white cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {glassesOfWater === 0 ? 'Enter your water intake' : "Save Today's Entry"}
            </button>
          </div>
          ) : (
            <>
              <div className={`border-2 rounded-xl p-6 mb-6`}>
                  <div className='flex items-start gap-3'>
                    <div className='mt-1'>{feedback.icon}</div>
                    <div>
                      <h2 className='text-lg font-semibold mb-2'>{feedback.message}</h2>
                      <p className='text sm'>{feedback.details}</p>
                    </div>
                  </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{glassesOfWater}</div>
                  <div className="text-sm text-gray-600">glasses logged for today</div>
                </div>
              </div>

              <button 
                onClick={() => setSubmitted(false)}
                className='w-full py-3 font-medium transition-colors bg-blue-600 hover:bg-blue-900 text-white cursor-pointer mb-3'
              >
                Update Today's Count
              </button>

              <button
                onClick={() => {
                  setSubmitted(false)
                  setShowSection(false)
                  setGlassesOfWater(0)
                }}
                className='w-full py-3 font-medium transition-colors bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-600 hover:text-white cursor-pointer'
              >
                Go to Home Page
              </button>
            </>
          )
        }
      </motion.div>
    </main>
  )
}

function App() {
  const [showSection, setShowSection] = useState(false);
  const [glassesOfWater, setGlassesOfWater] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    setShowSection(true);
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
      {!showSection ? 
        (
          <>
            <Navbar />
            <Hero handleScroll={handleScroll} />
            <Footer />
          </>
        ): 
        (
          <MainSection 
          sectionRef={sectionRef} 
          glassesOfWater={glassesOfWater} 
          setGlassesOfWater={setGlassesOfWater}
          submitted={submitted}
          setSubmitted={setSubmitted}
          setShowSection={setShowSection}
          handleSubmit={handleSubmit}/>
        )
        
      }
    </div>
  )
}

export default App
