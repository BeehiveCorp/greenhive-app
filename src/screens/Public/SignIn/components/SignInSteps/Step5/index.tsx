import { Image } from 'react-native';

import { Box, Button } from '@/components';
import { GLOBAL_METRICS } from '@/theme';

import illustration from './assets/sustainability.png';

const Step5: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <Box style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing, flex: 1 }}>
      <Box style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={illustration}
          style={{
            width: 240,
            height: 240,
            objectFit: 'cover',
            marginTop: 40,
          }}
        />
      </Box>

      <Button text="Começar" primary onPress={onNextStep} />
    </Box>
  );
};

export default Step5;
