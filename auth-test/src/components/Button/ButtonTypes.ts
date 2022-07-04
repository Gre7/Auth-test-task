import { ReactNode } from 'react';
export interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  fullWidth?: boolean;
  background?: string;
  borderRadius?: string;
  color?: string;
  border?: string;
  padding?: string;
  children: ReactNode;
}
