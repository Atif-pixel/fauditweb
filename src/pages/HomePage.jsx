import React, { useRef, useEffect, useState } from "react";
import fundsauditVideo from "../assets/videos/fundsaudit_video.mp4";
import World from "../components/world";
import Safe from '../components/Safesection';
import ScrollingImages from '../components/ScrollingImages';
import Logo from '../components/logo';
import Counter from '../components/counter';
import Testimonial from '../components/TestimonialBlogSection';
import Particles from '../components/Particles';
import ScrollVelocity from '../components/ScrollVelocity';

// Import the PNG images
import image1 from "../assets/png/1.png"; // Replace with your actual image path
import image2 from "../assets/png/2.png"; // Replace with your actual image path

const HomePage = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    howItWorks: false,
    whoWeServe: false,
    safe: false,
  });

  // Split the hero text into words
  const heroText = "Modern Solution For Financial Management";
  const words = heroText.split(" ");

  // Rotating text logic with typing and erasing effect
  const rotatingWords = ["FundsAudit", "WealthGuard", "FinanceTrack", "MoneyMonitor"];
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const typeAndErase = () => {
      const currentWord = rotatingWords[currentIndex];

      if (isTyping) {
        // Typing effect
        if (displayText.length < currentWord.length) {
          timeoutId = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          }, 100); // Typing speed
        } else {
          timeoutId = setTimeout(() => setIsTyping(false), 1000); // Pause after typing
        }
      } else {
        // Erasing effect
        if (displayText.length > 0) {
          timeoutId = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          }, 50); // Erasing speed
        } else {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length); // Move to the next word
        }
      }
    };

    timeoutId = setTimeout(typeAndErase, 100); // Overall speed
    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("click", () => {
        if (videoRef.current?.paused) {
          videoRef.current.play();
        } else {
          videoRef.current?.pause();
        }
      });
    }

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
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #0A1023, #1C2A48)",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Dynamic Background Animation */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Particles
            particleColors={['#ffffff', '#4FD1C5']}
            particleCount={200}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 4rem)", // Responsive font size
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              textShadow: "0 0 10px rgba(79, 209, 197, 0.8), 0 0 20px rgba(79, 209, 197, 0.6)", // Glow effect
            }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  opacity: isVisible.hero ? 1 : 0,
                  transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`,
                  marginRight: "15px", // Add spacing between words
                }}
              >
                {word}
              </span>
            ))}
            <span
              style={{
                color: "#4FD1C5", // Teal color for rotating text
                opacity: isVisible.hero ? 1 : 0,
                transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease-out ${words.length * 0.2}s, transform 0.5s ease-out ${words.length * 0.2}s`,
                display: "inline-block",
                marginLeft: "8px",
                position: "relative",
                textShadow: "0 0 10px rgba(79, 209, 197, 0.8), 0 0 20px rgba(79, 209, 197, 0.6)", // Glow effect
              }}
            >
              {displayText}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  backgroundColor: "#4FD1C5",
                  marginLeft: "4px",
                  animation: "blink 1s infinite",
                  position: "absolute",
                  right: "-4px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></span>
            </span>
          </h1>

          {/* Add the two PNG images with moving animations */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <img
              src={image1}
              alt="Image 1"
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                width: "150px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                animation: "float 6s infinite ease-in-out",
              }}
            />
            <img
              src={image2}
              alt="Image 2"
              style={{
                position: "absolute",
                top: "60%",
                right: "10%",
                width: "150px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                animation: "float 8s infinite ease-in-out",
              }}
            />
          </div>
        </div>
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
            <div className={isVisible.howItWorks ? "slide-in-left" : "opacity-0"}>
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

      {/* CSS for Animations and Responsive Design */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          /* Responsive Styles for Mobile */
          @media (max-width: 768px) {
            #hero h1 {
              font-size: clamp(1.5rem, 6vw, 3rem); /* Smaller font size for mobile */
            }

            #hero img {
              width: 100px !important; /* Smaller images for mobile */
            }

            #hero img:nth-child(1) {
              top: 10% !important;
              left: 5% !important;
            }

            #hero img:nth-child(2) {
              top: 70% !important;
              right: 5% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;