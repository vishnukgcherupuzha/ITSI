"use client"
import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { MessagesSquare, Mail, User, ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    communications: false
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      communications: checked
    }))
  }

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative background elements */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl transition-all duration-1000 ${
          isIntersecting ? 'opacity-70 translate-x-0' : 'opacity-0 -translate-x-20'
        }`} />
        <div className={`absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl transition-all duration-1000 delay-300 ${
          isIntersecting ? 'opacity-70 translate-x-0' : 'opacity-0 translate-x-20'
        }`} />
        <div className={`absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl transition-all duration-1000 delay-500 ${
          isIntersecting ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-20'
        }`} />
        <div className={`absolute -bottom-8 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl transition-all duration-1000 delay-700 ${
          isIntersecting ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-20'
        }`} />
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`} />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isIntersecting ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">
                What can we help you with?
              </h2>
              <p className="text-lg text-gray-600">
                Let's discuss how we can transform your business together. Our team is ready to help you achieve your goals.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              <div className={`p-6 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 border border-gray-100/20 shadow-lg ${
                isIntersecting ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email Us</h3>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 border border-gray-100/20 shadow-lg ${
                isIntersecting ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <MessagesSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Live Chat</h3>
                    <p className="text-gray-600">Available 9 AM - 5 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {/* Form Card */}
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields with staggered animations */}
                {[
                  {
                    component: (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="email">
                          Email<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="pl-10 bg-white/50 focus:bg-white transition-colors"
                            required
                          />
                          <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    ),
                    delay: 500
                  },
                  {
                    component: (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="name">
                          First Name
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John"
                            className="pl-10 bg-white/50 focus:bg-white transition-colors"
                          />
                          <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    ),
                    delay: 600
                  },
                  {
                    component: (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700" htmlFor="message">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="min-h-[120px] bg-white/50 focus:bg-white transition-colors"
                        />
                      </div>
                    ),
                    delay: 700
                  }
                ].map((field, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${field.delay}ms` }}
                  >
                    {field.component}
                  </div>
                ))}

                {/* Checkbox and Privacy Policy with animation */}
                <div className={`space-y-4 transition-all duration-500 ${
                  isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
                >
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="communications"
                      checked={formData.communications}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="communications"
                      className="text-sm text-gray-600 leading-tight"
                    >
                      I agree to receive other communications from Innovatia.
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <p className="text-sm text-gray-500">
                    Thank you for connecting! We respect your information and will handle it in accordance with our{' '}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>.
                  </p>
                </div>

                {/* Submit Button with animation */}
                <div className={`transition-all duration-500 ${
                  isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <span className="flex items-center justify-center">
                      Submit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}