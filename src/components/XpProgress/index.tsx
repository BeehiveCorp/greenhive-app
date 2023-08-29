import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';

import { Bar, Progress, Container, Xp } from './styles';

const XpProgress = () => {
  const { user } = useUser();
  const [xpTextWidth, setXpTextWidth] = useState(0);

  const percentage = 35;

  return (
    <Container>
      <Xp
        onLayout={(e) => setXpTextWidth(e.nativeEvent.layout.width)}
        percentage={percentage}
        xpTextWidth={+xpTextWidth.toFixed(0)}
      >
        378xp
      </Xp>

      <Bar>
        <Progress percentage={percentage} />
      </Bar>
    </Container>
  );
};

export default XpProgress;
