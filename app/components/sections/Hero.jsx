"use client";
import { FadeIn, FloatingElement } from "../aceternity/AnimatedComponents";
import { ArrowRight, Sparkles } from "lucide-react";
import { businessInfo } from "../../frontend/src/mockData";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" style={{ backgroundColor: '#ECEC75' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <FadeIn direction="up" delay={0.2}>
              <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Premium Quality Plants</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {businessInfo.tagline}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-xl">
                {businessInfo.description}. From exquisite bonsai to vibrant flowers, eco-friendly pots to organic fertilizers.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="group bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToProducts}
                  className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all duration-200 hover:-translate-y-1"
                >
                  Explore Catalog
                </button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="mt-12 pt-8 border-t border-black/20">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>500+</p>
                    <p className="text-sm text-gray-700 mt-1">Plant Varieties</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>1000+</p>
                    <p className="text-sm text-gray-700 mt-1">Happy Customers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>5★</p>
                    <p className="text-sm text-gray-700 mt-1">Rated Service</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Image */}
          <FadeIn direction="right" delay={0.4}>
            <FloatingElement>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/30 rounded-3xl blur-2xl" />
                <img
                  src="https://images.pexels.com/photos/33887641/pexels-photo-33887641.jpeg"
                  alt="The Green House Nursery"
                  className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>₹120</p>
                  <p className="text-sm text-gray-600 mt-1">Premium Plants</p>
                </div>
              </div>
            </FloatingElement>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeIn delay={1} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={scrollToProducts}>
          <span className="text-sm text-black font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;