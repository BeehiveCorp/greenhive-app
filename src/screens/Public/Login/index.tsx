import { useState } from 'react';
import { useTheme } from 'styled-components/native';

import { Box, Greenhive, Input, Text, Wrapper } from '@/components';
import { FONT_FAMILY } from '@/theme';

import { Form, Logo, Link, PasswordLink } from './styles';
import { Masks } from 'react-native-mask-input';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();

  return (
    <Wrapper>
      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
        <Logo>
          <Greenhive.Icon size={60} />
        </Logo>

        <Form>
          <Text heading size="super-lg">
            Boas vindas!
          </Text>

          <Text size="sm" style={{ marginTop: 16, marginBottom: 48 }}>
            Faça login ou{' '}
            <Link onPress={() => console.log('new')}>crie uma nova conta.</Link>
          </Text>

          <Input
            label="Username"
            value={username}
            onChangeText={setUsername}
            containerStyle={{ marginBottom: 16 }}
            placeholder="Insira seu username"
          />

          <Input
            label="Senha"
            value={password}
            onChangeText={setPassword}
            placeholder="Insira sua senha"
            isPassword
          />

          <PasswordLink>Esqueci minha senha</PasswordLink>
        </Form>
      </Box>
    </Wrapper>
  );
}
