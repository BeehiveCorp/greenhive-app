import React from 'react';
import { useTheme } from 'styled-components/native';
import { Image } from 'expo-image';

import { useUser } from '@/contexts/UserContext';
import { Box, Button, Text } from '@/components';

import { getRelativeUri } from '@/utils/utilities';

import styles, { Container, Difficulty, DifficultyText } from './styles';

const RpgShortcut: React.FC = () => {
  const theme = useTheme();
  const { user } = useUser();

  return (
    <Container>
      <Box style={{ marginBottom: 24 }} horizontal spaceBetween alignItemsCenter>
        <Box horizontal alignItemsCenter>
          <Image
            source={getRelativeUri(user?.hero?.avatar_url ?? '')}
            style={styles.heroAvatar}
          />

          <Text heading>{user?.hero?.name}</Text>
        </Box>

        <Difficulty>
          <DifficultyText>Difícil</DifficultyText>
        </Difficulty>
      </Box>

      <Text heading>O Mundo da Reciclagem II</Text>

      <Text style={{ marginTop: 8, marginBottom: 16 }}>
        Todavia, o novo modelo estrutural aqui preconizado auxilia a preparação e a
        composição das novas proposições.
      </Text>

      <Button
        containerStyle={{ backgroundColor: theme.background }}
        text="Continuar"
      />
    </Container>
  );
};

export { RpgShortcut };
