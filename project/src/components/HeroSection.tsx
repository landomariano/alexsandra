import React from 'react';
import { ArrowRight, Shield, Award, Users, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-amber-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Secure Your{' '}
                <span className="text-yellow-500 relative">
                  Future
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-30"></div>
                </span>
                <br />
                with Expert{' '}
                <span className="text-yellow-600">
                  Financial
                </span>
                <br />
                Guidance
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Get personalized financial advice and comprehensive life insurance solutions 
                tailored to your unique needs and goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-0">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 sm:px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center group text-sm sm:text-base">
                Start Free Assessment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold py-4 px-6 sm:px-8 rounded-full transition-all duration-200 flex items-center justify-center text-sm sm:text-base">
                Learn More
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-600">500+</div>
                <div className="text-xs lg:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-600">15+</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-600">24/7</div>
                <div className="text-xs lg:text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-xs lg:text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Professional Image with Badges */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <img 
                  src="assets/Alexsandra.jpg"
                  alt="Professional Insurance Agent"
                  className="w-full h-[350px] lg:h-[500px] object-cover object-center rounded-2xl"
                />
                
                {/* Floating Badges */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 animate-float">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Shield className="text-yellow-500" size={16} />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 hidden sm:inline">Certified Financial Planner</span>
                    <span className="text-xs font-semibold text-gray-700 sm:hidden">CFP</span>
                  </div>
                </div>
                
                <div className="absolute top-1/4 -left-3 sm:-left-6 bg-white rounded-lg shadow-lg p-2 sm:p-3 animate-float-delayed">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Award className="text-amber-500" size={16} />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 hidden sm:inline">Licensed Insurance Advisor</span>
                    <span className="text-xs font-semibold text-gray-700 sm:hidden">Licensed</span>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 -right-3 sm:-right-6 bg-white rounded-lg shadow-lg p-2 sm:p-3 animate-float">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Users className="text-yellow-600" size={16} />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">Sun Life Partner</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 sm:p-3 animate-float-delayed">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <TrendingUp className="text-green-500" size={16} />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 hidden sm:inline">Investment Specialist</span>
                    <span className="text-xs font-semibold text-gray-700 sm:hidden">Investments</span>
                  </div>
                </div>
              </div>
              
              {/* Name Badge */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-6 text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Alexsandra Celiz</h3>
                <p className="text-yellow-600 font-semibold text-sm sm:text-base">Sun Life Financial Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-4 lg:left-10 w-16 lg:w-32 h-16 lg:h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-4 lg:right-10 w-12 lg:w-24 h-12 lg:h-24 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;