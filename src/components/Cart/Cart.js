import React, { useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { productContext } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart(props) {
  const product = useContext(productContext);

  if (product.cart.length > 0) {
    return (
      <>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList value={product} />
        <CartTotals value={product} history={props.history} />
      </>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;
