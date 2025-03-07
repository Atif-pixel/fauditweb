import React, { useState, useEffect } from "react";
import { FileCheck, Shield, TrendingUp, Briefcase } from "lucide-react";
import aboutImage from "../assets/funds.jpg";
import OurTeam from "../components/OurTeam";
import Journey from '../components/journey';
import TrueFocus from '../components/TrueFocus';
import SpaceAnimation from '../components/SpaceAnimation'

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    story: false,
    services: false,
    team: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };


    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-gray-50-80">
   
      <section id="hero" className="relative h-[400px] overflow-hidden">
      {/* Space Animation */}
        <SpaceAnimation />

        {/* About Us Content */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div
            className={`max-w-2xl ${isVisible.hero ? "fade-in" : "opacity-0"}`}
          >
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className="mt-4 text-lg text-white">
              We are a team of space enthusiasts exploring the universe!
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 bg-gradient-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={isVisible.story ? "slide-in-left" : "opacity-0"}>
              <h2 className="section-title mb-6 hover:text-teal-600 transition-colors duration-300">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
                FundsAudit was founded in 2020 with a simple mission: to make
                financial management and auditing accessible to everyone. What
                started as a small team of financial experts has grown into a
                comprehensive platform serving individuals, small businesses,
                and large enterprises.
              </p>
              <p className="text-gray-600 mb-4 hover:translate-x-1 transition-transform duration-300">
                Our team combines decades of experience in financial services
                with cutting-edge technology to create solutions that are both
                powerful and user-friendly. We believe that financial management
                shouldn't be complicated, and we're committed to making it
                simple for our users.
              </p>
              <p className="text-gray-600 hover:translate-x-1 transition-transform duration-300">
                Today, FundsAudit serves thousands of users across the globe,
                helping them take control of their finances, ensure compliance
                with regulations, and make informed financial decisions.
              </p>
            </div>
            <div
              className={`rounded-lg overflow-hidden shadow-xl ${
                isVisible.story ? "slide-in-right" : "opacity-0"
              }`}
            >
              <img
                src={aboutImage} // Using your new JPG image
                alt="About FundsAudit"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      
        <div>
          <Journey />
        </div>
        
      

      {/* Our Services Section */}
      {/* <section id="services" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2
            className={`section-title text-center mx-auto mb-12 ${
              isVisible.services ? "fade-in" : "opacity-0"
            }`}
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.services ? "slide-up delay-100" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <FileCheck size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Auditing & Accounting
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive auditing and accounting services to ensure
                accuracy and compliance with financial regulations.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Financial Statement Audits
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Compliance Audits
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Bookkeeping Services
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.services ? "slide-up delay-300" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <Shield size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Financial Security
              </h3>
              <p className="text-gray-600 text-center">
                Protect your financial data with our state-of-the-art security
                measures and compliance tools.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Data Encryption
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Fraud Detection
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Regulatory Compliance
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.services ? "slide-up delay-500" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <TrendingUp size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Financial Planning
              </h3>
              <p className="text-gray-600 text-center">
                Strategic financial planning and analysis to help you achieve
                your financial goals.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Budget Planning
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Investment Strategies
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Retirement Planning
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`card p-6 hover:translate-y-[-5px] hover:shadow-xl transition-all duration-500 ${
                isVisible.services ? "slide-up delay-700" : "opacity-0"
              }`}
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto float">
                <Briefcase size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 hover:text-teal-600 transition-colors duration-300">
                Business Solutions
              </h3>
              <p className="text-gray-600 text-center">
                Tailored financial solutions for businesses of all sizes, from
                startups to enterprises.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Cash Flow Management
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Financial Reporting
                  </span>
                </li>
                <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-teal-100 p-1 rounded-full text-teal-600 pulse delay-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                  <span className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                    Tax Planning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>   */}
      <div>
      <OurTeam />
    
    </div>
    </div>
  )
}

export default AboutPage
