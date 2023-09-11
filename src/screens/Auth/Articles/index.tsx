import { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import { Box, Input, Text, Wrapper } from '@/components';
import { useUser } from '@/contexts/UserContext';

import { getRelativeUri } from '@/utils/utilities';
import { GLOBAL_METRICS } from '@/theme';

import { ArticleService, TArticle } from '@/services/ArticleService';

import { ArticlesScreenProps } from './types';
import { Article, Title, Read } from './styles';

export default function Articles({ navigation }: ArticlesScreenProps) {
  const theme = useTheme();
  const { user } = useUser();

  const [search, setSearch] = useState('');

  const [articles, setArticles] = useState<TArticle[]>([]);

  const getArticles = async () => {
    const { data, error } = await ArticleService.getAll();

    if (error) return;

    setArticles(data ?? []);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const searchedArticles = articles.filter((article) => {
    const query = search.trim().toLowerCase();
    const title = article.title.trim().toLowerCase();

    return title.includes(query);
  });

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
          <Text size="super-lg" heading style={{ marginBottom: 16 }}>
            Explore nosso acervo de artigos
          </Text>

          <Text size="sm" style={{ lineHeight: 24 }}>
            Conheça todos os artigos publicados pela Greenhive + Ambipar.
          </Text>
        </Box>

        <Input
          onChangeText={setSearch}
          value={search}
          icon="magnify"
          placeholder="Pesquise por nome, descrição..."
          iconSize={24}
          iconColor={theme.primary}
        />

        <Box style={{ marginTop: 32 }}>
          {searchedArticles.map((article, idx) => (
            <Article
              key={article.title}
              style={{ marginRight: idx < articles.length - 1 ? 16 : 0 }}
              onPress={() =>
                navigation.navigate('Article', { id: article?.id ?? '' })
              }
            >
              <Image
                source={{ uri: getRelativeUri(article.thumbnail_url) }}
                style={{ width: '100%', height: 100, borderRadius: 12 }}
              />

              <Title numberOfLines={2} style={{ marginTop: 16 }}>
                {article.title}
              </Title>

              {article?.readers.includes(user?.id ?? '') && (
                <Box horizontal alignItemsCenter style={{ marginTop: 20 }}>
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    size={20}
                    color={theme.primary}
                  />
                  <Read>Lido</Read>
                </Box>
              )}
            </Article>
          ))}
        </Box>
      </ScrollView>
    </Wrapper>
  );
}
