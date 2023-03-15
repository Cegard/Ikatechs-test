import styled from "styled-components";
import { useSelector } from 'react-redux';
import { Link, NavLink } from "react-router-dom";

const NavBar = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  border-bottom: 0.1rem solid black;
  text-transform: uppercase;

  img {
    width: 100px;
    object-fit: contain;
  }


`;

const BarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: right;
  }

  p {
    color: #aa8b94;
  }

  .link {
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: #666666;
  }

  .navLink {
    margin-right: 1rem;
  }

  .active {
    border-bottom: 0.2rem solid #aa8b94;
  }

  input {
    width: 100px;
    margin-left: auto;
    margin-right: 0;
  }
`;


export default function MainNavBar() {
  const cartItems = useSelector((state) => state.cart.items).length;

  return(
    <NavBar>
      <BarItem>
        <Link to="/">
          <img src='/static/images/12.jpg' alt="logo"/>
        </Link>
        <div>
          <input type="text" placeholder="BUSCAR"/>
          <p> envío gratis para pedidos superiores a $300.000 </p>
        </div>
      </BarItem>
      <BarItem>
        <nav>
          <NavLink className="navLink link" to="/category/mujer"> Mujer </NavLink>
          <NavLink className="navLink link" to="/category/hombre"> Hombre </NavLink>
          <NavLink className="navLink link" to="/blog"> blog </NavLink>
          <NavLink className="navLink link" to="/history"> historia </NavLink>
          <NavLink className="navLink link" to="/stores"> tiendas </NavLink>
        </nav>
        <NavLink className="link" to="/cart"> carrito {cartItems} </NavLink>
      </BarItem>
    </NavBar>
  );
};