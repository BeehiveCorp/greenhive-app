import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components/native';

import { Box, Button, Greenhive, Input, Text, Wrapper } from '@/components';
import { useUser } from '@/contexts/UserContext';
import { UserService } from '@/services';
import { showToast } from '@/utils/utilities';

import { Form, Logo, Link, PasswordLink } from './styles';

import { LoginScreenProps } from './types';

export default function Login({ navigation }: LoginScreenProps) {
  const { storeUser } = useUser();
  const theme = useTheme();

  const [email, setEmail] = useState('almeida@gmail.com');
  const [password, setPassword] = useState('12345678');

  const onLogin = async () => {
    const { data, error } = await UserService.login({ email, password });

    if (error || !data?.user) {
      showToast({ message: error });
      return;
    }

    storeUser(data?.user);
    await AsyncStorage.setItem('@token', JSON.stringify(data?.token));
  };

  const onNewAccountPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Wrapper>
      <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
        <Logo>
          <Greenhive.Icon size={60} color={theme.title} />
        </Logo>

        <Form>
          <Text heading size="super-lg">
            Boas vindas!
          </Text>

          <Text size="sm" style={{ marginTop: 16, marginBottom: 48 }}>
            Faça login ou{' '}
            <Link onPress={onNewAccountPress}>crie uma nova conta.</Link>
          </Text>

          <Input
            label="Username"
            value={email}
            onChangeText={setEmail}
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

          <Button
            containerStyle={{ marginTop: 32, width: 54, alignSelf: 'flex-end' }}
            icon="arrow-right"
            primary
            onPress={onLogin}
          />
        </Form>
      </Box>
    </Wrapper>
  );
}
