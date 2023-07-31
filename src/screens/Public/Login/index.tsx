import { useContext, useEffect } from 'react';
import { Button } from 'react-native';

import { Box, Text, Wrapper } from '@/components';
import { showToast } from '@/utils/utilities';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Login() {
  const { toggle } = useContext(ThemeContext);

  useEffect(() => {
    showToast({
      variant: 'warning',
      message: 'This is the Toast message!!!!!',
      description:
        'Pensando mais a longo prazo, o fenômeno da Internet maximiza as possibilidades por conta de todos os recursos funcionais envolvidos.',
      duration: 100000,
    });
  }, []);

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
