"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isTechnicalOpen, setIsTechnicalOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const contentServices = [
    { title: "Content Strategy", href: "/content-strategy" },
    { title: "Information Architecture", href: "/information-architecture" },
    { title: "Documentation Services", href: "/documentation-services" },
    { title: "Learning Services", href: "/learning-services" },
    { title: "AI Services", href: "/ai-services" },
  ];

  const technicalServices = [
    { title: "Professional Services", href: "/professional-services" },
    { title: "Cloud Services", href: "/cloud-services" },
    { title: "Business Process Outsourcing (BPO)", href: "/bpo" },
  ];

  const resources = [
    { title: "Blog", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "News", href: "/news" },
  ];

  const isActive = (path: string) => pathname === path;

  // Custom dropdown component to handle hover interactions
  const Dropdown = ({ 
    items, 
    title, 
    isOpen, 
    setIsOpen 
  }: { 
    items: Array<{ title: string; href: string }>;
    title: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  }) => {
    const timeoutRef = useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // Small delay before closing
    };

    return (
      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Trigger */}
        <div className="flex items-center space-x-1 text-sm font-medium cursor-pointer py-2">
          <span className={`transition-colors duration-200 ${isOpen ? "text-secondary" : "text-gray-600"} hover:text-secondary`}>
            {title}
          </span>
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${isOpen ? "text-secondary" : "text-gray-600"}`} 
          />
        </div>

        {/* Dropdown Menu */}
        <div 
          className={`
            absolute top-full left-0 w-56 py-2 mt-1
            bg-white rounded-md shadow-lg border border-gray-200
            transform transition-all duration-200 origin-top
            ${isOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-2 invisible'
            }
          `}
        >
          {/* Invisible extension to prevent gap */}
          <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
          
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                block px-4 py-2 text-sm text-gray-700
                hover:bg-gray-50 hover:text-secondary
                transition-colors duration-150
                ${index !== items.length - 1 ? 'border-b border-gray-50' : ''}
              `}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://www.innovatia.net/hs-fs/hubfs/Innovative%20Learning%20Solutions_files/Innovatia_CMYK_logo_notag_72dpi1.png?width=327&height=82&name=Innovatia_CMYK_logo_notag_72dpi1.png"
            alt="Logo"
            className="h-8"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/") ? "text-secondary" : "text-gray-600"
            }`}
          >
            Home
          </Link>

          <Dropdown
            title="Content Services"
            items={contentServices}
            isOpen={isContentOpen}
            setIsOpen={setIsContentOpen}
          />

          <Dropdown
            title="Technical Services"
            items={technicalServices}
            isOpen={isTechnicalOpen}
            setIsOpen={setIsTechnicalOpen}
          />

          <Dropdown
            title="Resources"
            items={resources}
            isOpen={isResourcesOpen}
            setIsOpen={setIsResourcesOpen}
          />

          <Link
            href="/careers"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/careers") ? "text-secondary" : "text-gray-600"
            }`}
          >
            Careers
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-secondary ${
              isActive("/about") ? "text-secondary" : "text-gray-600"
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Button className="bg-primary text-white hover:bg-primary/90">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;