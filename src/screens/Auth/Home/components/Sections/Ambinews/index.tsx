import React, { useCallback, useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { GLOBAL_METRICS } from '@/theme';
import { TArticle, ArticleService } from '@/services/ArticleService';

import { getRelativeUri } from '@/utils/utilities';
import { HomeScreenProps } from '../../../types';

import { Article, Container, Title } from './styles';

const Ambinews: React.FC = () => {
  const navigation = useNavigation<HomeScreenProps['navigation']>();

  const [articles, setArticles] = useState<TArticle[]>([]);

  const getArticles = async () => {
    const { data, error } = await ArticleService.getAll();

    if (error) return;

    setArticles(data ?? []);
  };

  useFocusEffect(
    useCallback(() => {
      getArticles();
    }, [])
  );

  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: GLOBAL_METRICS.horizontalSpacing,
        }}
      >
        {articles.map((article, idx) => (
          <Article
            key={article.title}
            style={{ marginRight: idx < articles.length - 1 ? 12 : 0 }}
            onPress={() => navigation.navigate('Article', { id: article?.id ?? '' })}
          >
            <Image
              source={{ uri: getRelativeUri(article.thumbnail_url) }}
              style={{ width: '100%', height: 100, borderRadius: 12 }}
            />

            <Title numberOfLines={2} style={{ marginTop: 8 }}>
              {article.title}
            </Title>
          </Article>
        ))}
      </ScrollView>
    </Container>
  );
};

export { Ambinews };
