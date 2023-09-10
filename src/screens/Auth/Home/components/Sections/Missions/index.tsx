import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Box } from '@/components';

import { Container, Item, Name } from './styles';

const Missions: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box horizontal>
        <Item>
          <MaterialCommunityIcons
            name="cellphone-screenshot"
            size={24}
            color={theme.primary}
          />
          <Name>Busca sustentável</Name>
        </Item>

        <Item>
          <MaterialCommunityIcons
            name="recycle-variant"
            size={24}
            color={theme.primary}
          />
          <Name>Descarte correto</Name>
        </Item>

        <Item>
          <MaterialCommunityIcons
            name="basket-check-outline"
            size={24}
            color={theme.primary}
          />
          <Name>Consumo consciente</Name>
        </Item>
      </Box>
    </Container>
  );
};

export { Missions };
