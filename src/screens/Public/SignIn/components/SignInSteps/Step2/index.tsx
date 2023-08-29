import { useEffect, useState } from 'react';

import { Box, Button, Input } from '@/components';
import { useUser } from '@/contexts/UserContext';
import { User, UserService } from '@/services';
import { GLOBAL_METRICS } from '@/theme';

const Step2: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const { user, setUser } = useUser();

  const [email, setEmail] = useState(user?.email ?? '');
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  const validateEmail = async () => {
    const { data } = await UserService.findByEmail({ email });

    if (data?.id) {
      setHasError(true);
      setMessage('Email já cadastrado');
      setUser({ ...user, email: '' } as User);
    } else {
      setHasError(false);
      setUser({ ...user, email } as User);
    }
  };

  useEffect(() => {
    if (email.trim().length > 0) {
      validateEmail();
    } else {
      setUser({ ...user, email: '' } as User);
    }
  }, [email]);

  const isEmailEmpty = email.trim().length === 0;

  const shouldButtonDisable = user?.email?.trim().length === 0;

  return (
    <Box style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing, flex: 1 }}>
      <Box style={{ flex: 1 }}>
        <Input
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="Insira seu e-mail"
          messageType={!isEmailEmpty ? (hasError ? 'ERROR' : undefined) : undefined}
          message={!isEmailEmpty ? (hasError ? message : undefined) : undefined}
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

export default Step2;
