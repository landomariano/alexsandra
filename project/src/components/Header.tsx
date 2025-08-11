import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-yellow-500">Alexsandra</span> Celiz
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">
              Contact
            </a>
            <a href="#insurance-application" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">
              Insurance Application
            </a>
            <a href="#join-us" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">
              Join Us
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span>(+63) 927 415 8603‬</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={16} />
                <span>alexsandra.m.celiz@sunlife.com.ph</span>
              </div>
            </div>
            <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Book a free Consultation
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-yellow-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;