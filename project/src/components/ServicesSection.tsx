import React from 'react';
import { Shield, PiggyBank, TrendingUp, Users, Heart, FileText } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Comprehensive life insurance policies to protect your family\'s financial future.',
      features: ['Term Life', 'Whole Life', 'Universal Life']
    },
    {
      icon: PiggyBank,
      title: 'Retirement Planning',
      description: 'Build a secure retirement with personalized investment strategies and savings plans.',
      features: ['RRSP', 'TFSA', 'Pension Plans']
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Complete health and dental coverage for individuals, families, and groups.',
      features: ['Medical', 'Dental', 'Vision Care']
    },
    {
      icon: TrendingUp,
      title: 'Investment Solutions',
      description: 'Grow your wealth with diversified investment portfolios and mutual funds.',
      features: ['Mutual Funds', 'GICs', 'Segregated Funds']
    },
    {
      icon: Users,
      title: 'Group Benefits',
      description: 'Comprehensive employee benefit programs for businesses of all sizes.',
      features: ['Employee Plans', 'Disability', 'Critical Illness']
    },
    {
      icon: FileText,
      title: 'Estate Planning',
      description: 'Protect and transfer your wealth with strategic estate planning solutions.',
      features: ['Wills', 'Trusts', 'Tax Planning']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From life insurance to retirement planning, we offer a complete range of financial products 
            and services to help you achieve your goals.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 rounded-lg p-3 group-hover:bg-yellow-600 transition-colors duration-200">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-sm lg:text-base text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-sm lg:text-base text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 group-hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;