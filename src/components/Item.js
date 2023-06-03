import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleItemToggle = () => {
    setInCart(!inCart);
  };

  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  const buttonClassName = inCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleItemToggle}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
