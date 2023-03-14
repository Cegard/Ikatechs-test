import styled from "styled-components";

const StyledGrayNavBar = styled.div`
  background-color: #c8c6cb;
  display: flex;
  justify-content: right;
  margin-top: 0;
  padding: 0.2rem 3rem 0.2rem; 
  
  a {
    text-transform: uppercase;
    padding-left: 0.5rem;
    text-decoration: none;
    color: #79797a;
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

export default function GrayNavBar() {
  return (
    <StyledGrayNavBar>
      <a href="/"> Directorio de tiendas </a>
      <a href="/"> Servicio al cliente </a>
      <a href="/"> Mi cuenta </a>
    </StyledGrayNavBar>
  );
}