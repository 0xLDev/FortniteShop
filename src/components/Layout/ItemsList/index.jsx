import React, { useContext } from "react";
import { ShopContext } from "../../Context";
import { CartItem } from "../CartItem";

const ItemList = () => {
  const { item = [] } = useContext(ShopContext);

  if (!item.length) {
    return <h3>Ничего нет</h3>;
  }

  return (
    <div className="items">
      {item.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export { ItemList };
