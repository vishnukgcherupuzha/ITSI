"use client"
import { useState, useRef, useEffect } from "react"
import { Sparkles, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Glenn Skinner",
    title: "CEO Technical Services",
    image: "https://www.innovatia.net/hs-fs/hubfs/ITSI/Glenn%20Skinner.png?width=1080&height=1080&name=Glenn%20Skinner.png",
    social: {
      linkedin: "#",
      email: "mailto:glenn@example.com"
    }
  },
  {
    name: "Robert Keefe",
    title: "Leader, Technical Services",
    image: "https://www.innovatia.net/hs-fs/hubfs/ITSI/Robert%20Keefe.png?width=1080&height=1080&name=Robert%20Keefe.png",
    social: {
      linkedin: "#",
      email: "mailto:curtis@example.com"
    }
  }
]

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Floating orbs */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000 delay-300 ${
        isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`} />

      <div className="container mx-auto px-4 relative">
        {/* Team Section Header */}
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${
          isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Our Experts</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Meet The Team
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals bring years of expertise and passion to every project
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              {/* Card Content */}
              <div 
                className={`relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg group-hover:shadow-xl transition-all duration-700 overflow-hidden ${
                  isIntersecting 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:to-black/40 transition-all duration-500 ${
                    isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-auto object-center transition-all duration-700 ${
                      isIntersecting ? 'scale-100 filter-none' : 'scale-105 blur-sm'
                    }`}
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">
                    {member.title}
                  </p>

                  {/* Social Links */}
                  <div className={`flex items-center space-x-3 pt-3 transition-all duration-500 ${
                    isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                  >
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href={member.social.email}
                      className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
        >
          <Button 
            className="group rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Join Our Team</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}