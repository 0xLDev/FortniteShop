import React from "react";

import { CartItem } from "../CartItem";

const ItemList = (props) => {
  const { item = [], addToBasket = Function.prototype } = props;

  if (!item.length) {
    return <h3>Ничего нет</h3>;
  }

  return (
    <div className="items">
      {item.map((item) => (
        <CartItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export { ItemList };
