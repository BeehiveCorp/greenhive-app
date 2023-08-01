import { useContext } from 'react';
import { Button } from 'react-native';

import { Box, Text, Wrapper } from '@/components';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Login() {
  const { toggle } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
        <Text heading size="super-lg">
          Login
        </Text>
        <Text size="sm">Login aa</Text>

        <Button title="Toggle theme" onPress={toggle} />
      </Box>
    </Wrapper>
  );
}
