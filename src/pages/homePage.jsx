import styled from "styled-components";
import ImageButtonLink from "../components/imageButtonLink";
import Header from "../components/header";

const CatsImageLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

export default function HomePage() {
  return(
    <>
      <Header/>
      <CatsImageLinks>
        <ImageButtonLink
          imgSource="/static/images/1.jpg"
          altText="women's shoes"
          linkTo="/category/mujer"
          btnText="mujeres"
        />
        <ImageButtonLink
          imgSource="/static/images/11.jpg"
          altText="men's shoes"
          linkTo="/category/hombre"
          btnText="hombres"
        />
      </CatsImageLinks>
    </>
  );
}
