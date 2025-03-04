import React, { useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Users, Store, Building2, Play } from "lucide-react"
import fundsauditVideo from "../assets/videos/fundsaudit_video.mp4"
import World from "../components/world"
import Safe from '../components/Safesection'


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
      <section id="hero" className="relative h-[600px] overflow-hidden hero-section bg-light-sky-blue">
        <div className="absolute inset-0">
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#FFFFFF"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                opacity={0.15}
                transparent={true}
              />
            </Sphere>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1.5}
            />
          </Canvas>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Background overlay */}

        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div
            className={`max-w-2xl text-center ${isVisible.hero ? "fade-in" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Modern Solutions for Financial Management{" "}
              <span className="text-teal-600 animate-pulse">
                FundsAudit
              </span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 slide-in-left">
              FundsAudit provides innovative tools for auditing, accounting, and
              financial management to help you take control of your finances.
            </p>
            
          </div>
        </div>
      </section>

      {/* Light Teal Background Section */}
      <div className="bg-teal-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-800">Discover Our Features</h2>
          <p className="text-teal-700 mt-4">
            Explore how FundsAudit can help you manage your finances efficiently.
          </p>
        </div>
      </div>

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
              <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-teal-600 transition-colors duration-300">
                Simplify Your Financial Management
              </h3>
              <p className="text-gray-600 mb-6">
                Our application provides a seamless experience for managing your
                finances, tracking expenses, and ensuring compliance with
                auditing standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-2 rounded-full text-teal-600 float">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 hover:text-teal-600 transition-colors duration-300">
                      Easy Setup
                    </h4>
                    <p className="text-gray-600">
                      Get started in minutes with our intuitive onboarding
                      process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-2 rounded-full text-teal-600 float delay-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 hover:text-teal-600 transition-colors duration-300">
                      Real-time Tracking
                    </h4>
                    <p className="text-gray-600">
                      Monitor your finances in real-time with comprehensive
                      dashboards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-2 rounded-full text-teal-600 float delay-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 hover:text-teal-600 transition-colors duration-300">
                      Secure & Compliant
                    </h4>
                    <p className="text-gray-600">
                      Bank-level security and compliance with financial
                      regulations.
                    </p>
                  </div>
                </li>
              </ul>
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
     
      {/* Who We Serve Section */}
      <section id="whoWeServe" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2
            className={`section-title text-center mx-auto mb-12 ${
              isVisible.whoWeServe ? "fade-in" : "opacity-0"
            }`}
          >
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.whoWeServe ? "slide-up delay-100" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <Users size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Individual Users
              </h3>
              <p className="text-gray-600 text-center">
                Personal finance management, expense tracking, and savings goals
                for individuals looking to take control of their finances.
              </p>
            </div>
            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.whoWeServe ? "slide-up delay-300" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <Store size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Merchants & SMBs
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive accounting, inventory management, and financial
                reporting tools for small and medium-sized businesses.
              </p>
            </div>
            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.whoWeServe ? "slide-up delay-500" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <Building2 size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Enterprises
              </h3>
              <p className="text-gray-600 text-center">
                Advanced auditing, compliance management, and financial
                analytics for large organizations with complex financial
                structures.
              </p>
            </div>
          </div>
        </div>
      </section>
   
      {/* SAFE Section */}
      <div>
        <Safe />
      </div>
      <div>
        <World />
      </div>
    </div>
  )
}

export default HomePage
