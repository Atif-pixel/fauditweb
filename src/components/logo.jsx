import React from "react";

// Create an array of paths for SVGs stored in the public folder
const logos = Array.from({ length: 18 }, (_, i) => `/company/logo${i + 1}.svg`);

const FinancialLogos = () => {
  // Duplicate logos to ensure continuous loop effect
  const extendedLogos = [...logos, ...logos];

  return (
    <div style={styles.container}>
      {/* Title */}
      <h2 style={styles.title}>Accreditations and Associations</h2>

      {/* Logo Carousel */}
      <div style={styles.logoContainer}>
        <div
          style={{
            ...styles.scrollContainer,
            animation: "scroll 50s linear infinite",
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div key={index} style={styles.logoWrapper}>
              {/* Render each SVG */}
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={styles.logo}
              />
              {/* Divider between logos */}
              <div style={styles.logoDivider}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for the animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    width: "100%",
    overflow: "hidden",
    margin: "0 auto",
    padding: "40px 0", // Added padding for spacing
    backgroundColor: "#f9f9f9", // Light background for contrast
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  logoContainer: {
    width: "100%",
    overflow: "hidden",
  },
  scrollContainer: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    width: "max-content",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    marginRight: "40px", // Space between logos
  },
  logo: {
    width: "100px", // Adjust logo size
    height: "auto",
    objectFit: "contain",
  },
  logoDivider: {
    width: "1px",
    height: "50px",
    backgroundColor: "#ccc",
    marginLeft: "40px", // Space after the divider
  },
};

export default FinancialLogos;