import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';

const useBottomSheetStyles = () => {
  const theme = useTheme();
  const indicatorBottomOffset = 24;

  return StyleSheet.create({
    sheetBackground: {
      backgroundColor: theme.container,
    },
    sheetContainer: {
      marginBottom: -40,
    },
    sheet: {
      marginHorizontal: 8,
      elevation: 20,
    },
    handle: {
      top: -indicatorBottomOffset,
    },
    handleIndicator: {
      backgroundColor: theme.text,
    },
    container: {
      flex: 1,
      marginTop: -indicatorBottomOffset,
      padding: 20,
    },
    header: {
      marginBottom: 32,
    },
  });
};

export default useBottomSheetStyles;
