import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/FundsAudit.jpg";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src={logo} alt="FundsAudit Logo" className="h-12" />
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Providing innovative auditing and financial solutions for businesses and individuals since 2020.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/company/fundsaudit/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/funds_audit/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@FundsAudit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start ml-6 md:ml-0">
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3">
                <MapPin size={24} className="text-teal-400 flex-shrink-0 mt-1 md:mt-0" />
                <span className="text-gray-400 leading-relaxed">
                  Office No 1&2, 2nd Floor, East Street Galleria, MG Road, Camp<br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3">
                <Phone size={24} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">+91 8421034535<br />+91 8446874534</span>
              </li>
              <li className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3">
                <Mail size={24} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">fundsaudit.business@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FundsAudit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;