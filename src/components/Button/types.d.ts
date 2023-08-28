import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

export type ButtonProps = {
  text?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  primary?: boolean;
  secondary?: boolean;
} & TouchableOpacityProps;
