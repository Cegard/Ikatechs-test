import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgWithLinkButton = styled.div`
  position: relative;

  img {
    height: auto;
    width: 600px;
    object-fit: contain;
  }

  button {
    text-transform: uppercase;
    width: 120px;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #555;
    color: white;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border: none;
    cursor: pointer;
  }
`;

export default function ImageButtonLink({imgSource, altText, linkTo, btnText}) {
  return(
    <ImgWithLinkButton>
      <Link to={linkTo}>
        <img src={imgSource} alt={altText} />
      </Link>
      <button className="btn">{btnText}</button>
    </ImgWithLinkButton>
  );
} 