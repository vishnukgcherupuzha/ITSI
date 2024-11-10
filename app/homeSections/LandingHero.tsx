"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles 
} from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className={`space-y-8 relative z-10 transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Innovation at its finest</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                End-To-End Solutions
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-medium text-green-600">
                To Accelerate Business Performance
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl">
                Are you having trouble connecting your information, people, and systems?
              </p>
              
              <p className="text-gray-600">
                Tap into our knowledge-based resources and service. We pride ourselves on delivering exceptional customer service by developing customized solutions to improve our clients workflows and efficiency helping them achieve their short and long term goals.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white group px-8"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column - Circular Design */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="aspect-square relative">
              {/* Outer rotating circles */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-200/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-green-200/30 animate-spin-slow-reverse" />
              
              {/* Central circle with logo */}
              <div className={`absolute inset-12 rounded-full overflow-hidden transition-all duration-1000 ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-green-600 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://www.innovatia.net/hubfs/Banners_Homepage.png" 
                    alt="Logo" 
                    className="w-full h-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;