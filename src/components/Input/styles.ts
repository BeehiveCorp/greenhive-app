import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';
import chroma from 'chroma-js';

import { FONT_FAMILY, FONT_SIZE } from '@/theme';

import Box from '../Box';
import Text from '../Text';

import { InputProps } from './types';

export const Label = styled.Text<InputProps>`
  margin-bottom: 8px;
  color: ${({ theme, messageType }) => {
    if (messageType) return messageType === 'ERROR' ? theme.error : theme.success;
    return chroma(theme.text).alpha(0.5).hex();
  }};
`;

export const InputContainer = styled(Box)<InputProps>`
  height: 54px;
  width: 100%;
  background-color: ${({ theme }) => theme.container};
  border: 1px solid
    ${({ theme, messageType }) => {
      if (messageType)
        return messageType === 'ERROR'
          ? chroma(theme.error).alpha(0.3).hex()
          : chroma(theme.success).alpha(0.3).hex();
      return theme.border;
    }};
  border-radius: 8px;
`;

export const InputText = styled(MaskInput).attrs<InputProps>(({ theme }) => ({
  placeholderTextColor: chroma(theme.text).alpha(0.2).hex(),
}))`
  justify-content: center;
  flex: 1;
  padding: 0 16px;
  color: ${({ theme, messageType }) => {
    if (messageType) return messageType === 'ERROR' ? theme.error : theme.success;
    return chroma(theme.text).alpha(1).hex();
  }};
  font-family: ${FONT_FAMILY.SemiBold};
  font-size: ${FONT_SIZE.Medium}px;
`;

export const MessageContainer = styled(Box)`
  align-items: center;
  margin-top: 8px;
`;

export const IconContainer = styled(Box)`
  padding-right: 16px;
  flex: 1;
`;

export const Message = styled(Text)<InputProps>`
  margin-left: 4px;
  color: ${({ theme, messageType }) =>
    messageType === 'ERROR' ? theme.error : theme.success};
`;

export const FakeInputText = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
  padding: 0 16px;
  font-family: ${FONT_FAMILY.SemiBold};
`;

export const Value = styled(Text).attrs<InputProps>(({ size }) => ({
  size: 'md',
}))`
  color: ${({ theme, messageType, value, placeholder }) => {
    if (messageType && value) {
      return messageType === 'ERROR' ? theme.error : theme.success;
    } else {
      return value ? theme.title : chroma(theme.text).alpha(0.5).hex();
    }
  }};
  font-size: ${FONT_SIZE.Medium}px;
`;
