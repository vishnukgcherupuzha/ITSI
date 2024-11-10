"use client";

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  ArrowLeftRight, 
  Target, 
  Users, 
  LineChart,
  TrendingUp
} from "lucide-react";

const FeaturesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('features-showcase');
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
    {
      icon: <ArrowLeftRight className="w-8 h-8" />,
      title: "End-to-end",
      color: "bg-[#4a5894]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Bespoke",
      color: "bg-[#69b03c]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable",
      color: "bg-[#009999]"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Data Driven",
      color: "bg-[#1a3b8e]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Forward Thinking",
      color: "bg-[#4a5894]"
    }
  ];

  const clients = [
    {
      name: "RBC Royal Bank",
      logo: "https://www.innovatia.net/hs-fs/hubfs/Client%20Logos/rbc-royal-bank-logo.jpg?width=1303&height=850&name=rbc-royal-bank-logo.jpg", // Replace with actual path
      width: "w-32"
    },
    {
      name: "Cisco",
      logo: "https://www.innovatia.net/hs-fs/hubfs/ITSI%20Partners/Cisco%20Colour%20logo.jpg?width=1810&height=1180&name=Cisco%20Colour%20logo.jpg", // Replace with actual path
      width: "w-28"
    },
    {
      name: "Mitel",
      logo: "https://www.innovatia.net/hs-fs/hubfs/ITSI%20Partners/Mitel%20Logo.png?width=414&height=202&name=Mitel%20Logo.png", // Replace with actual path
      width: "w-32"
    },
    {
      name: "Cenovus Energy",
      logo: "https://www.innovatia.net/hs-fs/hubfs/Client%20Logos/cenovus_logo-1.jpg?width=224&height=100&name=cenovus_logo-1.jpg", // Replace with actual path
      width: "w-36"
    }
  ];

  return (
    <div id="features-showcase" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1/2 bg-grid-gray-100/25 transform -skew-y-6" />
      </div>

      <div className="container mx-auto px-4 space-y-20">
        {/* Features Section */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-6 space-y-4 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full ${feature.color} text-white flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <div className="h-16 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all hover:scale-110">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`${client.width} h-auto object-contain`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesShowcase;