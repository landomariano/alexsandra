import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                <span className="text-yellow-400">Alexsandra</span> Celiz
              </h3>
              <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                Your trusted partner for comprehensive financial planning and life insurance solutions. 
                Securing your future, one client at a time.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400" />
                <span className="text-sm lg:text-base text-gray-300">(+63) 927 415 8603‬</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400" />
                <span className="text-sm lg:text-base text-gray-300">alexsandra.m.celiz@sunlife.com.ph</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <span className="text-sm lg:text-base text-gray-300">Sun Life Financial Office <br /> 5th Floor, Tower 1, <br /> Double Dragon Plaza, EDSA <br /> corner Macapagal Avenue, <br /> Bay Area, Pasay City District</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Life Insurance</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Retirement Planning</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Health Benefits</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Investment Solutions</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Group Benefits</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Estate Planning</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">About Me</a></li>
              <li><a href="#contact" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#insurance-application" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Insurance Application</a></li>
              <li><a href="#join-us" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Join Us</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Resources</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-6">Stay Connected</h4>
            
            <div className="flex space-x-4 mb-6 lg:mb-8">
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-lg transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
            
            <div>
              <h5 className="text-xs lg:text-sm font-semibold text-gray-300 mb-3">Newsletter</h5>
              <p className="text-xs lg:text-sm text-gray-400 mb-4">Get financial tips and updates delivered to your inbox.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-2 lg:px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400 text-xs lg:text-sm"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 px-3 lg:px-4 py-2 rounded-r-lg transition-colors duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs lg:text-sm">
              © 2024 Alexsandra Celiz. All rights reserved.
            </p>
            <div className="flex space-x-4 lg:space-x-6 text-xs lg:text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;