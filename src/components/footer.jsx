import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e6e2;
  color: #575656;
  font-size: 2rem;
  height: 15rem;
  margin-top: 10rem;
  margin-bottom: 2.5rem;
`;

export default function Footer() {
  return (
    <Content>
      <span>@HUSHPUPPIESCO</span>
    </Content>
  );
}