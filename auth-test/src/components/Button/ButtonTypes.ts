import { ReactNode } from 'react';
export interface ButtonProps {
  handleClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  fullWidth?: boolean;
  background?: string;
  borderRadius?: string;
  color?: string;
  border?: string;
  padding?: string;
  children: ReactNode;
}
