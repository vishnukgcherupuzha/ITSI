"use client";

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const TrendsUpdates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('trends-section');
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

  const articles = [
    {
      image: "https://www.innovatia.net/hubfs/Organizational-Knowledge-Management.png",
      readTime: "2 min read",
      title: "Organizational Knowledge Management: Take it one step at a time",
      date: "Jun 21, 2024",
      author: "Innovatia Guru",
      excerpt: "The first step to closing the gaps is to acknowledge that they exist. Streamline your organizational...",
    },
    {
      image: "https://www.innovatia.net/hubfs/Blog%20Images/Knowledge%20management%20blog-1.jpeg",
      readTime: "9 min read",
      title: "Information and Knowledge Management: Unlocking competitive advantage through content",
      date: "Jun 21, 2024",
      author: "Innovatia Guru",
      excerpt: "In today's fast-paced digital landscape, businesses are generating and consuming vast amounts of...",
    },
    {
      image: "https://www.innovatia.net/hubfs/AdobeStock_574183420_V2.jpg",
      readTime: "2 min read",
      title: "5 Reasons Why AI Success Hinges on Enterprise Information Architecture",
      date: "Jun 12, 2024",
      author: "Innovatia Guru",
      excerpt: "AI is capturing the imaginations of organizations everywhere. At its core, AI is a tool for generating...",
    }
  ];

  return (
    <div id="trends-section" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-primary mb-4">Trends and updates</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transition-all duration-700 hover:shadow-xl transform hover:-translate-y-1 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-3 py-1 m-3 rounded-full flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-blue-600" />
                  <span className="text-sm text-gray-600">{article.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{article.date}</span>
                  <span>by {article.author}</span>
                </div>

                <p className="text-gray-600 line-clamp-2">
                  {article.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="group hover:text-blue-600 p-0"
                >
                  Read More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendsUpdates;