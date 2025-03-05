import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export const OurTeam = () => {
  const teamStructure = [
    {
      department: "CEO",
      members: [{ src: "src/assets/staff/masroor_sir.jpg", name: "Masroor Khan", role: "CEO" }],
    },
    {
      department: "Business Department",
      members: [
        { src: "src/assets/staff/pooja_mam.png", name: "Pooja", role: "Branch Manager", isManager: true },
        { src: "src/assets/staff/adarsh_sir.png", name: "Adarsh", role: "Business Strategist" },
        { src: "src/assets/staff/prashant_sir.png", name: "Prashant", role: "Marketing Head" },
        { src: "src/assets/staff/employee3.png", name: "Abhishek", role: "Marketing" },
      ],
    },
    {
      department: "Tech Department",
      members: [
        { src: "src/assets/staff/arya_sir.jpeg", name: "Arya Mehta", role: "Jr SDE" },
        { src: "src/assets/staff/nikita_mam.png", name: "Nikita Watpal", role: "Jr SDE" },
      ],
    },
    {
      department: "A&F Department",
      members: [
        { src: "src/assets/staff/ittika_mam.png", name: "Ittika", role: "Head of A&F" },
        { src: "src/assets/staff/moiz_sir.jpg", name: "Moiz", role: "Finance Analyst" },
      ],
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        backgroundImage: "url(./assets/images/team_member_background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h2 style={{ marginBottom: "40px", color: "#000", fontSize: "48px", fontWeight: "bold" }}>
          Our Team Members
        </h2>

        {teamStructure.map((dept, deptIndex) => (
          <div key={deptIndex} style={{ marginBottom: "60px" }}>
            <h3
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#000",
                marginBottom: "30px",
                textTransform: "uppercase",
              }}
            >
              {dept.department}
            </h3>

            {dept.department === "Business Department" ? (
              <>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                  {dept.members
                    .filter((member) => member.isManager)
                    .map((manager, index) => (
                      <MemberCard key={index} member={manager} size="30%" height="400px" />
                    ))}
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                  {dept.members
                    .filter((member) => !member.isManager)
                    .map((employee, index) => (
                      <MemberCard key={index} member={employee} size="22%" height="300px" />
                    ))}
                </div>
              </>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {dept.members.map((member, index) => (
                  <MemberCard
                    key={index}
                    member={member}
                    size={dept.department === "CEO" ? "30%" : "22%"}
                    height={dept.department === "CEO" ? "400px" : "300px"}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const MemberCard = ({ member, size, height }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        width: size,
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        boxShadow: hover ? "0 15px 30px rgba(0, 0, 0, 0.4)" : "0 5px 10px rgba(0, 0, 0, 0.1)",
        transform: hover ? "scale(1.1) rotate(3deg)" : "scale(1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={member.src}
        alt={member.name}
        style={{
          width: "100%",
          height: height,
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          textAlign: "left",
          color: "#fff",
          background: "rgba(0, 0, 0, 0.7)",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        <span style={{ fontSize: "28px", fontWeight: "bold" }}>{member.name}</span>
        <p style={{ fontSize: "16px", marginBottom: "0" }}>{member.role}</p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: hover ? "20px" : "-50px",
          right: "20px",
          display: "flex",
          gap: "10px",
          transition: "bottom 0.3s ease-in-out, opacity 0.3s ease-in-out",
          opacity: hover ? 1 : 0,
        }}
      >
        {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            style={{ fontSize: "24px", color: "#fff", transition: "transform 0.3s ease-in-out" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;