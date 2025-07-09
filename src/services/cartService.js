import React from 'react';

class CartService {
  constructor() {
    this.cart = this.loadCartFromStorage();
    this.listeners = [];
  }

  loadCartFromStorage() {
    try {
      const savedCart = localStorage.getItem('shopping-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from storage:', error);
      return [];
    }
  }

  saveCartToStorage() {
    try {
      localStorage.setItem('shopping-cart', JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.cart));
  }

  addListener(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  addProduct(product) {
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }

    this.saveCartToStorage();
    this.notifyListeners();
    return this.cart;
  }

  removeProduct(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCartToStorage();
    this.notifyListeners();
    return this.cart;
  }

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      return this.removeProduct(productId);
    }

    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCartToStorage();
      this.notifyListeners();
    }
    return this.cart;
  }

  getCart() {
    return [...this.cart];
  }

  clearCart() {
    this.cart = [];
    this.saveCartToStorage();
    this.notifyListeners();
    return this.cart;
  }

  getTotalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  isInCart(productId) {
    return this.cart.some(item => item.id === productId);
  }
}

export const cartService = new CartService();

export const useCart = () => {
  const [cart, setCart] = React.useState(cartService.getCart());

  React.useEffect(() => {
    const unsubscribe = cartService.addListener(setCart);
    return unsubscribe;
  }, []);

  return {
    cart,
    addProduct: (product) => cartService.addProduct(product),
    removeProduct: (productId) => cartService.removeProduct(productId),
    updateQuantity: (productId, quantity) => cartService.updateQuantity(productId, quantity),
    clearCart: () => cartService.clearCart(),
    totalItems: cartService.getTotalItems(),
    totalPrice: cartService.getTotalPrice(),
    isInCart: (productId) => cartService.isInCart(productId)
  };
};