import styled from 'styled-components';

const OffBar = styled.h2`
  display: flex;
  background-color: #7a4a58;
  color: white;
  height: 2.8rem;
  margin-top: 0;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
`;

export default function NotiBar() {
  return (
    <OffBar>
      <p>
        HOT SALE -30% EN SANDALIAS
      </p>
    </OffBar>
  );
}
