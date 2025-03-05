import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatsSection = () => {
  const stats = [
    { count: 20000, label: "Downloads", suffix: "+" },
    { count: 18000, label: "Active Users", suffix: "+" },
    { count: 600, label: "Total AUM", suffix: "Cr+" },
    { count: 132, label: "Total Transactions", suffix: "Cr+" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f0fdfa,rgb(230, 235, 234))", // Gradient background
        padding: "6rem 1rem", // Increased padding for better spacing
        borderRadius: "15px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        margin: "2rem 0",
        fontFamily: "'Poppins', sans-serif", // Added a good font
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "4.5rem", // Increased font size for numbers
                fontWeight: "700", // Bold font weight
                color: "#0d9488", // Teal color
                lineHeight: "1.2",
              }}
            >
              <VisibilitySensor partialVisibility>
                {({ isVisible }) =>
                  isVisible ? (
                    <CountUp
                      start={0}
                      end={item.count}
                      duration={5} // Slower counting animation (5 seconds)
                      suffix={item.suffix || "+"}
                    />
                  ) : (
                    <span>0{item.suffix || "+"}</span>
                  )
                }
              </VisibilitySensor>
            </div>
            <p
              style={{
                fontSize: "1.5rem", // Increased font size for labels
                color: "#0d9488", // Teal color
                fontWeight: "500", // Medium font weight
                marginTop: "0.5rem",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;