import { useContext, useRef } from 'react';
import { Button, ScrollView } from 'react-native';

import GorgonBottomSheet from '@gorhom/bottom-sheet';

import { Box, Text, Wrapper, BottomSheet } from '@/components';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function Feed() {
  const { toggle } = useContext(ThemeContext);
  const bottomSheetRef = useRef<GorgonBottomSheet>(null);

  const callBottomSheet = () => {
    bottomSheetRef?.current?.expand();
  };

  return (
    <Wrapper>
      <ScrollView>
        <Box style={{ flex: 1 }} alignItemsCenter justifyContentCenter>
          <Text size="sm">Feed</Text>

          <Button title="Toggle theme" onPress={toggle} />
          <Button title="Call bottom sheet" onPress={callBottomSheet} />
        </Box>
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        title="Oi, bottom"
        description="Essa é a descrição dessa brincadeira"
      >
        <Box>
          <Text>Esse é o feed, ein</Text>
        </Box>
      </BottomSheet>
    </Wrapper>
  );
}
