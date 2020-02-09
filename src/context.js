import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";

export const productContext = React.createContext();
//Provider
//Consumer

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(productDetail);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setProductsFromTemp();
  }, []);

  //@ copy the values from the original array to a temp Array so that fresh set of original values can be extracted whenever required. Pass the values not references to the values, passing by referencing the objects may change the original value.
  const setProductsFromTemp = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      setProducts(tempProducts);
    });
  };

  const getItem = id => {
    const product = products.find(item => item.id === id);
    return product;
  };

  const handleDetail = id => {
    const product = getItem(id);
    setProductDetail(product);
  };

  const addToCart = id => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
    // console.log("state: ", products, productDetail, cart);
  };

  useEffect(() => {
    addTotals();
  }, [cart]);

  const openModal = id => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;

    setCart([...tempCart]);
  };

  const decrement = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count -= 1;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
    }
  };

  const removeItem = id => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart([...tempCart]);
    setProducts(tempProducts);
  };

  const clearCart = () => {
    setCart([]); //reset cart
    setProductsFromTemp(); //assign fresh data set to the product state
    addTotals(); //reset subtotal, total and tax
  };

  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => {
      subTotal += item.total;
    });
    const tempTax = subTotal * 0.1; //tax is taken to be 10%
    const tax = parseFloat(tempTax.toFixed(2)); //limit decimal to 2 decimal place
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <productContext.Provider
      value={{
        products,
        productDetail,
        cart,
        modalProduct,
        modalOpen,
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart
      }}
    >
      {props.children}
    </productContext.Provider>
  );
}

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer };

export default ProductProvider;
