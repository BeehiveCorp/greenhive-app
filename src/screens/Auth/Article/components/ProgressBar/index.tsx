import React, { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import Animated, {
  BounceIn,
  BounceInDown,
  BounceOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { Text } from '@/components';

import { ProgressBarProps } from './types';
import { Container, Wrapper, Tracker, Progress } from './styles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  onRead,
  wasRead,
}) => {
  if (wasRead) return null;

  const theme = useTheme();

  const containerWidth = useSharedValue(200);

  const onEndReached = percentage >= 96;

  const containerStyle = useAnimatedStyle(() => ({
    width: withSpring(containerWidth.value, { mass: 0.3 }),
  }));

  useEffect(() => {
    containerWidth.value = onEndReached ? 60 : 200;
  }, [percentage]);

  return (
    <Container style={containerStyle}>
      <Wrapper>
        {onEndReached ? (
          <AnimatedTouchableOpacity
            entering={BounceIn}
            exiting={BounceOut}
            onPress={onRead}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="check-all"
              size={24}
              color={theme.primary}
            />
          </AnimatedTouchableOpacity>
        ) : (
          <Animated.View
            style={{ flexDirection: 'row', alignItems: 'center' }}
            exiting={BounceInDown}
          >
            <Text>{percentage.toFixed(0)}%</Text>

            <Tracker>
              <Progress percentage={percentage} />
            </Tracker>
          </Animated.View>
        )}
      </Wrapper>
    </Container>
  );
};

export { ProgressBar };
