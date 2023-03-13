import styled from 'styled-components';

const Body = styled.div`
  max-width: 1360px;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export default function Main({page}) {
  return (
    <Body>
      {page}
    </Body>
  );
}