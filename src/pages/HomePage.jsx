import React, { useRef, useEffect, useState } from "react"
import fundsauditVideo from "../assets/videos/fundsaudit_video.mp4"
import World from "../components/world"
import Safe from '../components/Safesection'
import ScrollingImages from '../components/ScrollingImages'
import Logo from '../components/logo';
import Counter from '../components/counter';
import Testimonial from '../components/TestimonialBlogSection';
import Particles from '../components/Particles';
import CircularText from '../components/CircularText';
import RotatingText from '../components/RotatingText';

const HomePage = () => {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    howItWorks: false,
    whoWeServe: false,
    safe: false
  })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("click", () => {
        if (videoRef.current?.paused) {
          videoRef.current.play()
        } else {
          videoRef.current?.pause()
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="bg-gray-50-80">
      {/* Hero Section with 3D Element */}
      <section id="hero" className="relative h-[600px] overflow-hidden hero-section bg-black pt-20 pb-32">
        <div className="absolute inset-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* <CircularText
  text="FUNDS*AUDIT*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/> */}

<RotatingText
  texts={['FUNDSAUDIT', 'IS', 'SAFE']}
  mainClassName="text-teal-600 text-6xl sm:text-7xl md:text-8xl font-bold overflow-hidden py-1.0 sm:py-1 md:py-2 justify-center"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
        {/* <div className="absolute inset-0 bg-black opacity-30 py-20 pb-32"></div> 

        <div className="container mx-auto px-4 h-full flex items-start justify-start relative z-10">
          <div
            className={`max-w-2xl text-left mt-20 ${isVisible.hero ? "fade-in" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Modern Solutions for Financial Management{" "}
              
              <span className="text-teal-600 animate-pulse">
                FundsAudit
              </span>
            </h1>
          </div>
        </div> */}
      </section>

      {/* How It Works Section */}
      <section id="howItWorks" className="py-16 bg-gradient-gray">
        <div className="container mx-auto px-4">
          <h2
            className={`section-title text-center mx-auto mb-12 ${
              isVisible.howItWorks ? "fade-in" : "opacity-0"
            }`}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={isVisible.howItWorks ? "slide-in-left" : "opacity-0"}
            >
              <ScrollingImages />
              
            </div>
           
            <div
              className={`relative rounded-lg overflow-hidden shadow-xl ${
                isVisible.howItWorks ? "slide-in-right" : "opacity-0"
              }`}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative border-4 border-teal-600 glow-effect">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  controls
                >
                  <source src={fundsauditVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
              
              <Counter />
              
    </div>

      {/* SAFE Section */}
      <div>
        <Safe />
      </div>
      <div>
        <World />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <Testimonial />
      </div>
    </div>
  )
}

export default HomePage
