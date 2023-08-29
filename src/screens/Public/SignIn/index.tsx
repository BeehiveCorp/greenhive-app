import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HeroService, THero } from '@/services/HeroService';
import { useUser } from '@/contexts/UserContext';
import { Wrapper, Box, Button, Text } from '@/components';
import { showToast } from '@/utils/utilities';
import { GLOBAL_METRICS } from '@/theme';

import { SignInSteps, StepsProgress } from './components';

import { SignInScreenProps } from './types';

import { Content } from './styles';
import { HEADERS } from './data';

export default function SignIn({ navigation }: SignInScreenProps) {
  const theme = useTheme();
  const { user } = useUser();

  const [step, setStep] = useState(1);
  const [heroes, setHeroes] = useState<THero[]>([]);

  const signNewUserIn = () => {
    console.log('Sign In', user);
  };

  const onPreviousStepPress = () => {
    if (step === 1) {
      navigation.goBack();
      return;
    }

    setStep((prev) => prev - 1);
  };

  const onNextStepPress = () => {
    if (step === 5) {
      signNewUserIn();
      return;
    }

    setStep((prev) => prev + 1);
  };

  const getHeroes = async () => {
    const { data, error } = await HeroService.getAll();

    if (error) {
      showToast({ message: error });
      return;
    }

    setHeroes(data ?? []);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Box
          style={{
            marginBottom: 40,
            paddingHorizontal: GLOBAL_METRICS.horizontalSpacing,
          }}
        >
          <StepsProgress currentStep={step - 1} totalSteps={5} />
        </Box>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPreviousStepPress}
          style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing }}
        >
          <MaterialCommunityIcons name="arrow-left" color={theme.title} size={32} />
        </TouchableOpacity>

        <Box
          style={{
            marginBottom: 40,
            marginTop: 32,
            paddingHorizontal: GLOBAL_METRICS.horizontalSpacing,
          }}
        >
          <Text size="super-lg" heading style={{ marginBottom: 12 }}>
            {HEADERS[step - 1].title}
          </Text>

          <Text size="sm" style={{ lineHeight: 24 }}>
            {HEADERS[step - 1].description}
          </Text>
        </Box>

        <Box style={{ flex: 1 }}>
          {step === 1 ? (
            <SignInSteps.Step1 onNextStep={onNextStepPress} />
          ) : step === 2 ? (
            <SignInSteps.Step2 onNextStep={onNextStepPress} />
          ) : step === 3 ? (
            <SignInSteps.Step3 onNextStep={onNextStepPress} />
          ) : step === 4 ? (
            <SignInSteps.Step4 heroes={heroes} onNextStep={onNextStepPress} />
          ) : (
            <SignInSteps.Step5 onNextStep={onNextStepPress} />
          )}
        </Box>
      </Content>
    </Wrapper>
  );
}
