"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sparkles, BarChart2, Boxes } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Innovation at its finest</span>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              Professional Services
            </h1>
            
            <p className="text-2xl font-medium text-secondary/90">
              Bringing your vision to life with our specialized professional services
            </p>
            
            <p className="text-gray-600 text-lg">
              From initial planning to seamless implementation, our seasoned consultants ensure optimal solutions that boost productivity.
            </p>
            
            <div className="flex gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all">
                Get in Touch
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 h-auto rounded-full border-2">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative aspect-square">
              {/* Decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-72 h-72 border-4 border-secondary/20 rounded-full animate-spin-slow" />
                <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-primary/20 rounded-full animate-spin-slow-reverse" />
              </div>
              
              {/* Main image container */}
              <div className="absolute inset-8 bg-white rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <img
                  src="https://www.innovatia.net/hubfs/Professional_Services_V2.jpg"
                  alt="Professional Services"
                  className="w-full h-full object-cover p-20"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-full shadow-lg animate-bounce">
                <BarChart2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -left-4 bottom-1/4 bg-white p-4 rounded-full shadow-lg animate-bounce delay-300">
                <Boxes className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;