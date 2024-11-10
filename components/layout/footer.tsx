"use client"
import { Facebook, Twitter, Linkedin, Youtube, Phone, MapPin, ArrowUpCircle } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-cyan-800 to-blue-950 text-white overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Innovatia Technical Services Inc.</h3>
              <p className="text-white/80">
                Professional services and innovative solutions for your business needs.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <div>
                  <p className="text-sm text-white/60">Head Office:</p>
                  <a href="tel:1-506-640-4000" className="hover:text-white/80 transition-colors">1-506-640-4000</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <div>
                  <p className="text-sm text-white/60">North America:</p>
                  <a href="tel:1-800-363-3358" className="hover:text-white/80 transition-colors">1-800-363-3358</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <div>
                  <p className="text-sm text-white/60">International:</p>
                  <a href="tel:001-800-363-3358" className="hover:text-white/80 transition-colors">001-800-363-3358</a>
                </div>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-xl font-bold mb-6">Offices</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 mt-1" />
                <div>
                  <p className="font-medium">Saint John, New Brunswick</p>
                  <p className="text-sm text-white/60">Canada</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 mt-1" />
                <div>
                  <p className="font-medium">Calgary, Alberta</p>
                  <p className="text-sm text-white/60">Canada</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 mt-1" />
                <div>
                  <p className="font-medium">Bangalore</p>
                  <p className="text-sm text-white/60">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block hover:text-white/80 transition-colors">
                Inquiry form
              </a>
              <a href="#" className="block hover:text-white/80 transition-colors">
                Join the team
              </a>
              <a href="#" className="block hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-white/80 transition-colors">
                User Agreement
              </a>
              <a href="#" className="block hover:text-white/80 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2024 Innovatia Inc. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </footer>
  )
}