import { ViewProps } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const Wrapper = styled.View<ViewProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding-top: ${Constants.statusBarHeight}px;
`;

export default Wrapper;
