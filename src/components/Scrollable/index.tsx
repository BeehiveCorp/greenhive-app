import styled from 'styled-components/native';

import { ScrollableProps } from './types';
import { BOTTOM_TAB_ITEM_SIZE } from '@/navigation/constants';

const Scrollable = styled.ScrollView.attrs<ScrollableProps>(
  ({ mainNavigation }) => ({
    contentContainerStyle: {
      paddingBottom: mainNavigation ? BOTTOM_TAB_ITEM_SIZE + 48 : 0,
    },
  })
)``;

export default Scrollable;
