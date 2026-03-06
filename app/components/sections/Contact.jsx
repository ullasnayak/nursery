"use client";
import  { useState } from "react";
import { FadeIn } from "../aceternity/AnimatedComponents";
import { businessInfo } from "../../frontend/src/mockData";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Inquiry from Website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    
    // Show success toast
    toast.success("Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${businessInfo.email}`;
  };

  const handleMapClick = () => {
    const address = encodeURIComponent(businessInfo.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-black mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div 
                    onClick={handleMapClick}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">Location</p>
                      <p className="text-gray-600">{businessInfo.location}</p>
                    </div>
                  </div>

                  <div 
                    onClick={handleCallClick}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">Phone</p>
                      <p className="text-gray-600">{businessInfo.phone}</p>
                    </div>
                  </div>

                  <div 
                    onClick={handleEmailClick}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">Email</p>
                      <p className="text-gray-600">{businessInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">Business Hours</p>
                      <p className="text-gray-600">{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 border-2 border-green-200">
                <MessageCircle className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-black mb-2">Prefer WhatsApp?</h4>
                <p className="text-gray-700 mb-4">Get instant responses to your queries on WhatsApp</p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-black mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;