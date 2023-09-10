import styled from 'styled-components/native';

import { ScrollableProps } from './types';
import { BOTTOM_TAB_ITEM_SIZE } from '@/navigation/constants';

const Scrollable = styled.ScrollView.attrs<ScrollableProps>(
  ({ mainNavigation, paddingTop, paddingBottom }) => ({
    contentContainerStyle: {
      paddingBottom: paddingBottom
        ? paddingBottom
        : mainNavigation
        ? BOTTOM_TAB_ITEM_SIZE + 48
        : 0,
      paddingTop,
    },
    showsVerticalScrollIndicator: false,
  })
)`
  flex: 1;
`;

export default Scrollable;
