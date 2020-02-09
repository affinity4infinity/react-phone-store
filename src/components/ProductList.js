import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts } from "../data";
import { productContext } from "../context";

function ProductList() {
  // const [products, setProducts] = useState(storeProducts);
  // console.log(products);

  const product = useContext(productContext);
  console.log("Context: ", product);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {product.products.map(item => {
              return <Product key={item.id} product={item} />;
            })}
            {/* {() => console.log(product)} */}
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <Product />
    // </div>
  );
}

export default ProductList;
