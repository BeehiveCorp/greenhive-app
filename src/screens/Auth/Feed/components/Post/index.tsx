import React from 'react';
import { Image } from 'react-native';

import { Box, Text } from '@/components';

import styles from './styles';
import { PostProps } from './types';

const Post: React.FC<PostProps> = ({
  author,
  comments,
  reactions,
  url,
  username,
}) => {
  return (
    <Box>
      <Text>{author}</Text>
      <Text>{username}</Text>

      <Image source={{ uri: url }} style={styles.image} />

      <Text>
        {reactions} Impressoes e {comments} comentarios
      </Text>
    </Box>
  );
};

export { Post };
