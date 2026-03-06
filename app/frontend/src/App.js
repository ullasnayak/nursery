import React from "react";
import "./App.css";
import { Toaster } from "sonner";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import ProductCatalog from "./components/sections/ProductCatalog";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ProductCatalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
