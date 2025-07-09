import React, { useState, useEffect } from 'react';
import List from './components/List';
import ButtonShowcase from './components/ButtonShowcase';
import CardShowcase from './components/CardShowcase';
import ListShowcase from './components/ListShowcase';
import { productService } from './services/productService';
import { cartService } from './services/cartService';
import './styles/App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('products');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (currentView === 'products') {
      loadProducts();
    }

    const unsubscribe = cartService.addListener((cart) => {
      setCartCount(cartService.getTotalItems());
    });

    return unsubscribe;
  }, [currentView]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getAllProducts();
      setProducts(data);
      setActiveFilter('all');
    } catch (err) {
      setError('Error al cargar los productos: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    try {
      cartService.addProduct(product);
      console.log(`✅ ${product.name} agregado al carrito`);
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      loadProducts();
      return;
    }

    try {
      setLoading(true);
      const searchResults = await productService.searchProducts(query);
      setProducts(searchResults);
      setActiveFilter('search');
    } catch (err) {
      setError('Error en la búsqueda: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterByCategory = async (category) => {
    try {
      setLoading(true);
      const filteredProducts = category === 'all'
        ? await productService.getAllProducts()
        : await productService.getProductsByCategory(category);
      setProducts(filteredProducts);
      setActiveFilter(category);
    } catch (err) {
      setError('Error al filtrar productos: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderNavigation = () => (
    <div className="app-header__nav">
      <button
        className={`nav-button ${currentView === 'products' ? 'nav-button--active' : ''}`}
        onClick={() => setCurrentView('products')}
      >
        🏪 Productos
      </button>
      <button
        className={`nav-button ${currentView === 'buttons' ? 'nav-button--active' : ''}`}
        onClick={() => setCurrentView('buttons')}
      >
        🔘 Botones
      </button>
      <button
        className={`nav-button ${currentView === 'cards' ? 'nav-button--active' : ''}`}
        onClick={() => setCurrentView('cards')}
      >
        🃏 Cards
      </button>
      <button
        className={`nav-button ${currentView === 'lists' ? 'nav-button--active' : ''}`}
        onClick={() => setCurrentView('lists')}
      >
        📋 Lists
      </button>
      <div className="app-header__cart">
        🛒 Carrito: {cartCount} {cartCount === 1 ? 'producto' : 'productos'}
      </div>
    </div>
  );


  if (currentView === 'buttons') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-header__title">Tienda Online</h1>
          {renderNavigation()}
        </header>
        <ButtonShowcase />
      </div>
    );
  }

  if (currentView === 'cards') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-header__title">Tienda Online</h1>
          {renderNavigation()}
        </header>
        <CardShowcase />
      </div>
    );
  }

  if (currentView === 'lists') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-header__title">Tienda Online</h1>
          {renderNavigation()}
        </header>
        <ListShowcase />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-container">
        Cargando productos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        {error}
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-header__title">Tienda Online</h1>
        {renderNavigation()}
      </header>
      <div className="filters-section">
        <div className="filters-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="search-input"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            <button
              className={`filter-button ${activeFilter === 'all' ? 'filter-button--active' : ''}`}
              onClick={() => handleFilterByCategory('all')}
            >
              Todos
            </button>
            <button
              className={`filter-button ${activeFilter === 'smartphones' ? 'filter-button--active' : ''}`}
              onClick={() => handleFilterByCategory('smartphones')}
            >
              Smartphones
            </button>
            <button
              className={`filter-button ${activeFilter === 'laptops' ? 'filter-button--active' : ''}`}
              onClick={() => handleFilterByCategory('laptops')}
            >
              Laptops
            </button>
            <button
              className={`filter-button ${activeFilter === 'tablets' ? 'filter-button--active' : ''}`}
              onClick={() => handleFilterByCategory('tablets')}
            >
              Tablets
            </button>
            <button
              className={`filter-button ${activeFilter === 'audio' ? 'filter-button--active' : ''}`}
              onClick={() => handleFilterByCategory('audio')}
            >
              Audio
            </button>
          </div>
        </div>
      </div>
      <List
        products={products}
        onAddToCart={handleAddToCart}
        title={`Catálogo de Productos (${products.length} productos)`}
      />
    </div>
  );
};

export default App;