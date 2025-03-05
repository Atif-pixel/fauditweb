import React, { useRef, useEffect, useState } from "react";
import fundsauditVideo from "../assets/videos/fundsaudit_video.mp4";
import World from "../components/world";
import Safe from '../components/Safesection';
import ScrollingImages from '../components/ScrollingImages';
import Logo from '../components/logo';
import Counter from '../components/counter';
import Testimonial from '../components/TestimonialBlogSection';
import Particles from '../components/Particles';

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
    const typeAndErase = () => {
      const currentWord = rotatingWords[currentIndex];

      if (isTyping) {
        // Typing effect
        if (displayText.length < currentWord.length) {
          setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          }, 100); // Typing speed
        } else {
          setTimeout(() => setIsTyping(false), 1000); // Pause after typing
        }
      } else {
        // Erasing effect
        if (displayText.length > 0) {
          setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          }, 50); // Erasing speed
        } else {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length); // Move to the next word
        }
      }
    };

    const interval = setInterval(typeAndErase, 100); // Overall speed
    return () => clearInterval(interval);
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

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              lineHeight: "1.2",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  opacity: isVisible.hero ? 1 : 0,
                  transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`,
                  marginRight: "8px", // Add spacing between words
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
                }}
              ></span>
            </span>
          </h1>
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
    </div>
  );
};

export default HomePage;