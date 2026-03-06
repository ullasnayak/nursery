"use client";
import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../aceternity/AnimatedComponents";
import { productCategories, businessInfo } from "../../frontend/src/mockData";
import { TreePine, Flower2, Leaf, Container, Sprout, ChevronDown, ShoppingCart } from "lucide-react";

const iconMap = {
  TreePine: TreePine,
  Flower2: Flower2,
  Leaf: Leaf,
  Container: Container,
  Sprout: Sprout
};

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleWhatsAppOrder = (product, categoryName) => {
    const message = `Hi, I'm interested in ordering ${product.name} from ${categoryName} (₹${product.price})`;
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="catalog" className="py-24" style={{ backgroundColor: '#ECEC75' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-black mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Complete Product Catalog
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Browse our extensive collection organized by categories
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-4 max-w-5xl mx-auto">
          {productCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            const isActive = activeCategory === category.id;

            return (
              <StaggerItem key={category.id}>
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-black/10 hover:border-black/30 transition-all duration-300">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-lime-300" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-semibold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>
                          {category.name}
                        </h3>
                        <p className="text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 hidden sm:block">
                        {category.products.length} items
                      </span>
                      <ChevronDown 
                        className={`w-6 h-6 text-black transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  {/* Products Grid */}
                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-8 pt-4">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {category.products.map((product) => (
                          <div
                            key={product.id}
                            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all duration-200 group"
                            style={{ backgroundColor: '#f8fafc' }}
                          >
                            <h4 className="font-semibold text-black mb-3 text-lg group-hover:text-gray-700 transition-colors">
                              {product.name}
                            </h4>
                            
                            <div className="space-y-2 mb-4 text-sm">
                              {product.age && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Age:</span>
                                  <span className="text-black font-medium">{product.age}</span>
                                </div>
                              )}
                              {product.color && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Color:</span>
                                  <span className="text-black font-medium">{product.color}</span>
                                </div>
                              )}
                              {product.size && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Size:</span>
                                  <span className="text-black font-medium">{product.size}</span>
                                </div>
                              )}
                              {product.care && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Care:</span>
                                  <span className="text-black font-medium">{product.care}</span>
                                </div>
                              )}
                              {product.type && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Type:</span>
                                  <span className="text-black font-medium">{product.type}</span>
                                </div>
                              )}
                              {product.material && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Material:</span>
                                  <span className="text-black font-medium">{product.material}</span>
                                </div>
                              )}
                              {product.suitable && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600">For:</span>
                                  <span className="text-black font-medium text-xs">{product.suitable}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <p className="text-2xl font-bold text-black" style={{ fontFamily: "'Crimson Text', serif" }}>
                                ₹{product.price}
                              </p>
                              <button
                                onClick={() => handleWhatsAppOrder(product, category.name)}
                                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2 group-hover:scale-105"
                              >
                                <ShoppingCart className="w-4 h-4" />
                                <span>Order</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProductCatalog;