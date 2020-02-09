import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
import "../index.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
// import { Button, Layout, Menu, Breadcrumb, Icon } from "antd";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

// const { Header, Content, Footer } = Layout;

function NavBar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sn-5">
      {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk  */}
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />{" "}
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer cart>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem !important;
    text-transform: capitalize;
  }
`;

export default NavBar;

// <NavWrapper
//       style={{
//         marginBottom: "100px"
//       }}

{
  /* https://www.iconfinder.com/icons/1243689/call_phone_icon
      Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk  */
}
{
  /* <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "#2a2a72"
            marginBottom: "5px"
          }}
        >
          <div className="logo" style={{ position: "absolute" }}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{
              lineHeight: "30px",
              paddingLeft: "100px",
              backgroundColor: "#2a2a72",
              marginTop: "15px"
            }}
          >
            <Menu.Item key="1">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </Menu.Item>
            <Menu.Item key="2" style={{ float: "right" }}>
              <Link to="/cart">
                <ButtonContainer cart>
                  <span>
                    <i className="fas fa-cart-plus"></i> My Cart
                  </span>
                </ButtonContainer>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout> */
}
