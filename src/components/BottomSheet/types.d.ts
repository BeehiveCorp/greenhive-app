import { ReactNode } from 'react';

export type BottomSheetProps = {
  snapPoints?: number[];
  title?: string;
  description?: string;
  bottomInset?: number;
  children?: ReactNode;
};
