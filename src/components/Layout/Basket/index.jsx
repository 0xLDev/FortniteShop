import React, { useContext } from "react";
import { ShopContext } from "../../Context";

const Basket = (props) => {
  const { order, handleBasketShow = Function.prototype } = useContext(
    ShopContext
  );

  const quantity = order.length;

  return (
    <div className="cart white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export { Basket };
