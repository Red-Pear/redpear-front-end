import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* <img src="/api/placeholder/120/40" alt="Splurge Pay Logo" className="h-6 md:h-8" /> */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300">Solutions</a>
            <div className="relative group">
              <a href="#" className="hover:text-blue-400 flex items-center transition duration-300">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>
            <a href="#" className="hover:text-blue-400 transition duration-300">Pricing</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Blog</a>
            <a href="#" className="flex items-center bg-blue-900 bg-opacity-30 text-blue-400 px-3 py-1 rounded-full">
              <span className="mr-2 h-2 w-2 bg-blue-400 rounded-full"></span>
              Plus
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition duration-300">
            JOIN US AT X
          </button>
          <button className="hidden md:block px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
            GET STARTED
          </button>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <a href="#" className="block py-2 hover:text-blue-400 transition duration-300">Solutions</a>
          <a href="#" className="block py-2 hover:text-blue-400 transition duration-300">Product</a>
          <a href="#" className="block py-2 hover:text-blue-400 transition duration-300">Pricing</a>
          <a href="#" className="block py-2 hover:text-blue-400 transition duration-300">Blog</a>
          <a href="#" className="block py-2 text-blue-400">Plus</a>
          <button className="w-full mt-4 px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition duration-300">
            JOIN US AT X
          </button>
          <button className="w-full mt-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
            GET STARTED
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] relative overflow-hidden px-4 py-12 md:py-0">
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue geometric shapes - simplified representation */}
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-tr from-blue-900/20 to-transparent transform skew-y-6"></div>
          <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-tl from-blue-900/20 to-transparent transform -skew-y-6"></div>
        </div>

        <div className="text-center z-10 max-w-4xl">
          <div className="mb-8">
            <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm flex items-center hover:bg-gray-700 transition duration-300">
              {/* <img src="/api/placeholder/20/20" alt="AI Icon" className="mr-2 h-5 w-5" />
              Meets Fintech Intelligence
              <ChevronDown className="ml-2 h-4 w-4" /> */}
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Smart Fintech Solutions for<br className="hidden md:inline" />any Investing Dilemma
          </h1>
          <p className="text-gray-400 mb-8 text-lg md:text-xl">
            We Don't Just Focus On Investments, We Consider Your Entire<br className="hidden md:inline" />
            Financial Ecosystem From Budgeting To Retirement
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Join for free
          </button>
        </div>

        {/* Bottom UI Elements */}
        <div className="absolute bottom-24 md:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4">
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm">L</button>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm">B</button>
          <button className="w-12 h-6 md:w-16 md:h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs md:text-sm">SI</button>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm">G</button>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm">Y</button>
        </div>
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </main>
    </div>
  );
};

export default HomePage;