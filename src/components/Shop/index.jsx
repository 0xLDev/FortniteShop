import React, { useEffect, useContext } from "react";
import { API_KEY, URL } from "../../config";
import { ShopContext } from "../Context";
import { Loader } from "../Loader";
import { ItemList } from "../Layout/ItemsList";
import { Basket } from "../Layout/Basket";
import { BasketList } from "../Layout/BasketList";
import { Alert } from "../Alert";

const Shop = () => {
  const {
    loading,
    order,
    isBasketShow,
    alertName,
    setItems,
  } = useContext(ShopContext);

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.featured);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Basket quantity={order.length} />
      {loading ? <Loader /> : <ItemList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export { Shop };
