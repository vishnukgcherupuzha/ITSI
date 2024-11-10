"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    description: "Let's talk - your needs, our expertise. Schedule a conversation today for tailored solutions.",
    gradient: "from-blue-500/20 via-blue-400/20 to-blue-300/20"
  },
  {
    number: "2",
    title: "Evaluation and recommendation",
    description: "Your vision, our solutions. After your consultation, we customize recommendations for you.",
    gradient: "from-purple-500/20 via-purple-400/20 to-purple-300/20"
  },
  {
    number: "3",
    title: "Proposal and pricing",
    description: "Your roadmap unveiled. Our detailed proposal offers clear services, timelines, and pricing.",
    gradient: "from-pink-500/20 via-pink-400/20 to-pink-300/20"
  },
  {
    number: "4",
    title: "Collaboration and implementation",
    description: "Let's begin your journey. Seamless agreements and expert guidance for successful implementation.",
    gradient: "from-emerald-500/20 via-emerald-400/20 to-emerald-300/20"
  }
]

export default function ApproachProcess() {
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
        {/* Header */}
        <div className={`text-center space-y-6 mb-20 transition-all duration-1000 ${
          isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Our Approach
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured methodology designed to deliver exceptional results for your business
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 transition-all duration-1000 delay-500 ${
            isIntersecting 
              ? 'bg-gradient-to-b from-primary/20 via-primary/10 to-transparent scale-y-100 origin-top'
              : 'bg-gradient-to-b from-transparent via-transparent to-transparent scale-y-0'
          }`} />

          {/* Steps Grid */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Number Circle */}
                <div className={`absolute left-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-700 ${
                  isIntersecting 
                    ? 'translate-x-0 opacity-100 rotate-0' 
                    : '-translate-x-10 opacity-0 -rotate-45'
                }`}
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
                >
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className={`ml-24 relative transition-all duration-700 ${
                  isIntersecting 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <span>Get in Touch</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}