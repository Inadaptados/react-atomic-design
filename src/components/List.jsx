import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "../styles/List.css";

const List = ({ products = [], onAddToCart, title = "Nuestros Productos" }) => {
  const [layout, setLayout] = useState("grid");

  return (
    <div className="list-container">
      <div className="list-header">
        <h1 className="list-title">{title}</h1>
        <div className="list-controls">
          <Button
            text="Vista Grid"
            color={layout === "grid" ? "primary" : "secondary"}
            variant={layout === "grid" ? "solid" : "outline"}
            onClick={() => setLayout("grid")}
          />
          <Button
            text="Vista Lista"
            color={layout === "list" ? "primary" : "secondary"}
            variant={layout === "list" ? "solid" : "outline"}
            onClick={() => setLayout("list")}
          />
        </div>
      </div>
      {layout === "grid" ? (
        <div className="list-grid">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="list-vertical">
          {products.map((product) => (
            <div key={product.id} className="list-item">
              <img
                src={product.image}
                alt={product.name}
                className="list-item__image"
              />
              <div className="list-item__content">
                <h3 className="list-item__title">{product.name}</h3>
                <p className="list-item__description">{product.description}</p>
                <div className="list-item__price">${product.price}</div>
                <div
                  className={`list-item__stock ${
                    product.inStock
                      ? "list-item__stock--in-stock"
                      : "list-item__stock--out-of-stock"
                  }`}
                >
                  {product.inStock ? "En stock" : "Agotado"}
                </div>
              </div>
              <div className="list-item__button">
                <Button
                  text="Agregar al carrito"
                  color={product.inStock ? "success" : "secondary"}
                  onClick={() => onAddToCart && onAddToCart(product)}
                  disabled={!product.inStock}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
