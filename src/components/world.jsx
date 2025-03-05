import React, { useEffect, useRef, useState } from "react";

const counterData = [
  { id: 1, count: 20000, label: "D o w n l o a d s", top: "10%", left: "20%", suffix: "+" },
  { id: 2, count: 50, label: "C i t i e s", top: "40%", left: "18%", suffix: "+" },
  { id: 3, count: 132, label: "T r a n s a c t i o n s", bottom: "5%", left: "20%", suffix: "cr+" },
  { id: 4, count: 600, label: "A U M", top: "20%", right: "20%", suffix: "cr+" },
  { id: 5, count: 18000, label: "Active Users", bottom: "15%", right: "20%" },
];

const RotatingWorld = () => {
  const globeRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState({});
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY / 2);

      if (!hasStartedCounting && globeRef.current.getBoundingClientRect().top < window.innerHeight) {
        setHasStartedCounting(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStartedCounting]);

  useEffect(() => {
    if (hasStartedCounting) {
      counterData.forEach((item) => {
        const targetCount = item.count;
        const duration = 2000; // Animation duration in milliseconds
        const increment = targetCount / (duration / 16); // 16ms per frame for smooth animation

        let currentCount = 0;

        const interval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(interval);
          }

          setAnimatedCounts((prevCounts) => ({
            ...prevCounts,
            [item.id]: Math.floor(currentCount),
          }));
        }, 16); // 16ms for ~60fps
      });
    }
  }, [hasStartedCounting]);

  return (
    <div style={styles.container}>
      {/* World PNG */}
      <div ref={globeRef} style={{ ...styles.globe, transform: `rotate(${rotation}deg)` }}>
        <img src="/assets/world.png" alt="World Map" style={styles.globeImage} />
      </div>

      {/* Counters */}
      {counterData.map(({ id, label, top, bottom, left, right, suffix }) => (
        <div key={id} style={{ ...styles.counter, top, bottom, left, right }}>
          <span style={styles.count}>
            {animatedCounts[id]?.toLocaleString()}
            {suffix}
          </span>
          <span style={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "600px",
    backgroundColor: "#0A1023", // Dark blue background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "20px",
  },
  globe: {
    width: "500px",
    height: "500px",
    position: "relative",
    transition: "transform 0.1s linear",
  },
  globeImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  counter: {
    position: "absolute",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase",
    filter: "drop-shadow(0 0 10px teal)", // Glowing effect
  },
  count: {
    fontSize: "50px",
    display: "block",
  },
  label: {
    fontSize: "16px",
    letterSpacing: "1px",
  },

  // Responsive styles for mobile
  "@media (max-width: 768px)": {
    container: {
      height: "500px",
    },
    globe: {
      width: "300px",
      height: "300px",
    },
    counter: {
      fontSize: "14px",
      left: "5% !important",
      right: "5% !important",
      textAlign: "center",
    },
    count: {
      fontSize: "30px",
    },
    label: {
      fontSize: "12px",
    },
  },
};

export default RotatingWorld;