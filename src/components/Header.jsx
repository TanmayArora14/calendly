import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <img
          src="https://img.freepik.com/premium-vector/letter-c-colorful-gradient-logo-design\_161396-958.jpg"
          alt="Calendly Logo"
          className="h-8 mr-1 text-blue-500"
        />
        <h1 className="italic h-8 mr-4 text-blue-500">Calendly</h1>
        <h1 className="text-2xl font-semibold">Help Center</h1>
      </div>

      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-500">
          Developers
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500">
          Report Abuse
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500">
          Contact Us
        </a>
        <div className="flex items-center space-x-2">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Log In
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>
      </nav>

      <div className="md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-600 hover:text-blue-500"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg">
          <div className="px-4 py-3 border-b">
            <a href="#" className="block text-gray-600 hover:text-blue-500">
              Developers
            </a>
          </div>
          <div className="px-4 py-3 border-b">
            <a href="#" className="block text-gray-600 hover:text-blue-500">
              Report Abuse
            </a>
          </div>
          <div className="px-4 py-3 border-b">
            <a href="#" className="block text-gray-600 hover:text-blue-500">
              Contact Us
            </a>
          </div>
          <div className="px-4 py-3">
            <a href="#" className="block text-gray-600 hover:text-blue-500">
              Log In
            </a>
          </div>
          <div className="px-4 py-3">
            <a
              href="#"
              className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
