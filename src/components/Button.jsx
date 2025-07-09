import React from "react";
import "../styles/Button.css";

const Button = ({
  text,
  color = "primary",
  onClick,
  disabled = false,
  variant = "solid",
  className = "",
}) => {
  const buttonClasses = [
    "button",
    `button--${color}`,
    variant === "outline" ? "button--outline" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
