import { useContext } from 'react';
import { Button } from 'react-native';

import { Box, Text, Wrapper } from '@/components';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function RolePlayingGame() {
  const { toggle } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
        <Text size="sm">RPG</Text>

        <Button title="Toggle theme" onPress={toggle} />
      </Box>
    </Wrapper>
  );
}
