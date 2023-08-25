import { ScrollView } from 'react-native';

import { Wrapper } from '@/components';

import { Post } from './components/Post';

export default function Feed() {
  return (
    <Wrapper>
      <ScrollView>
        <Post
          author={'Daivd'}
          reactions={100}
          url={
            'https://www.arquiprojeto.art.br/wp-content/uploads/2021/05/1_38_ggh7VMS88m1a2e4JjXQ-scaled.jpeg'
          }
          username={'@davidlindo'}
          comments={128378273}
        />

        <Post
          author={'Isa'}
          reactions={2133}
          url={
            'https://www.arquiprojeto.art.br/wp-content/uploads/2021/05/1_38_ggh7VMS88m1a2e4JjXQ-scaled.jpeg'
          }
          username={'@davidlindo'}
        />

        <Post
          author={'Vylle'}
          reactions={100}
          url={
            'https://www.arquiprojeto.art.br/wp-content/uploads/2021/05/1_38_ggh7VMS88m1a2e4JjXQ-scaled.jpeg'
          }
          username={'@davidlindo'}
        />

        <Post
          author={'Daivd'}
          reactions={100}
          url={
            'https://www.arquiprojeto.art.br/wp-content/uploads/2021/05/1_38_ggh7VMS88m1a2e4JjXQ-scaled.jpeg'
          }
          username={'@davidlindo'}
        />
      </ScrollView>
    </Wrapper>
  );
}
