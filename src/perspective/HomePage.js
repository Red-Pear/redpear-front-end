import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="p-4 md:p-6 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-gray-950/70">
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
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIHN0cm9rZT0icmdiYSgwLCAwLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNjAiIHN0cm9rZT0icmdiYSgwLCAwLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIHN0cm9rZT0icmdiYSgwLCAwLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]
                          opacity-50 animate-spin-slow"></div>
        </div>

        <div className="text-center z-10 max-w-4xl">
          <div className="mb-8 animate-fade-in-up">
            <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm flex items-center hover:bg-gray-700 transition duration-300">
              <span className="mr-2 h-2 w-2 bg-blue-400 rounded-full animate-pulse"></span>
              AI-Powered Fintech
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Smart Fintech Solutions for<br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
              any Investing Dilemma
            </span>
          </h1>
          <p className="text-gray-400 mb-8 text-lg md:text-xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            We Don't Just Focus On Investments, We Consider Your Entire<br className="hidden md:inline" />
            Financial Ecosystem From Budgeting To Retirement
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Join for free
          </button>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div key={i} 
                 className="absolute bg-blue-400 rounded-full opacity-30 animate-float"
                 style={{
                   width: Math.random() * 5 + 'px',
                   height: Math.random() * 5 + 'px',
                   left: Math.random() * 100 + '%',
                   top: Math.random() * 100 + '%',
                   animationDuration: Math.random() * 3 + 2 + 's',
                   animationDelay: Math.random() * 2 + 's'
                 }}>
            </div>
          ))}
        </div>

        {/* Bottom UI Elements */}
        {/* <div className="absolute bottom-24 md:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm hover:bg-gray-700 transition duration-300">L</button>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm hover:bg-gray-700 transition duration-300">B</button>
          <button className="w-12 h-6 md:w-16 md:h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs md:text-sm hover:bg-blue-800 transition duration-300">SI</button>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm hover:bg-gray-700 transition duration-300">G</button>
          <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs md:text-sm hover:bg-gray-700 transition duration-300">Y</button>
        </div>
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition duration-300 animate-bounce">
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />
        </button> */}
      </main>

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default HomePage;