import { TextInputProps, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Masks } from 'react-native-mask-input';

export type InputProps = {
  label?: string;
  mask?: Masks;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  isLoading?: boolean;
  isPassword?: boolean;
  onIconPress?: () => void;
  onPress?: () => void;
  message?: string;
  messageType?: 'ERROR' | 'SUCCESS';
  containerStyle?: ViewStyle;
  iconColor?: string;
  iconSize?: number;
} & TextInputProps;
