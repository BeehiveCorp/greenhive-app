import { Dimensions } from 'react-native';

export const DEVICE_DIMENSIONS = Object.freeze({
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
});

export const GLOBAL_METRICS = Object.freeze({
  horizontalSpacing: 24,
});
