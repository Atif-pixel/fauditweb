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
      ? { color: "#0d9488", fontWeight: "600" } // Active link style
      : { color: "#ffffff", fontWeight: "400" }; // Default link style
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(10, 16, 35, 0.8)", // Semi-transparent background
        backdropFilter: "blur(10px)", // Blur effect for transparency
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <img src={logo} alt="FundsAudit Logo" style={{ height: "40px", width: "auto" }} />
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              transition: "opacity 0.3s ease",
            }}
          >
            <Link
              to="/"
              style={{
                ...isActive("/"),
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive("/").color)}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                ...isActive("/about"),
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive("/about").color)}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                ...isActive("/contact"),
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive("/contact").color)}
            >
              Contact
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.fundsroom.fundsaudit&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#00FFCC",
                color: "#0A1023",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00CCAA";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00FFCC";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Download size={18} />
              <span>Download App</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: "none", // Hidden on desktop
              color: "#ffffff",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onClick={toggleMenu}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          style={{
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem 0",
            animation: isMenuOpen ? "slideDown 0.3s ease" : "none",
          }}
        >
          <Link
            to="/"
            style={{
              ...isActive("/"),
              textDecoration: "none",
              padding: "0.5rem 0",
              transition: "color 0.3s ease",
            }}
            onClick={toggleMenu}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
            onMouseLeave={(e) => (e.currentTarget.style.color = isActive("/").color)}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              ...isActive("/about"),
              textDecoration: "none",
              padding: "0.5rem 0",
              transition: "color 0.3s ease",
            }}
            onClick={toggleMenu}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
            onMouseLeave={(e) => (e.currentTarget.style.color = isActive("/about").color)}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              ...isActive("/contact"),
              textDecoration: "none",
              padding: "0.5rem 0",
              transition: "color 0.3s ease",
            }}
            onClick={toggleMenu}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0d9488")}
            onMouseLeave={(e) => (e.currentTarget.style.color = isActive("/contact").color)}
          >
            Contact
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.fundsroom.fundsaudit&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#00FFCC",
              color: "#0A1023",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00CCAA";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00FFCC";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Download size={18} />
            <span>Download App</span>
          </a>
        </nav>
      </div>

      {/* CSS for Animations */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            nav {
              display: none;
            }
            button {
              display: block;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;