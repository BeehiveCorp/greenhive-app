import { useContext } from 'react';
import { Button, ScrollView } from 'react-native';

import { Box, Scrollable, Text, Wrapper } from '@/components';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';

export default function Home() {
  const { toggle } = useContext(ThemeContext);
  const { logout } = useUser();

  return (
    <Wrapper>
      <Scrollable mainNavigation>
        <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
          <Text size="sm">Home</Text>

          <Button title="Toggle theme" onPress={toggle} />
          <Button title="Logout" onPress={logout} />
        </Box>
      </Scrollable>
    </Wrapper>
  );
}
