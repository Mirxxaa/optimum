import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo/Original_logo.png";
import { Link as RouterLink } from "react-router-dom"; // Renamed to avoid confusion

const NavigationBar = ({ showNavbar = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en"); // 'en' for English, 'ar' for Arabic
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu links with proper routes
  const menuLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Services", url: "/services" },
    { name: "Careers", url: "/careers" },
    { name: "Contact Us", url: "/contact" },
  ];

  // Language options
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
  ];

  // Handle language change
  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  // If showNavbar is false, don't render anything
  if (!showNavbar) return null;

  return (
    <>
      {/* Main navigation bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-18 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "backdrop-blur-sm shadow-md" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="flex items-center w-48">
          <RouterLink to="/">
            <img src={Logo} alt="Optimum Logo" />
          </RouterLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <RouterLink
              key={link.name}
              to={link.url}
              className={`font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-blue-700"
                  : "text-black hover:text-blue-700"
              }`}
            >
              {link.name}
            </RouterLink>
          ))}
        </div>

        {/* Language Selector */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className={`flex items-center space-x-1 font-medium cursor-pointer ${
              scrolled
                ? "text-gray-800 hover:text-blue-700"
                : "text-black hover:text-blue-700"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              ></path>
            </svg>
            <span>{language === "en" ? "EN" : "AR"}</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                isLangMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {/* Language dropdown menu */}
          <AnimatePresence>
            {isLangMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-lg z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 flex items-center justify-between"
                  >
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </motion.svg>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex flex-col space-y-1.5 focus:outline-none text-gray-800`}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current"
          ></motion.span>
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-current"
          ></motion.span>
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current"
          ></motion.span>
        </button>
      </motion.nav>

      {/* Mobile sidebar menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 right-0 h-full w-4/5 bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="px-6 py-4 flex-1">
                <div className="flex flex-col space-y-6">
                  {menuLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <RouterLink
                        to={link.url}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-800 hover:text-blue-700 font-medium text-lg"
                      >
                        {link.name}
                      </RouterLink>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Select Language</p>
                <div className="flex flex-col space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100"
                    >
                      <span className="text-gray-800">{lang.name}</span>
                      {language === lang.code && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </motion.svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
