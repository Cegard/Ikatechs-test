import Header from "../components/header";
import styled from "styled-components";
import ImageButtonLink from "../components/imageButtonLink";

const CatsImageLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

export default function Home() {
  return(
    <>
      <Header/>
      <CatsImageLinks>
        <ImageButtonLink
          imgSource="/static/images/1.jpg"
          altText="women's shoes"
          linkTo="/category/women"
          btnText="mujeres"
        />
        <ImageButtonLink
          imgSource="/static/images/11.jpg"
          altText="men's shoes"
          linkTo="/category/men"
          btnText="hombres"
        />
      </CatsImageLinks>
    </>
  );
}
