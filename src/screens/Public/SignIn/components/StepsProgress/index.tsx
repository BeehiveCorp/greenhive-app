import { Box } from '@/components';

import { StepsProgressProps } from './types';
import { Step } from './styles';

const StepsProgress: React.FC<StepsProgressProps> = ({
  currentStep = 0,
  totalSteps = 0,
}) => {
  const stepsToMap = Array(totalSteps).fill(null);

  return (
    <Box horizontal spaceBetween>
      {stepsToMap.map((step, idx) => (
        <Step
          key={idx}
          lastStep={idx === totalSteps}
          nonCompleteStep={idx > currentStep}
        />
      ))}
    </Box>
  );
};

export default StepsProgress;
