import styled from 'styled-components/native';

export const Step = styled.View<{ lastStep: boolean; nonCompleteStep: boolean }>`
  flex: 1;
  height: 2px;
  background-color: ${({ nonCompleteStep, theme }) =>
    nonCompleteStep ? theme.container : theme.secondary};
  margin-right: ${({ lastStep }) => (lastStep ? 0 : 8)}px;
`;
