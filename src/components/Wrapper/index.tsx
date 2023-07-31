import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View<ViewProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export default Wrapper;
