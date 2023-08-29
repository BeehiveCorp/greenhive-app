import { useContext } from 'react';
import { Button } from 'react-native';

import { Box, Scrollable, Text, Wrapper, XpProgress } from '@/components';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import { GLOBAL_METRICS } from '@/theme';

import { MainHeader } from './components';

export default function Home() {
  const { toggle } = useContext(ThemeContext);
  const { logout } = useUser();

  return (
    <Wrapper>
      <Box style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing }}>
        <XpProgress />
        <MainHeader />
      </Box>

      <Scrollable mainNavigation>
        {/* <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
          <Text size="sm">Home</Text>

          <Button title="Toggle theme" onPress={toggle} />
          <Button title="Logout" onPress={logout} />
        </Box> */}
      </Scrollable>
    </Wrapper>
  );
}
