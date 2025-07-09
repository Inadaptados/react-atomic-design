import React from "react";
import Button from "./Button";
import "../styles/Card.css";

const Card = ({ product, onAddToCart, showButton = true }) => {
  const { id, name, description, price, image, inStock = true } = product;

  const handleAddToCart = () => {
    if (onAddToCart && inStock) {
      onAddToCart(product);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <h3 className="card__title">{name}</h3>
      <p className="card__description">{description}</p>
      <div className="card__price">${price}</div>
      <div
        className={`card__stock ${
          inStock ? "card__stock--in-stock" : "card__stock--out-of-stock"
        }`}
      >
        {inStock ? "En stock" : "Agotado"}
      </div>
      {showButton && (
        <Button
          text="Agregar al carrito"
          color={inStock ? "success" : "secondary"}
          onClick={handleAddToCart}
          disabled={!inStock}
          className="card__button"
        />
      )}
    </div>
  );
};

export default Card;
