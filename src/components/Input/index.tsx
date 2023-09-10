import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Box from '@/components/Box';

import { InputProps } from './types';

import {
  FakeInputText,
  IconContainer,
  InputContainer,
  InputText,
  Label,
  Message,
  MessageContainer,
  Value,
} from './styles';

const Input: React.FC<InputProps> = ({
  label,
  mask,
  icon,
  isLoading,
  isPassword,
  onChangeText,
  onIconPress,
  placeholder,
  message,
  messageType,
  value = '',
  containerStyle,
  onPress,
  iconSize = 20,
  iconColor,
  ...rest
}) => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const onIconContainerPress = () => {
    if (isPassword) {
      setShowPassword((prev) => !prev);
      return;
    }

    onIconPress && onIconPress();
  };

  const Icon = () => {
    let iconName = icon;

    if (isPassword && value.length > 0)
      iconName = showPassword ? 'eye-off-outline' : 'eye-outline';

    return (
      <MaterialCommunityIcons
        name={iconName}
        color={
          messageType === 'SUCCESS'
            ? theme.success
            : messageType === 'ERROR'
            ? theme.error
            : iconColor
            ? iconColor
            : theme.text
        }
        size={iconSize}
      />
    );
  };

  return (
    <Box style={containerStyle}>
      {!!label && <Label messageType={messageType}>{label}</Label>}

      <InputContainer horizontal spaceBetween messageType={messageType}>
        {onPress ? (
          <FakeInputText onPress={onPress} activeOpacity={0.8}>
            <Value value={value} placeholder={placeholder}>
              {value !== '' ? value : placeholder}
            </Value>
          </FakeInputText>
        ) : (
          <InputText
            placeholderTextColor={theme.text}
            placeholder={placeholder}
            selectionColor={messageType === 'ERROR' ? theme.error : theme.primary}
            secureTextEntry={isPassword && !showPassword}
            mask={mask}
            value={value}
            autoCapitalize="none"
            onChangeText={onChangeText}
            messageType={messageType}
            {...rest}
          />
        )}

        {(!!icon || isLoading || isPassword) && (
          <TouchableOpacity
            onPress={onIconContainerPress}
            activeOpacity={1}
            style={{ height: '100%' }}
          >
            <IconContainer justifyContentCenter alignItemsCenter>
              {isLoading ? <ActivityIndicator /> : <Icon />}
            </IconContainer>
          </TouchableOpacity>
        )}
      </InputContainer>

      {!!message && messageType && (
        <MessageContainer horizontal>
          <MaterialCommunityIcons
            name={
              messageType === 'SUCCESS'
                ? 'check-circle-outline'
                : 'close-circle-outline'
            }
            size={16}
            color={messageType === 'SUCCESS' ? theme.success : theme.error}
          />
          <Message messageType={messageType} size="sm">
            {message}
          </Message>
        </MessageContainer>
      )}
    </Box>
  );
};

export default Input;
