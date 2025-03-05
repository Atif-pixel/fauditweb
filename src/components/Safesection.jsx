import React from "react";

const SafeSection = () => {
  return (
    <section
      id="safe"
      style={{
        padding: "4rem 1rem", // Added horizontal padding for smaller screens
        background: "#0A1023",
        textAlign: "center",
        minHeight: "100vh", // Ensure the section takes full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2.5rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        What We Are
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#0A1023",
              border: "2px solid teal",
              boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
              borderRadius: "15px",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "280px",
              height: "350px",
              transition: "all 0.4s ease-in-out",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, #0A1023, #1C2A48)";
              e.currentTarget.style.boxShadow =
                "0px 0px 20px rgba(0, 255, 255, 0.5)";
              e.currentTarget.querySelector("p").style.opacity = "1";
              e.currentTarget.querySelector("p").style.transform = "translateY(0)";
              e.currentTarget.querySelector(".icon").style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0A1023";
              e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0,0,0,0.3)";
              e.currentTarget.querySelector("p").style.opacity = "0";
              e.currentTarget.querySelector("p").style.transform =
                "translateY(10px)";
              e.currentTarget.querySelector(".icon").style.transform = "scale(1)";
            }}
          >
            <div
              className="icon"
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                transition: "transform 0.3s ease-in-out",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#00FFCC",
              }}
            >
              {item.icon} {/* Use the S A F E icon here */}
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "1.4rem",
                fontWeight: "600",
                marginBottom: "12px",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: "#bbb",
                fontSize: "1rem",
                padding: "0 12px",
                opacity: "0",
                transform: "translateY(10px)",
                transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const cardData = [
  {
    title: "Savings",
    description: "Innovative tools to save effectively.",
    icon: "S", // S for Savings
  },
  {
    title: "Auditing",
    description: "Professional-grade financial accuracy.",
    icon: "A", // A for Auditing
  },
  {
    title: "Finance",
    description: "Tools for budgeting & strategic planning.",
    icon: "F", // F for Finance
  },
  {
    title: "Earnings",
    description: "Track & analyze your financial flows.",
    icon: "E", // E for Earnings
  },
];

export default SafeSection;