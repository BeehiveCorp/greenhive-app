import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import chroma from 'chroma-js';

import { Wrapper } from './styles';
import { TabBarItemProps } from './types';

const TabBarItem: React.FC<TabBarItemProps> = ({ focused }) => {
  const route = useRoute();
  const theme = useTheme();

  const getIconNameBasedOnScreen = (
    screenName: string
  ): 'home' | 'view-carousel' | 'cards-playing' => {
    if (screenName === 'Home') return 'home';
    if (screenName === 'Feed') return 'view-carousel';
    if (screenName === 'RolePlayingGame') return 'cards-playing';
    return 'home';
  };

  const isDarkMode = theme.name === 'dark';

  return (
    <Wrapper focused={focused}>
      <MaterialCommunityIcons
        name={getIconNameBasedOnScreen(route.name)}
        color={chroma(isDarkMode ? theme.secondary : theme.primary)
          .alpha(focused ? 1 : 0.1)
          .hex()}
        size={28}
      />
    </Wrapper>
  );
};

export default TabBarItem;
