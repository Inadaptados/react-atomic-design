import React, { useState, useEffect } from "react";
import Card from "./Card";
import { productService } from "../services/productService";
import "../styles/CardShowcase.css";

const CardShowcase = () => {
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await productService.getAllProducts();
        setRealProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log(`${product.name} agregado al carrito!`);
  };

  if (loading) {
    return <div className="loading-container">Cargando productos...</div>;
  }

  const sampleProducts = {
    inStock: realProducts.find((p) => p.inStock) || realProducts[0],
    outOfStock: realProducts.find((p) => !p.inStock) || realProducts[1],
    longDescription:
      realProducts.find((p) => p.description.length > 100) || realProducts[2],
    budget:
      realProducts.reduce((prev, current) =>
        prev.price < current.price ? prev : current
      ) || realProducts[0],
  };

  return (
    <div className="card-showcase">
      <h1 className="showcase-title">Showcase de Cards</h1>
      <section className="showcase-section">
        <h2 className="section-title">Estados Básicos</h2>
        <div className="card-grid">
          <div className="card-item">
            <Card
              product={sampleProducts.inStock}
              onAddToCart={handleAddToCart}
              showButton={true}
            />
            <code className="card-code">
              {`<Card
  product={product}
  onAddToCart={handleAddToCart}
  showButton={true}
/>`}
            </code>
            <p className="card-description">Card con producto en stock</p>
          </div>
          <div className="card-item">
            <Card
              product={sampleProducts.outOfStock}
              onAddToCart={handleAddToCart}
              showButton={true}
            />
            <code className="card-code">
              {`<Card
  product={productOutOfStock}
  onAddToCart={handleAddToCart}
  showButton={true}
/>`}
            </code>
            <p className="card-description">Card con producto agotado</p>
          </div>
          <div className="card-item">
            <Card
              product={sampleProducts.inStock}
              onAddToCart={handleAddToCart}
              showButton={false}
            />
            <code className="card-code">
              {`<Card
  product={product}
  onAddToCart={handleAddToCart}
  showButton={false}
/>`}
            </code>
            <p className="card-description">Card sin botón</p>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Variaciones de Contenido</h2>
        <div className="card-grid">
          <div className="card-item">
            <Card
              product={sampleProducts.longDescription}
              onAddToCart={handleAddToCart}
              showButton={true}
            />
            <code className="card-code">
              {`<Card
  product={productWithLongDescription}
  onAddToCart={handleAddToCart}
/>`}
            </code>
            <p className="card-description">Card con descripción larga</p>
          </div>
          <div className="card-item">
            <Card
              product={sampleProducts.budget}
              onAddToCart={handleAddToCart}
              showButton={true}
            />
            <code className="card-code">
              {`<Card
  product={budgetProduct}
  onAddToCart={handleAddToCart}
/>`}
            </code>
            <p className="card-description">Card con producto económico</p>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Casos de Uso</h2>
        <div className="use-cases">
          <div className="use-case">
            <h3>Catálogo de Productos</h3>
            <p>Muestra productos con opción de agregar al carrito</p>
            <div className="use-case-demo">
              <Card
                product={sampleProducts.inStock}
                onAddToCart={handleAddToCart}
                showButton={true}
              />
            </div>
          </div>
          <div className="use-case">
            <h3>Vista de Favoritos</h3>
            <p>Muestra productos guardados sin botón de compra</p>
            <div className="use-case-demo">
              <Card
                product={sampleProducts.budget}
                onAddToCart={handleAddToCart}
                showButton={false}
              />
            </div>
          </div>
          <div className="use-case">
            <h3>Productos Agotados</h3>
            <p>Indica claramente cuando un producto no está disponible</p>
            <div className="use-case-demo">
              <Card
                product={sampleProducts.outOfStock}
                onAddToCart={handleAddToCart}
                showButton={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Propiedades del Componente</h2>
        <div className="props-table">
          <table className="props-documentation">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Valor por defecto</th>
                <th>Descripción</th>
                <th>Estructura/Valores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>product</code>
                </td>
                <td>object</td>
                <td>-</td>
                <td>Objeto con información del producto</td>
                <td>
                  {"{"} id, name, description, price, image, inStock {"}"}
                </td>
              </tr>
              <tr>
                <td>
                  <code>onAddToCart</code>
                </td>
                <td>function</td>
                <td>-</td>
                <td>Función a ejecutar al agregar al carrito</td>
                <td>Recibe el producto como parámetro</td>
              </tr>
              <tr>
                <td>
                  <code>showButton</code>
                </td>
                <td>boolean</td>
                <td>true</td>
                <td>Controla si se muestra el botón</td>
                <td>true, false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="showcase-section">
        <h2 className="section-title">Estructura del Objeto Product</h2>
        <div className="code-example">
          <pre>
            <code>{`const product = {
  id: 1,                    // Identificador único
  name: "iPhone 14 Pro",    // Nombre del producto
  description: "...",       // Descripción del producto
  price: 999.99,           // Precio en formato numérico
  image: "https://...",    // URL de la imagen
  inStock: true            // Disponibilidad (opcional, default: true)
};`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default CardShowcase;
