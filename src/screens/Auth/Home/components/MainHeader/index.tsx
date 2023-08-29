import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { useUser } from '@/contexts/UserContext';
import { Text, Avatar, Box } from '@/components';

import { Container, Data, Hero, HeroName, Ambicoins, Quantity } from './styles';

import Greenie from '../../assets/greenie.png';

const MainHeader = () => {
  const { user } = useUser();
  const theme = useTheme();

  return (
    <Container horizontal>
      <Box horizontal spaceBetween style={{ flex: 1 }}>
        <Box horizontal alignItemsCenter>
          <Avatar size={64} />

          <Data>
            <Text heading>{user?.name}</Text>

            <Hero horizontal alignItemsCenter>
              <Text>
                Como <HeroName>Greenie</HeroName>
              </Text>

              <Image
                source={Greenie}
                style={{ width: 20, height: 20, marginLeft: 8, borderRadius: 10 }}
              />
            </Hero>
          </Data>
        </Box>

        <Ambicoins horizontal alignItemsCenter>
          <Quantity>300</Quantity>
          <MaterialCommunityIcons
            name="tree-outline"
            size={20}
            color={theme.secondary}
          />
        </Ambicoins>
      </Box>
    </Container>
  );
};

export default MainHeader;
