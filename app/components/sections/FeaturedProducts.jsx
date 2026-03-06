"use client";
import { AnimatedCard, FadeIn, StaggerContainer, StaggerItem } from "../aceternity/AnimatedComponents";
import { featuredProducts, businessInfo } from "../../frontend/src/mockData";
import { ShoppingBag, Star } from "lucide-react";

const FeaturedProducts = () => {
  const handleWhatsAppOrder = (product) => {
    const message = `Hi, I'm interested in ordering ${product.name} (₹${product.price})`;
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-black mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked premium plants and gardening essentials to transform your space
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <StaggerItem key={product.id}>
              <AnimatedCard delay={index * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl h-full flex flex-col" style={{ backgroundColor: '#e6e67c' }}>
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-black">
                      {product.category}
                    </div>
                    {product.inStock && (
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        In Stock
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-4 flex-grow">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-2xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>
                          ₹{product.price}
                        </p>
                      </div>
                      <button
                        onClick={() => handleWhatsAppOrder(product)}
                        className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group-hover:scale-110"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturedProducts;