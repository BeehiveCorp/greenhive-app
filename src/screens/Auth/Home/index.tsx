import { useContext } from 'react';
import { Button } from 'react-native';

import { Box, Text, Wrapper } from '@/components';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Home() {
  const { toggle } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
        <Text size="sm">Home</Text>

        <Button title="Toggle theme" onPress={toggle} />

        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>

        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>

        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
        <Text size="super-lg">Home</Text>
      </Box>
    </Wrapper>
  );
}
