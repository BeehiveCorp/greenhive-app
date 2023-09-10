import { useEffect, useState } from 'react';

import { Box, Button, Input } from '@/components';
import { useUser } from '@/contexts/UserContext';
import { TUser, UserService } from '@/services';
import { GLOBAL_METRICS } from '@/theme';

const Step1: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const { user, setUser } = useUser();

  const [username, setUsername] = useState(user?.username ?? '');
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  const onNameChange = (name: string) => {
    setUser({ ...user, name } as TUser);
  };

  const validateUsername = async () => {
    const { data } = await UserService.findByUsername({ username });

    if (data?.id) {
      setHasError(true);
      setMessage('Username não disponível');
      setUser({ ...user, username: '' } as TUser);
    } else {
      setHasError(false);
      setMessage('Username disponível');
      setUser({ ...user, username } as TUser);
    }
  };

  useEffect(() => {
    if (username.trim().length > 0) {
      validateUsername();
    } else {
      setUser({ ...user, username: '' } as TUser);
    }
  }, [username]);

  const isUsernameEmpty = username.trim().length === 0;

  const shouldButtonDisable =
    user?.name?.trim().length === 0 || user?.username?.trim().length === 0;

  return (
    <Box style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing, flex: 1 }}>
      <Box style={{ flex: 1 }}>
        <Input
          label="Nome"
          containerStyle={{ marginBottom: 16 }}
          value={user?.name}
          onChangeText={onNameChange}
          placeholder="Nos diga seu nome"
        />

        <Input
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Escolha um username"
          messageType={
            !isUsernameEmpty ? (hasError ? 'ERROR' : 'SUCCESS') : undefined
          }
          message={!isUsernameEmpty ? message : undefined}
        />
      </Box>

      <Button
        text="Próximo"
        primary
        onPress={onNextStep}
        isDisabled={shouldButtonDisable}
      />
    </Box>
  );
};

export default Step1;
