import styled from 'styled-components/native';

import { FONT_FAMILY, GLOBAL_METRICS } from '@/theme';

export const Logo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.View`
  width: 100%;
  padding: 80px ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-family: ${FONT_FAMILY.SemiBold};
  text-decoration-line: underline;
`;

export const PasswordLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-family: ${FONT_FAMILY.Regular};
  align-self: flex-end;
  margin-top: 16px;
`;
