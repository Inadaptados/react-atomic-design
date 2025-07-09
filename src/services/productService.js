import React from 'react';

const productsDatabase = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    description: 'El iPhone más avanzado con chip A16 Bionic, cámara de 48MP y pantalla Super Retina XDR.',
    price: 999.99,
    image: './products/iPhone 14 Pro.jpg',
    inStock: true,
    category: 'smartphones',
    brand: 'Apple'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    description: 'Ultrabook con chip M2, pantalla Liquid Retina de 13.6 pulgadas y hasta 18 horas de batería.',
    price: 1199.99,
    image: './products/MacBook Air M2.jpg',
    inStock: true,
    category: 'laptops',
    brand: 'Apple'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S23',
    description: 'Smartphone Android premium con cámara de 50MP, pantalla Dynamic AMOLED 2X y procesador Snapdragon.',
    price: 799.99,
    image: './products/Samsung Galaxy S23.jpg',
    inStock: false,
    category: 'smartphones',
    brand: 'Samsung'
  },
  {
    id: 4,
    name: 'Dell XPS 13',
    description: 'Laptop ultradelgada con procesador Intel de 12va generación, pantalla InfinityEdge de 13.4".',
    price: 999.99,
    image: './products/Dell XPS 13.jpeg',
    inStock: true,
    category: 'laptops',
    brand: 'Dell'
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    description: 'Tablet profesional con chip M2, pantalla Liquid Retina XDR y soporte para Apple Pencil.',
    price: 1099.99,
    image: './products/iPad Pro 12.9.jpeg',
    inStock: true,
    category: 'tablets',
    brand: 'Apple'
  },
  {
    id: 6,
    name: 'Sony WH-1000XM5',
    description: 'Audífonos inalámbricos con cancelación de ruido líder en la industria y sonido de alta resolución.',
    price: 399.99,
    image: './products/Sony WH-1000XM5.avif',
    inStock: true,
    category: 'audio',
    brand: 'Sony'
  },
  {
    id: 7,
    name: 'Google Pixel 7',
    description: 'Smartphone Android puro con cámara computational avanzada y Google Tensor G2.',
    price: 599.99,
    image: './products/Google Pixel 7.jpg',
    inStock: false,
    category: 'smartphones',
    brand: 'Google'
  },
  {
    id: 8,
    name: 'Microsoft Surface Laptop 5',
    description: 'Laptop premium con Windows 11, pantalla táctil PixelSense de 13.5" y procesadores Intel de 12va gen.',
    price: 1299.99,
    image: './products/Microsoft Surface Laptop 5.jpg',
    inStock: true,
    category: 'laptops',
    brand: 'Microsoft'
  }
];

const simulateNetworkDelay = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const productService = {
  async getAllProducts() {
    await simulateNetworkDelay();
    return [...productsDatabase];
  },

  async getProductById(id) {
    await simulateNetworkDelay(300);
    const product = productsDatabase.find(p => p.id === parseInt(id));
    if (!product) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    return { ...product };
  },

  async getProductsByCategory(category) {
    await simulateNetworkDelay(400);
    return productsDatabase.filter(p => p.category === category);
  },

  async getProductsByBrand(brand) {
    await simulateNetworkDelay(400);
    return productsDatabase.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  },

  async searchProducts(query) {
    await simulateNetworkDelay(600);
    const searchTerm = query.toLowerCase();
    return productsDatabase.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm)
    );
  },

  async getInStockProducts() {
    await simulateNetworkDelay();
    return productsDatabase.filter(p => p.inStock);
  },

  async getProductsByPriceRange(minPrice, maxPrice) {
    await simulateNetworkDelay(400);
    return productsDatabase.filter(p =>
      p.price >= minPrice && p.price <= maxPrice
    );
  },

  async getCategories() {
    await simulateNetworkDelay(200);
    const categories = [...new Set(productsDatabase.map(p => p.category))];
    return categories;
  },

  async getBrands() {
    await simulateNetworkDelay(200);
    const brands = [...new Set(productsDatabase.map(p => p.brand))];
    return brands;
  },

  async updateProductStock(id, inStock) {
    await simulateNetworkDelay(300);
    const productIndex = productsDatabase.findIndex(p => p.id === parseInt(id));
    if (productIndex === -1) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    productsDatabase[productIndex].inStock = inStock;
    return { ...productsDatabase[productIndex] };
  }
};

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchProducts = async (fetchFunction) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFunction();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts
  };
};