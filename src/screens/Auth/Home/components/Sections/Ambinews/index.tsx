import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import { Image } from 'expo-image';

import { GLOBAL_METRICS } from '@/theme';
import { TArticle, ArticleService } from '@/services/ArticleService';

import { Article, Container, Title } from './styles';
import { getRelativeUri } from '@/utils/utilities';

const Ambinews: React.FC = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);

  const getArticles = async () => {
    const { data, error } = await ArticleService.getAll();

    if (error) return;

    setArticles(data ?? []);
  };

  useEffect(() => {
    getArticles();
  }, []);

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
