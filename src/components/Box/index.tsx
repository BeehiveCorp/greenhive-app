import styled from 'styled-components/native';
import { BoxProperties } from './types';

export const Wrapper = styled.View<BoxProperties>`
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};

  justify-content: ${({ spaceBetween, justifyContentCenter }) =>
    spaceBetween ? 'space-between' : justifyContentCenter ? 'center' : 'flex-start'};

  align-items: ${({ alignItemsCenter }) =>
    alignItemsCenter ? 'center' : 'stretch'};
`;

export default Wrapper;
