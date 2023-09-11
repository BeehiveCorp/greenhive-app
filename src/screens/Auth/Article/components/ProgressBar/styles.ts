import chroma from 'chroma-js';
import { BlurView } from 'expo-blur';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 60px;
  border: 2px solid ${({ theme }) => theme.border};
  overflow: hidden;
  position: absolute;
  bottom: 32px;
  border-radius: 40px;
  align-items: center;
  align-self: center;
`;

export const Wrapper = styled(BlurView).attrs(({ theme }) => ({
  tint: theme.name,
  intensity: 56,
}))`
  height: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => chroma(theme.container).alpha(0.7).hex()};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Tracker = styled.View`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.container};
  margin-left: 8px;
`;

export const Progress = styled.View<{ percentage: number }>`
  height: 4px;
  width: ${({ percentage }) => percentage}%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary};
`;
