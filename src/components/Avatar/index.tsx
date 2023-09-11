import { Image } from 'expo-image';

import { useUser } from '@/contexts/UserContext';
import { getInitials, getRelativeUri } from '@/utils/utilities';

import { AvatarProps } from './types';

import { Container, Initials } from './styles';

const Avatar: React.FC<AvatarProps> = ({ size = 56, containerStyle, name, uri }) => {
  const { user } = useUser();

  const nameWhenNoAvatar = name ?? user?.name;
  const avatarUri = uri ?? user?.avatar_url;

  return (
    <Container size={size} style={containerStyle}>
      {avatarUri ? (
        <Image
          source={{ uri: getRelativeUri(avatarUri) }}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <Initials>{getInitials(nameWhenNoAvatar ?? '')}</Initials>
      )}
    </Container>
  );
};

export default Avatar;
