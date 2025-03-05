import React, { useState, useEffect } from "react";

const JourneyTimeline = () => {
  const [animatedYears, setAnimatedYears] = useState([]);

  const milestones = [
    { year: 2020, title: "Foundation", description: "Company established with vision for financial innovation", icon: "🚀" },
    { year: 2021, title: "First Breakthrough", description: "Launched mobile app reaching 100k users", icon: "📱" },
    { year: 2022, title: "Expansion", description: "Expanded operations to 10+ countries", icon: "🌍" },
    { year: 2023, title: "Awards", description: "Won Fintech Innovation Award", icon: "🏆" },
    { year: 2024, title: "Present Day", description: "Serving 1M+ happy customers", icon: "🎯" },
    { year: 2025, title: "Future Goals", description: "Expanding to 50+ countries with AI-driven solutions", icon: "🚀" },
  ];

  useEffect(() => {
    const animateItems = () => {
      milestones.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedYears((prev) => [...prev, index]);
        }, index * 300);
      });
    };
    animateItems();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Journey</h2>
      <div style={styles.timeline}>
        <div style={styles.timelineLine}></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            style={{
              ...styles.milestone,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              opacity: animatedYears.includes(index) ? 1 : 0,
              transform: `translateX(${animatedYears.includes(index) ? 0 : index % 2 === 0 ? "-50px" : "50px"})`,
            }}
          >
            <div style={styles.dateBox}>
              <span style={styles.year}>{milestone.year}</span>
              <div style={styles.icon}>{milestone.icon}</div>
            </div>
            <div style={styles.content}>
              <h3 style={styles.milestoneTitle}>{milestone.title}</h3>
              <p style={styles.milestoneDesc}>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "4rem 1rem",
    backgroundColor: "#0A1023",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "4rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  timeline: {
    position: "relative",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
  timelineLine: {
    position: "absolute",
    left: "50%",
    width: "4px",
    backgroundColor: "teal",
    height: "100%",
    transform: "translateX(-50%)",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
  },
  milestone: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "4rem 0",
    transition: "all 0.6s ease-out",
  },
  dateBox: {
    width: "150px",
    height: "150px",
    backgroundColor: "#1C2A48",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
    position: "relative",
    zIndex: 1,
  },
  year: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "2rem",
    marginTop: "10px",
  },
  content: {
    width: "45%",
    padding: "2rem",
    backgroundColor: "#0A1023",
    border: "2px solid teal",
    borderRadius: "15px",
    boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  },
  milestoneTitle: {
    color: "#fff",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  milestoneDesc: {
    color: "#bbb",
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "2rem 1rem",
    },
    title: {
      fontSize: "2rem",
    },
    milestone: {
      flexDirection: "column !important",
      margin: "2rem 0",
      alignItems: "center",
    },
    dateBox: {
      width: "120px",
      height: "120px",
      marginBottom: "1rem",
    },
    year: {
      fontSize: "1.5rem",
    },
    icon: {
      fontSize: "1.5rem",
    },
    content: {
      width: "90%",
      textAlign: "center",
    },
    timelineLine: {
      left: "20px", // Move timeline line to the left for mobile
    },
  },
};

export default JourneyTimeline;