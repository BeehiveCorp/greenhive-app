import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { FONT_SIZE, STATUS_COLORS } from '@/theme';
import { TOAST_VARIANTS } from '@/utils/constants';

import Text from '../Text';

import { ToastProps } from './types';
import { BlurWrapper, Content, getTitleStyle } from './styles';

const Toast: React.FC<ToastProps> = ({ variant, message, description }) => {
  const theme = useTheme();

  const accent = STATUS_COLORS[variant ?? 'info'];

  const getIconNameBasedOnVariant = ():
    | 'close-circle-outline'
    | 'alert-rhombus-outline'
    | 'alert-circle-outline'
    | 'check-circle-outline' => {
    if (variant === TOAST_VARIANTS.Error) return 'close-circle-outline';
    if (variant === TOAST_VARIANTS.Info) return 'alert-rhombus-outline';
    if (variant === TOAST_VARIANTS.Success) return 'check-circle-outline';
    if (variant === TOAST_VARIANTS.Warning) return 'alert-circle-outline';
    return 'alert-rhombus-outline';
  };

  return (
    <BlurWrapper accent={accent} hasDescription={!!description}>
      <MaterialCommunityIcons
        name={getIconNameBasedOnVariant()}
        size={24}
        color={accent}
      />

      <Content>
        {!!message && (
          <Text
            heading
            style={getTitleStyle({ theme, accent, hasDescription: !!description })}
          >
            {message}
          </Text>
        )}

        {!!description && (
          <Text size="sm" style={{ lineHeight: FONT_SIZE.Small * 1.5 }}>
            {description}
          </Text>
        )}
      </Content>
    </BlurWrapper>
  );
};

export default Toast;
