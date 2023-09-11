import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import RenderHTML from 'react-native-render-html';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { Avatar, Box, Text, Wrapper, BottomSheet, Button } from '@/components';
import { useGamification } from '@/contexts/GamificationContext';
import { useUser } from '@/contexts/UserContext';

import { getRelativeUri } from '@/utils/utilities';
import { DEVICE_DIMENSIONS, FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';

import { ArticleService, TArticle } from '@/services/ArticleService';

import { ProgressBar } from './components';

import { ArticlesScreenProps, ScrollProps } from './types';

import { Read } from './styles';

function Article({ navigation, route }: ArticlesScreenProps) {
  const theme = useTheme();
  const { updateStats } = useGamification();
  const { user } = useUser();

  const [article, setArticle] = useState<TArticle | null>(null);

  const [wasRead, setWasRead] = useState<boolean | undefined>(true);
  const [readingPercentage, setReadingPercentage] = useState(0);

  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const getArticle = async () => {
    const { id } = route.params;

    const { data, error } = await ArticleService.find(id);

    if (error) return;

    setArticle(data ?? null);
    setWasRead(data?.readers.includes(user?.id ?? ''));

    ArticleService.view(id);
  };

  const scrollPercentage = ({
    contentOffset,
    contentSize,
    layoutMeasurement,
  }: ScrollProps) => {
    const visibleContent = Math.ceil(
      (DEVICE_DIMENSIONS.height / contentSize.height) * 100
    );

    const value = layoutMeasurement.height + contentOffset.y;
    let percentage = (value / contentSize.height) * 100;

    setReadingPercentage(percentage < visibleContent ? 0 : percentage);
  };

  const onRead = () => {
    bottomSheetRef?.current?.expand();
  };

  const markArticleAsRead = () => {
    bottomSheetRef?.current?.close();

    ArticleService.markAsRead({
      article_id: article?.id ?? '',
      reader_id: user?.id ?? '',
    });

    setTimeout(() => {
      updateStats({
        ambicoinsGains: article?.ambicoins_reward ?? 0,
        xpGains: article?.xp_reward ?? 0,
      });
    }, 700);

    navigation.goBack();
  };

  useEffect(() => {
    getArticle();
  }, []);

  const tagsStyles = React.useMemo(
    () => ({
      body: {
        fontSize: FONT_SIZE.Medium,
        fontFamily: FONT_FAMILY.Regular,
        lineHeight: FONT_SIZE.Medium * 1.8,
        color: theme.text,
      },
      p: {
        margin: 0,
      },
      h2: {
        color: theme.title,
        margin: 0,
      },
      br: {
        height: 0,
        backgroundColor: 'blue',
        margin: 0,
        padding: 0,
      },
      strong: {
        fontFamily: FONT_FAMILY.SemiBold,
        color: theme.title,
      },
    }),
    []
  );

  return (
    <Wrapper>
      <ScrollView
        onScroll={(e) => scrollPercentage(e.nativeEvent)}
        scrollEventThrottle={16}
        contentContainerStyle={{
          padding: GLOBAL_METRICS.horizontalSpacing,
          paddingBottom: 120,
        }}
      >
        <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
          <MaterialCommunityIcons name="arrow-left" color={theme.title} size={32} />
        </TouchableOpacity>

        <Box
          style={{
            marginBottom: 40,
            marginTop: 32,
          }}
        >
          <Image
            source={{ uri: getRelativeUri(article?.thumbnail_url ?? '') }}
            style={{ width: '100%', height: 100, borderRadius: 12 }}
          />

          <Box
            horizontal
            alignItemsCenter
            style={{ marginTop: 16, marginBottom: 32 }}
          >
            <Avatar
              size={24}
              uri={article?.author?.avatar_url}
              name={article?.author?.name}
            />

            {article?.created_at && (
              <Text
                size="sm"
                style={{
                  color: theme.title,
                  fontFamily: FONT_FAMILY.Bold,
                  marginLeft: 8,
                }}
              >
                {article?.author?.name} •{' '}
                {format(parseISO(article?.created_at), 'dd MMM yyyy', {
                  locale: ptBR,
                })}
              </Text>
            )}
          </Box>

          {wasRead && (
            <Box horizontal alignItemsCenter style={{ marginBottom: 16 }}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={20}
                color={theme.primary}
              />
              <Read>Lido</Read>
            </Box>
          )}

          <Text size="super-lg" heading style={{ fontFamily: FONT_FAMILY.SemiBold }}>
            {article?.title}
          </Text>
        </Box>

        <Box>
          <RenderHTML
            contentWidth={DEVICE_DIMENSIONS.width}
            source={{ html: article?.content ?? '' }}
            tagsStyles={tagsStyles}
          />
        </Box>
      </ScrollView>

      <ProgressBar
        percentage={readingPercentage}
        onRead={onRead}
        wasRead={wasRead}
      />

      <BottomSheet
        ref={bottomSheetRef}
        title="Obrigado pela leitura! :)"
        description="Pressione o botão abaixo para recolher sua recompensa e marcar o artigo como lido."
        snapPoints={[220]}
        bottomInset={80}
      >
        <Button
          text="Recolher Ambicoins"
          primary
          style={{ marginTop: 16 }}
          icon="leaf-circle-outline"
          onPress={markArticleAsRead}
        />
      </BottomSheet>
    </Wrapper>
  );
}

export default React.memo(Article);
