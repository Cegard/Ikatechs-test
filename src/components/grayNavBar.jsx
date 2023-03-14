import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledGrayNavBar = styled.div`
  background-color: #c8c6cb;
  display: flex;
  justify-content: right;
  margin-top: 0;
  padding: 0.2rem 3rem 0.2rem; 
  
  .navLink {
    text-transform: uppercase;
    margin-left: 0.5rem;
    text-decoration: none;
    color: #79797a;
    font-weight: bold;
    font-size: 0.75rem;
  }

  .active {
    border-bottom: 0.0625rem solid #79797a;
  }
`;

export default function GrayNavBar() {
  return (
    <StyledGrayNavBar>
      <NavLink className="navLink" to="/storesDirectory"> Directorio de tiendas </NavLink>
      <NavLink className="navLink" to="/customerService"> Servicio al cliente </NavLink>
      <NavLink className="navLink" to="/myAccount"> Mi cuenta </NavLink>
    </StyledGrayNavBar>
  );
}