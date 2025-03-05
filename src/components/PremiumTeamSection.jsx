import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const teamSections = [
  {
    title: "CEO",
    members: [
      { name: "Masroor Khan", role: "CEO", img:"src/assets/staff/masroor_sir.jpg", linkedin: "https://linkedin.com/in/masroor", description: "Leading with innovation and excellence for over several years." },
    ],
  },
  {
    title: "Business Department",
    members: [
      { name: "Pooja Shedge", role: "Business Head", img: "src/assets/staff/pooja_mam.png", linkedin: "https://linkedin.com/in/pooja", description: "Head of Business Development" },
      { name: "Adarsh", role: "Business Strategist", img: "src/assets/staff/adarsh_sir.png", linkedin: "https://linkedin.com/in/adarsh", description: "Business Strategist" },
      { name: "Prashant", role: "Marketing Head", img: "src/assets/staff/prashant_sir.png", linkedin: "https://linkedin.com/in/prashant", description: "Marketing Head" },
      { name: "Abhishek", role: "", img: "", linkedin: "https://linkedin.com/in/abhishek", description: "Market analysis & strategy expert" },
    ],
  },
  {
    title: "Tech Department",
    members: [
      { name: "Arya Mehta", role: "Jr SDE", img: "src/assets/staff/arya_sir.jpg", linkedin: "https://linkedin.com/in/arya", description: "Jr SDE" },
      { name: "Nikita Watpal", role: "Jr SDE", img: "src/assets/staff/nikita_mam.jpg", linkedin: "https://linkedin.com/in/nikita", description: "Jr SDE" },
    ],
  },
  {
    title: "A&F Department",
    members: [
      { name: "Ittika", role: "Head of A&F", img: "src/assets/staff/ittika_mam.png", linkedin: "https://linkedin.com/in/ittika", description: "Head of A&F" },
      { name: "Moiz", role: "Financial Analyst", img: "src/assets/staff/moiz_sir.jpg", linkedin: "https://linkedin.com/in/moiz", description: "Financial Analyst" },
    ],
  },
];

export default function PremiumTeamSection() {
  return (
    <section id="team" className="py-16 bg-gradient-to-b from-teal-100 to-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12 tracking-wide">
          Meet The Team
        </h2>

        {teamSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-6">{section.title}</h3>

            <div className="flex justify-start gap-6 flex-wrap">
              {section.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center w-40"
                >
                  <div className="relative w-40 h-48 bg-white rounded-lg shadow-lg overflow-hidden">
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 text-blue-700 bg-white p-1 rounded-full shadow-lg">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                  <h4 className="mt-3 text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
