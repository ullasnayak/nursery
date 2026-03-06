export const businessInfo = {
  name: "The Green House",
  tagline: "Where Nature Meets Nurture",
  description: "Your one-stop destination for premium plants, bonsai, and gardening essentials",
  location: "The Green House, near Muktinatheshwara Temple, Binnamangala, Nelamangala, Bengaluru",
  phone: "88922 65765",
  whatsapp: "918892265765",
  email: "info@thegreenhousebangalore.com",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM | Sun: 9:00 AM - 6:00 PM"
};

export const featuredProducts = [
  {
    id: 1,
    name: "Japanese Juniper Bonsai",
    category: "Bonsai",
    price: 3500,
    image: "https://images.pexels.com/photos/33887641/pexels-photo-33887641.jpeg",
    description: "Elegant 5-year-old bonsai, perfect for indoor decor",
    inStock: true
  },
  {
    id: 2,
    name: "Blooming Orchids",
    category: "Flower Plants",
    price: 850,
    image: "https://images.pexels.com/photos/35267737/pexels-photo-35267737.jpeg",
    description: "Beautiful orchids in full bloom, multiple color options",
    inStock: true
  },
  {
    id: 3,
    name: "Premium Fiber Pots Set",
    category: "Pots & Planters",
    price: 450,
    image: "https://images.unsplash.com/photo-1653842647649-d87b409dca2a",
    description: "Set of 3 eco-friendly fiber pots in various sizes",
    inStock: true
  },
  {
    id: 4,
    name: "Organic Plant Fertilizer",
    category: "Fertilizers",
    price: 350,
    image: "https://images.pexels.com/photos/6511177/pexels-photo-6511177.jpeg",
    description: "1kg pack of organic fertilizer for healthy plant growth",
    inStock: true
  }
];

export const productCategories = [
  {
    id: 1,
    name: "Bonsai Collection",
    description: "Artfully crafted miniature trees",
    icon: "TreePine",
    products: [
      {
        id: 11,
        name: "Japanese Juniper Bonsai",
        price: 3500,
        age: "5 years",
        care: "Easy"
      },
      {
        id: 12,
        name: "Ficus Bonsai",
        price: 2800,
        age: "4 years",
        care: "Moderate"
      },
      {
        id: 13,
        name: "Chinese Elm Bonsai",
        price: 4200,
        age: "6 years",
        care: "Easy"
      },
      {
        id: 14,
        name: "Jade Bonsai",
        price: 2200,
        age: "3 years",
        care: "Very Easy"
      }
    ]
  },
  {
    id: 2,
    name: "Flower Plants",
    description: "Colorful blooms for every season",
    icon: "Flower2",
    products: [
      {
        id: 21,
        name: "Blooming Orchids",
        price: 850,
        color: "Multiple",
        care: "Moderate"
      },
      {
        id: 22,
        name: "Roses (Potted)",
        price: 450,
        color: "Red, Pink, Yellow",
        care: "Moderate"
      },
      {
        id: 23,
        name: "Marigold Plants",
        price: 120,
        color: "Orange, Yellow",
        care: "Easy"
      },
      {
        id: 24,
        name: "Hibiscus",
        price: 350,
        color: "Various",
        care: "Easy"
      }
    ]
  },
  {
    id: 3,
    name: "Indoor Plants",
    description: "Air-purifying green companions",
    icon: "Leaf",
    products: [
      {
        id: 31,
        name: "Money Plant",
        price: 250,
        size: "Medium",
        care: "Very Easy"
      },
      {
        id: 32,
        name: "Snake Plant",
        price: 450,
        size: "Medium",
        care: "Very Easy"
      },
      {
        id: 33,
        name: "Peace Lily",
        price: 550,
        size: "Medium",
        care: "Easy"
      },
      {
        id: 34,
        name: "Areca Palm",
        price: 650,
        size: "Large",
        care: "Moderate"
      }
    ]
  },
  {
    id: 4,
    name: "Fiber Pots",
    description: "Eco-friendly sustainable planters",
    icon: "Container",
    products: [
      {
        id: 41,
        name: "Small Fiber Pot (6 inch)",
        price: 150,
        size: "6 inch",
        material: "Biodegradable"
      },
      {
        id: 42,
        name: "Medium Fiber Pot (10 inch)",
        price: 250,
        size: "10 inch",
        material: "Biodegradable"
      },
      {
        id: 43,
        name: "Large Fiber Pot (14 inch)",
        price: 400,
        size: "14 inch",
        material: "Biodegradable"
      },
      {
        id: 44,
        name: "Fiber Pot Set (3 pcs)",
        price: 450,
        size: "Assorted",
        material: "Biodegradable"
      }
    ]
  },
  {
    id: 5,
    name: "Fertilizers & Care",
    description: "Essential nutrition for healthy growth",
    icon: "Sprout",
    products: [
      {
        id: 51,
        name: "Organic Fertilizer (1kg)",
        price: 350,
        type: "Organic",
        suitable: "All Plants"
      },
      {
        id: 52,
        name: "NPK Fertilizer (500g)",
        price: 280,
        type: "Chemical",
        suitable: "Flowering Plants"
      },
      {
        id: 53,
        name: "Neem Oil Spray",
        price: 220,
        type: "Organic",
        suitable: "Pest Control"
      },
      {
        id: 54,
        name: "Plant Growth Booster",
        price: 450,
        type: "Bio-stimulant",
        suitable: "All Plants"
      }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bengaluru",
    rating: 5,
    text: "Amazing collection of bonsai! The staff helped me choose the perfect one for my balcony. Very knowledgeable and friendly.",
    image: null
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Nelamangala",
    rating: 5,
    text: "Best nursery in the area! Quality plants at reasonable prices. Their fiber pots are eco-friendly and durable.",
    image: null
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bengaluru",
    rating: 5,
    text: "Purchased several indoor plants and they're all thriving! Great advice on plant care. Highly recommend!",
    image: null
  }
];
