import { Image } from 'expo-image';

import { useUser } from '@/contexts/UserContext';
import { getInitials, getRelativeUri } from '@/utils/utilities';

import { AvatarProps } from './types';

import { Container, Initials } from './styles';

const Avatar: React.FC<AvatarProps> = ({ size = 56, containerStyle }) => {
  const { user } = useUser();

  return (
    <Container size={size} style={containerStyle}>
      {user?.avatar_url ? (
        <Image
          source={{ uri: getRelativeUri(user.avatar_url) }}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <Initials>{getInitials(user?.name ?? '')}</Initials>
      )}
    </Container>
  );
};

export default Avatar;
