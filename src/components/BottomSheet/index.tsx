import { forwardRef, useCallback } from 'react';

import GorgonBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import Box from '../Box';
import Text from '../Text';

import { BottomSheetProps } from './types';
import useBottomSheetStyles from './styles';

const BottomSheet = forwardRef<GorgonBottomSheet, BottomSheetProps>(
  (
    {
      bottomInset = 32,
      description,
      children,
      snapPoints = ['25%', '50%', '85%'],
      title,
    },
    ref
  ) => {
    const bottomSheetStyles = useBottomSheetStyles();

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="close"
          disappearsOnIndex={-1}
          appearsOnIndex={1}
          opacity={0.65}
        />
      ),
      []
    );

    return (
      <GorgonBottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        style={bottomSheetStyles.sheet}
        containerStyle={bottomSheetStyles.sheetContainer}
        backgroundStyle={bottomSheetStyles.sheetBackground}
        handleStyle={bottomSheetStyles.handle}
        handleIndicatorStyle={bottomSheetStyles.handleIndicator}
        backdropComponent={renderBackdrop}
        bottomInset={bottomInset}
        detached
      >
        <Box style={bottomSheetStyles.container}>
          {(!!title || !!description) && (
            <Box style={bottomSheetStyles.header}>
              {!!title && <Text heading>{title}</Text>}

              {!!description && (
                <Text
                  size="sm"
                  style={{ marginTop: !!title ? 8 : 0, lineHeight: 20 }}
                >
                  {description}
                </Text>
              )}
            </Box>
          )}

          <Box>{children}</Box>
        </Box>
      </GorgonBottomSheet>
    );
  }
);

export default BottomSheet;
