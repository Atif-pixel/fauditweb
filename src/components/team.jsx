import React from "react";
import johnDoe from "../assets/john_doe.png";
import janeSmith from "../assets/jane_smith.png";
import robertWilson from "../assets/robert_wilson.png";
import oliviaMartinez from "../assets/olivia_martinez.png";
import michaelJohnson from "../assets/michael_johnson.png";
import emmaWilson from "../assets/emma_wilson.png";
import danielBrown from "../assets/daniel_brown.png";
import davidLee from "../assets/david_lee.png";
import sophiaCarter from "../assets/sophia_carter.png";
import liamHarris from "../assets/liam_harris.png";

const teamData = [
  {
    title: "Business Department",
    members: [
      { name: "Jane Smith", role: "Head of Business Development", img: janeSmith },
      { name: "Robert Wilson", role: "Business Strategist", img: robertWilson },
      { name: "Olivia Martinez", role: "Marketing Head", img: oliviaMartinez },
    ],
  },
  {
    title: "Tech Department",
    members: [
      { name: "Michael Johnson", role: "Chief Technology Officer", img: michaelJohnson },
      { name: "Emma Wilson", role: "Tech Lead", img: emmaWilson },
      { name: "Daniel Brown", role: "Software Engineer", img: danielBrown },
    ],
  },
  {
    title: "A&F Department",
    members: [
      { name: "David Lee", role: "Head of A&F", img: davidLee },
      { name: "Sophia Carter", role: "Financial Analyst", img: sophiaCarter },
      { name: "Liam Harris", role: "Account Manager", img: liamHarris },
    ],
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-gradient-teal">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-12 fade-in">Our Team</h2>

        {/* CEO Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-6 text-teal-600">CEO & Co-Founder</h3>
          <div className="flex justify-center">
            <div className="card w-80 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500">
              <img
                src={johnDoe}
                alt="CEO"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-teal-600 transition-colors duration-300">John Doe</h3>
                <p className="text-gray-600">Leading with innovation and excellence for over 15 years.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments */}
        {teamData.map((dept, deptIndex) => (
          <div key={deptIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-teal-600">{dept.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dept.members.map((member, index) => (
                <div key={index} className="card overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 hover:text-teal-600">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
