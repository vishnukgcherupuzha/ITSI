"use client"
import { useState, useEffect, useRef } from "react"
import { ChartBarIcon, CogIcon, Users, RocketIcon, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: CogIcon,
    title: "Seamless Implementation",
    description: "From initial planning to final deployment, our streamlined process ensures smooth execution.",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: Users,
    title: "Seasoned Consultants",
    description: "Our certified team brings extensive experience and industry expertise to every project.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: ChartBarIcon,
    title: "Measurable Results",
    description: "Drive growth with data-backed solutions and quantifiable performance metrics.",
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    icon: RocketIcon,
    title: "Industry Best Practices",
    description: "Leverage cutting-edge methodologies and proven strategies for optimal outcomes.",
    color: "from-emerald-500/20 to-emerald-600/20"
  }
]

export default function WhyChooseUs() {
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
      <div className={`absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      {/* Floating orbs with enhanced animations */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
        isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`} />
      <div className={`absolute top-1/2 left-1/3 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
        isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`} />

      <div className="container mx-auto px-4 relative">
        {/* Header with fade-in animation */}
        <div className={`max-w-3xl mx-auto text-center mb-16 space-y-6 transition-all duration-1000 ${
          isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          We understand that your business is committed to delivering exceptional services to your customers.
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            As a trusted partner, we specialize in complementing your existing cloud phone services by providing seamless solutions and support that will elevate your customer experience to new heights. ITSI specializes in supporting service implementation and porting.
          </p>
        </div>

        {/* Features Grid with staggered animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-200/50 h-full z-10 ${
                  isIntersecting 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-4 transition-colors duration-300 group-hover:text-secondary">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Hover Effects */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Stats Section with fade-in animation */}
        <div className={`mt-24 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
          isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '1000ms' }}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with fade-in animation */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <Button 
            variant="outline"
            className="group rounded-full text-lg px-8 py-6 h-auto border-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span>Learn more about our methodology</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}