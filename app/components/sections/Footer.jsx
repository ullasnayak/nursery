"use client";
import { FadeIn } from "../aceternity/AnimatedComponents";
import { businessInfo } from "../../frontend/src/mockData";
import { Leaf, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <FadeIn direction="up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-lime-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {businessInfo.name}
                  </h3>
                  <p className="text-sm text-gray-400">Nature Meets Nurture</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                {businessInfo.description}. Visit us for the finest collection of plants and gardening essentials.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get in Touch
              </button>
            </FadeIn>
          </div>

          {/* Quick Links */}
          <div>
            <FadeIn direction="up" delay={0.1}>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Featured Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('catalog')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Product Catalog
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div>
            <FadeIn direction="up" delay={0.2}>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                Contact
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="leading-relaxed">
                  {businessInfo.location}
                </li>
                <li>
                  <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                    {businessInfo.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                    {businessInfo.email}
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} {businessInfo.name}. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> in Bengaluru
              </p>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;