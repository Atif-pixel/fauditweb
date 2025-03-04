import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import logo from "../assets/FundsAudit.jpg"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-teal-600 font-medium"
      : "text-gray-700 hover:text-teal-600";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="FundsAudit Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive("/")} transition-colors duration-300`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive("/about")} transition-colors duration-300`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive("/contact")} transition-colors duration-300`}>
              Contact
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.fundsroom.fundsaudit&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors duration-300"
            >
              <Download size={18} />
              <span>Download App</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className={`block py-2 ${isActive("/")}`} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className={`block py-2 ${isActive("/about")}`} onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className={`block py-2 ${isActive("/contact")}`} onClick={toggleMenu}>
              Contact
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.fundsroom.fundsaudit&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 w-fit"
            >
              <Download size={18} />
              <span>Download App</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
