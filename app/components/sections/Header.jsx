"use client";
import { FadeIn } from "../aceternity/AnimatedComponents";
import { Leaf, Phone, Mail, MapPin, Clock } from "lucide-react";
import { businessInfo } from "../../frontend/src/mockData";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <FadeIn direction="left">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-lime-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>
                  {businessInfo.name}
                </h1>
                <p className="text-xs text-gray-600">Nature Meets Nurture</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-black font-medium transition-colors">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-black font-medium transition-colors">
                Products
              </a>
              <a href="#catalog" className="text-gray-700 hover:text-black font-medium transition-colors">
                Catalog
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black font-medium transition-colors">
                Contact
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="bg-black text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                Order Now
              </button>
            </nav>
          </FadeIn>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleWhatsAppClick}
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;