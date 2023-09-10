import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { useUser } from '@/contexts/UserContext';
import { Text, Avatar, Box, Level } from '@/components';

import { getRelativeUri } from '@/utils/utilities';

import {
  Container,
  Data,
  Hero,
  HeroName,
  Ambicoins,
  Quantity,
  LevelContainer,
  AvatarContainer,
} from './styles';

const MainHeader = () => {
  const { user } = useUser();
  const theme = useTheme();

  return (
    <Container horizontal>
      <Box horizontal spaceBetween style={{ flex: 1 }}>
        <Box horizontal alignItemsCenter>
          <AvatarContainer>
            <Avatar size={48} />

            <LevelContainer>
              <Level size={32} level={user?.level} />
            </LevelContainer>
          </AvatarContainer>

          <Data>
            <Text heading size="lg">
              {user?.name}
            </Text>

            <Hero horizontal alignItemsCenter>
              <Text size="sm">
                Como <HeroName>{user?.hero.name}</HeroName>
              </Text>

              <Image
                source={getRelativeUri(user?.hero?.avatar_url ?? '')}
                style={{ width: 20, height: 20, marginLeft: 8, borderRadius: 10 }}
              />
            </Hero>
          </Data>
        </Box>

        <Ambicoins horizontal alignItemsCenter>
          <Quantity>{user?.ambicoins}</Quantity>

          <MaterialCommunityIcons
            name="leaf-circle-outline"
            size={20}
            color={theme.secondary}
          />
        </Ambicoins>
      </Box>
    </Container>
  );
};

export default MainHeader;
