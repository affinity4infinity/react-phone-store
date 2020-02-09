import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Button } from "antd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Success from "./components/Success";
// import AntForm from "./components/AntForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/paymentSuccess" component={Success} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
    // <div>
    //   <AntForm />
    // </div>
  );
}

export default App;
