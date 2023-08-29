import styled from 'styled-components/native';

import { Box, Text } from '@/components';

export const HeroCard = styled(Box)`
  width: 240px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 24px;
  padding: 24px;
`;

export const Avatar = styled.Image.attrs(({ source }) => ({
  source,
}))`
  background-color: ${({ theme }) => theme.background};
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-self: center;
`;

export const Name = styled(Text)`
  margin-top: 24px;
  text-align: center;
`;

export const Description = styled(Text)`
  margin-top: 8px;
  margin-bottom: 24px;
  text-align: center;
`;
