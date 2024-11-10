"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Cpu, 
  GitMerge, 
  LineChart,
  Settings,
  RefreshCw,
  HeadphonesIcon
} from "lucide-react";

const TechnicalServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('technical-services');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <Cpu />, title: "Implementation", desc: "Expert system implementation" },
    { icon: <GitMerge />, title: "Migration", desc: "Seamless data migration" },
    { icon: <Settings />, title: "Management", desc: "Ongoing system management" },
    { icon: <LineChart />, title: "Support", desc: "24/7 technical support" }
  ];

  return (
    <div id="technical-services" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div 
          className={`absolute right-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl 
            transition-all duration-1000 transform
            ${isVisible ? 'opacity-100 translate-x-1/4' : 'opacity-0 translate-x-full'}`}
        />
        <div 
          className={`absolute left-0 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-3xl 
            transition-all duration-1000 delay-300 transform
            ${isVisible ? 'opacity-100 -translate-x-1/4' : 'opacity-0 -translate-x-full'}`}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600">
                <HeadphonesIcon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">24/7 Support Available</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Technical Services
              </h2>

              <p className="text-xl text-gray-600">
                Our Technical Solutions team can deliver 1:1 support on specific projects, implementation, 
                migration, and on-going management with right-shore skilled staff ready to help you improve 
                customer satisfaction and make the most out of your software solutions.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </Card>
              ))}
            </div>

            <Button 
              size="lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Rotating circles */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 border-2 border-dashed border-green-200 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            </div>

            {/* Main image container */}
            <div className="relative rounded-full overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-500/20 mix-blend-multiply" />
              <img
                src="https://www.innovatia.net/hs-fs/hubfs/Home%20Page%20-%20Technical%20Services.png?width=1080&height=1080&name=Home%20Page%20-%20Technical%20Services.png"
                alt="Technical Support"
                className="w-full h-full object-cover"
              />
              
              {/* Circular border overlay */}
              <div className="absolute inset-0 border-[32px] border-teal-500/10 rounded-full" />
            </div>

            {/* Floating indicators */}
            <div className="absolute -right-4 top-1/4 animate-float">
              <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServices;