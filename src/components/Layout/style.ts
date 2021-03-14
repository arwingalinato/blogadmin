import styled from 'styled-components';

type TLayout = {
  flex: boolean;
};

export const Layout = styled.div<TLayout>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  padding: 0;
  margin: 0;
  height: 100vh;
`;
