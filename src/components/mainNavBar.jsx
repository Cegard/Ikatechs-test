import styled from "styled-components";

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

  a {
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: #666666;
  }

  nav a {
    padding-right: 1rem;
  }

  input {
    width: 100px;
    margin-left: auto;
    margin-right: 0;
  }
`;


export default function MainNavBar() {
  return(
    <NavBar>
      <BarItem>
        <img src='/static/images/12.jpg' alt="logo"/>
        <div>
          <input type="text" placeholder="BUSCAR"/>
          <p> envío gratis para pedidos superiores a $300.000 </p>
        </div>
      </BarItem>
      <BarItem>
        <nav>
          <a href="/category/men"> Hombre </a>
          <a href="/category/women"> Mujer </a>
          <a href="/"> blog </a>
          <a href="/"> historia </a>
          <a href="/"> tiendas </a>
        </nav>
        <a href="/"> carrito {0} </a>
      </BarItem>
    </NavBar>
  );
};