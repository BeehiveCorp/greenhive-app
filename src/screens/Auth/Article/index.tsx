import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import RenderHTML from 'react-native-render-html';

import { Avatar, Box, Text, Wrapper } from '@/components';

import { getRelativeUri } from '@/utils/utilities';
import { DEVICE_DIMENSIONS, FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';

import { ArticleService, TArticle } from '@/services/ArticleService';

import { ArticlesScreenProps } from './types';

function Article({ navigation, route }: ArticlesScreenProps) {
  const theme = useTheme();

  const [article, setArticle] = useState<TArticle | null>(null);

  const getArticle = async () => {
    const { id } = route.params;

    const { data, error } = await ArticleService.find(id);

    if (error) return;

    setArticle(data ?? null);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={{ padding: GLOBAL_METRICS.horizontalSpacing }}
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

          <Text size="super-lg" heading style={{ fontFamily: FONT_FAMILY.SemiBold }}>
            {article?.title}
          </Text>
        </Box>

        <Box>
          <RenderHTML
            contentWidth={DEVICE_DIMENSIONS.width}
            source={{ html: article?.content ?? '' }}
            tagsStyles={{
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
            }}
          />
        </Box>
      </ScrollView>
    </Wrapper>
  );
}

export default React.memo(Article);
