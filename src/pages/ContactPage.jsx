import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

// Click handlers for redirection
const handleRedirect = (type, value) => {
  if (type === "phone") {
    window.location.href = `tel:${value}`;
  } else if (type === "email") {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${value}`, "_blank");
  } else if (type === "map") {
    window.open(value, "_blank");
  }
};


const ContactPage = () => {
  return (
    <div className="bg-gray-50 relative">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-300 via-teal-200 to-teal-100 opacity-40"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SplitText
            text="Contact Us"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-lg text-gray-700">
            Have questions or need assistance? Our team is here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Details */}
            {[
              {
                icon: <MapPin size={28} />,
                title: "Our Office",
                text: "Office No 1&2, 2nd Floor, East Street Galleria, Pune, Maharashtra 411001",
                action: () =>
                  handleRedirect(
                    "map",
                    "https://maps.google.com/?q=Office+No+1&2,+2nd+Floor,+East+Street+Galleria,+Pune,+Maharashtra+411001"
                  ),
              },
              {
                icon: <Phone size={28} />,
                title: "Phone",
                text: "+91 8421034535 / +91 8446874534",
                action: () => handleRedirect("phone", "+918421034535"),
              },
              {
                icon: <Mail size={28} />,
                title: "Email",
                text: "fundsaudit.business@gmail.com / fundsroomtech@gmail.com",
                action: () => handleRedirect("email", "fundsaudit.business@gmail.com"),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 border-l-4 border-teal-400 cursor-pointer"
                onClick={item.action}
              >
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Find Us</h2>
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7611876039277!2d73.7974655!3d18.5119908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb3c1e5614f5%3A0x74ffda8ec3f722ad!2sOffice%20No%201%262%2C%202nd%20Floor%2C%20East%20Street%20Galleria%2C%20MG%20Road%2C%20Camp%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1709041234567"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
