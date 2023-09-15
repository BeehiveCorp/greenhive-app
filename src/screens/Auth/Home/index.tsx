import { useContext } from 'react';

import Constants from 'expo-constants';

import { Box, Button, Scrollable, Wrapper, XpProgress } from '@/components';

import { ThemeContext } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';

import { BOTTOM_TAB_ITEM_SIZE } from '@/navigation/constants';

import { Label, Row } from './styles';

import { Sections } from './components';
import { FONT_SIZE } from '@/theme';

import { HomeScreenProps } from './types';

export default function Home({ navigation }: HomeScreenProps) {
  const { toggle } = useContext(ThemeContext);
  const { logout } = useUser();

  const onCheckAllArticles = () => {
    navigation.navigate('Articles');
  };

  return (
    <Wrapper style={{ paddingTop: 0 }}>
      <Scrollable
        mainNavigation
        paddingTop={Constants.statusBarHeight + 12}
        paddingBottom={BOTTOM_TAB_ITEM_SIZE + 120}
      >
        <Row>
          <Label>Ambinews</Label>

          <Button
            text="Ver tudo"
            icon="arrow-right"
            primary
            containerStyle={{
              backgroundColor: 'transparent',
              padding: 0,
              height: 24,
              width: 'auto',
            }}
            textStyle={{ fontSize: FONT_SIZE.Small }}
            onPress={onCheckAllArticles}
          />
        </Row>
        <Sections.Ambinews />

        <Box style={{ marginVertical: 24 }}>
          <Row>
            <Label>Missões</Label>
          </Row>
          <Sections.Missions />
        </Box>

        <Row>
          <Label>Último capítulo</Label>
        </Row>
        <Sections.RpgShortcut />

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
