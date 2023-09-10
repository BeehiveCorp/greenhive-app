import { useContext } from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import Constants from 'expo-constants';
import { useTheme } from 'styled-components/native';

import { Box, Scrollable, Text, Wrapper, XpProgress, Button } from '@/components';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import { useGamification } from '@/contexts/GamificationContext';

import { GLOBAL_METRICS } from '@/theme';
import { BOTTOM_TAB_ITEM_SIZE } from '@/navigation/constants';

import { MainHeader } from './components';

import {
  Ambinews,
  Article,
  Chapter,
  Difficulty,
  DifficultyText,
  Item,
  ItemText,
  Label,
  Missions,
  Rpg,
} from './styles';

import { ARTICLES } from './mock';

import Greenie from './assets/greenie.png';

export default function Home() {
  const { toggle } = useContext(ThemeContext);
  const { logout } = useUser();
  const { updateStats } = useGamification();
  const theme = useTheme();

  return (
    <Wrapper style={{ paddingTop: 0 }}>
      <Scrollable
        mainNavigation
        paddingTop={Constants.statusBarHeight}
        paddingBottom={BOTTOM_TAB_ITEM_SIZE + 88}
      >
        <MainHeader />

        <Button
          text="Up"
          containerStyle={{ marginTop: 16 }}
          onPress={() => {
            updateStats({
              ambicoinsGains: 0,
              xpGains: 40,
            });
          }}
        />

        <Ambinews>
          <Label style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing }}>
            Ambinews
          </Label>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: GLOBAL_METRICS.horizontalSpacing,
            }}
          >
            {ARTICLES.map((article, idx) => (
              <Article
                key={article.title}
                style={{ marginRight: idx < ARTICLES.length - 1 ? 12 : 0 }}
              >
                <Image
                  source={{ uri: article.picture }}
                  style={{ width: '100%', height: 100, borderRadius: 12 }}
                />

                <ItemText numberOfLines={2} style={{ marginTop: 8 }}>
                  {article.title}
                </ItemText>
              </Article>
            ))}
          </ScrollView>
        </Ambinews>

        <Missions>
          <Label>Missões</Label>

          <Box horizontal>
            <Item>
              <MaterialCommunityIcons
                name="cellphone-screenshot"
                size={24}
                color={theme.primary}
              />
              <ItemText>Busca sustentável</ItemText>
            </Item>

            <Item>
              <MaterialCommunityIcons
                name="recycle-variant"
                size={24}
                color={theme.primary}
              />
              <ItemText>Descarte correto</ItemText>
            </Item>

            <Item>
              <MaterialCommunityIcons
                name="basket-check-outline"
                size={24}
                color={theme.primary}
              />
              <ItemText>Consumo consciente</ItemText>
            </Item>
          </Box>
        </Missions>

        <Rpg>
          <Label>RPG</Label>

          <Chapter>
            <Box
              style={{ marginBottom: 24 }}
              horizontal
              spaceBetween
              alignItemsCenter
            >
              <Box horizontal alignItemsCenter>
                <Image
                  source={Greenie}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 8,
                    borderRadius: 20,
                  }}
                />

                <Text heading>Greenie</Text>
              </Box>

              <Difficulty>
                <DifficultyText>Difícil</DifficultyText>
              </Difficulty>
            </Box>

            <Text heading>O Mundo da Reciclagem II</Text>

            <Text style={{ marginTop: 8, marginBottom: 16 }}>
              Todavia, o novo modelo estrutural aqui preconizado auxilia a preparação
              e a composição das novas proposições.
            </Text>

            <Button
              containerStyle={{ backgroundColor: theme.background }}
              text="Continuar"
            />
          </Chapter>
        </Rpg>

        <Box style={{ flex: 1, marginTop: 16 }}>
          <Button
            containerStyle={{ backgroundColor: 'transparent' }}
            text="Toggle theme"
            onPress={toggle}
          />
          <Button
            containerStyle={{ backgroundColor: 'transparent' }}
            text="Logout"
            onPress={logout}
          />
        </Box>
      </Scrollable>

      <XpProgress />
    </Wrapper>
  );
}
