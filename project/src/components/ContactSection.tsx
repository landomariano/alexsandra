import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today for a personalized consultation and take the first step 
            towards financial security.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-lg p-2">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-sm lg:text-base text-gray-600">(+63) 927 415 8603‬</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-lg p-2">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-sm lg:text-base text-gray-600">alexsandra.m.celiz@sunlife.com.ph</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-lg p-2">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-sm lg:text-base text-gray-600">Sun Life Financial Office - 5th Floor, Double Dragon Plaza, EDSA corner Macapagal Avenue, Pasay City </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-lg p-2">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-sm lg:text-base text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg text-center">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-6">Schedule a no-obligation meeting to discuss your financial goals.</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 lg:px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm lg:text-base">
                Book Now
              </button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="john.doe@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="life-insurance">Life Insurance</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="health">Health Benefits</option>
                  <option value="investments">Investment Solutions</option>
                  <option value="group">Group Benefits</option>
                  <option value="estate">Estate Planning</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your financial goals and how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm lg:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;