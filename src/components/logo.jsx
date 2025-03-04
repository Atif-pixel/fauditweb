import React from "react";

const FinancialLogos = () => {
  const logos = [
    { name: "BSE", img: "src/assets/logo/BSE.jpg" },
    { name: "NSE", img: "src/assets/logo/NSE.jpg" },
    { name: "SEBI", img: "src/assets/logo/SEBI.jpg" },
    { name: "AMFI", img: "src/assets/logo/amfi.jpg" }
  ];

  return (
    <section
      style={{
        margin: "40px auto",
        background: "white",
        padding: "20px 0",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          width: "max-content",
          animation: "scroll 10s linear infinite"
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              background: "#F3F4F6",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              minWidth: "120px",
              minHeight: "120px"
            }}
          >
            <img
              src={logo.img}
              alt={logo.name}
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain"
              }}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            div[style*="width: max-content"] {
              gap: 20px;
              animation-duration: 15s;
            }
            div[style*="minWidth"] {
              min-width: 100px;
              min-height: 100px;
            }
            img {
              width: 70px !important;
              height: 70px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FinancialLogos;
