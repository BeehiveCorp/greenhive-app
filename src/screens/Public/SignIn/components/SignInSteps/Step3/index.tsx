import { useEffect, useState } from 'react';

import { Box, Button, Input } from '@/components';
import { useUser } from '@/contexts/UserContext';
import { User } from '@/services';
import { GLOBAL_METRICS } from '@/theme';

const Step3: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const { user, setUser } = useUser();

  const [repeatedPassword, setRepeatedPassword] = useState('12345678');

  const isSomePasswordEmpty =
    user?.password?.trim().length === 0 || repeatedPassword.trim().length === 0;

  const shouldButtonDisable =
    user?.password !== repeatedPassword || isSomePasswordEmpty;

  const generateErrorMessage = () => {
    if (isSomePasswordEmpty || !shouldButtonDisable) return undefined;

    return 'As senhas são diferentes';
  };

  const generateErrorMessageType = (): undefined | 'ERROR' => {
    if (isSomePasswordEmpty || !shouldButtonDisable) return undefined;

    return 'ERROR';
  };

  const onPasswordChange = (password: string) => {
    setUser({ ...user, password } as User);
  };

  return (
    <Box style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing, flex: 1 }}>
      <Box style={{ flex: 1 }}>
        <Input
          label="Senha"
          value={user?.password ?? ''}
          onChangeText={onPasswordChange}
          placeholder="Insira sua senha"
          containerStyle={{ marginBottom: 16 }}
          isPassword
        />

        <Input
          label="Repita a senha"
          value={repeatedPassword}
          onChangeText={setRepeatedPassword}
          placeholder="Confirme sua senha"
          messageType={generateErrorMessageType()}
          message={generateErrorMessage()}
          isPassword
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

export default Step3;
