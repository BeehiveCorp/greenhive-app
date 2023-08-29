import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Icon, Text } from './styles';

import { ButtonProps } from './types';
import Box from '@/components/Box';

const Button: React.FC<ButtonProps> = ({
  containerStyle,
  textStyle,
  icon,
  isDisabled,
  isLoading,
  text,
  primary,
  secondary,
  ...rest
}) => {
  return (
    <TouchableOpacity disabled={isDisabled} activeOpacity={0.8} {...rest}>
      <Container
        justifyContentCenter
        alignItemsCenter
        primary={primary}
        secondary={secondary}
        isDisabled={isDisabled}
        style={containerStyle}
      >
        {!!text && !isLoading && (
          <Text
            isDisabled={isDisabled}
            primary={primary}
            secondary={secondary}
            style={textStyle}
          >
            {text}
          </Text>
        )}

        {(isLoading || !!icon) && (
          <Box style={{ marginLeft: !!text ? 8 : 0 }}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              !!icon && (
                <Icon
                  color={textStyle?.color}
                  primary={primary}
                  secondary={secondary}
                  isDisabled={isDisabled}
                  name={icon}
                />
              )
            )}
          </Box>
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
