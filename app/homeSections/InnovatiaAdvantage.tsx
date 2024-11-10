"use client";

import { useEffect, useState, useRef } from 'react';
import { Settings2, Users, Clock } from "lucide-react";

const InnovatiaAdvantage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, professionals: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 50;
      const yearsIncrement = 20 / steps;
      const professionalsIncrement = 400 / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        if (currentStep === steps) {
          clearInterval(timer);
          setCounts({ years: 20, professionals: 400 });
          return;
        }

        setCounts(prev => ({
          years: Math.min(Math.ceil(prev.years + yearsIncrement), 20),
          professionals: Math.min(Math.ceil(prev.professionals + professionalsIncrement), 400)
        }));

        currentStep++;
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const advantages = [
    {
      icon: <Clock className="w-12 h-12" />,
      value: `${counts.years}+`,
      label: "Years' Experience",
      delay: "delay-0"
    },
    {
      icon: <Users className="w-12 h-12" />,
      value: `${counts.professionals}+`,
      label: "Professionals Worldwide",
      delay: "delay-300"
    },
    {
      icon: <Settings2 className="w-12 h-12" />,
      value: "",
      label: "Customized Solutions",
      delay: "delay-600"
    }
  ];

  return (
    <div className="relative bg-teal-600 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-teal-700 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Innovatia Advantage
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
        </div>

        {/* Advantages Grid */}
        <div 
          ref={sectionRef}
          className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${advantage.delay} ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform -translate-y-1/4" />
                <div className="relative w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  {advantage.icon}
                </div>
              </div>

              {/* Value */}
              <div className="text-5xl font-bold text-white mb-2 transition-all duration-300 hover:scale-110">
                {advantage.value}
              </div>

              {/* Label */}
              <div className="text-xl text-white/90">
                {advantage.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovatiaAdvantage;