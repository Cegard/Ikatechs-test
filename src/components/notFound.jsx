import styled from "styled-components";

const FourOFour = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  img {
    width: 40rem;
    object-fit: contain;
  }
`;

export default function NotFound() {
  return (
    <FourOFour>
      <img  src="/static/images/fof.png" alt="page not found"/>
    </FourOFour>
  )
}