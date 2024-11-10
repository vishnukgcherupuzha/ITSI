"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  LayoutPanelLeft, 
  BookOpen, 
  Users, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const ContentServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('content-services');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Strategy",
      description: "Develop effective content strategies aligned with your business goals"
    },
    {
      icon: <LayoutPanelLeft className="w-6 h-6" />,
      title: "Information Architecture",
      description: "Design intuitive information structures for optimal user experience"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Documentation Services",
      description: "Comprehensive documentation solutions for your products and services"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Learning Services",
      description: "User-centric learning solutions for effective knowledge transfer"
    }
  ];

  return (
    <div id="content-services" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3  rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-green-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -left-8 -top-8 w-full h-full rounded-full border-[16px] border-green-500/10" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://www.innovatia.net/hs-fs/hubfs/Home%20Page%20Content%20Solutions.png?width=800&height=800&name=Home%20Page%20Content%20Solutions.png"
                  alt="Content Services"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating achievement cards */}
              <Card className="absolute -right-8 top-8 p-4 bg-white/90 backdrop-blur-sm border-none shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">User-Centric</p>
                    <p className="text-sm text-gray-600">Approach</p>
                  </div>
                </div>
              </Card>

              <Card className="absolute -left-8 bottom-8 p-4 bg-white/90 backdrop-blur-sm border-none shadow-lg animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">Expert Teams</p>
                    <p className="text-sm text-gray-600">Ready to Help</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Content Services
              </h2>
              <p className="text-xl text-gray-600">
                Our Content Solutions teams are ready to take information, content, and context to the next level.
              </p>
            </div>

            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className={`p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              size="lg"
              className="group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentServices;