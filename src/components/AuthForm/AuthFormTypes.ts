import { ReactNode } from 'react';

export interface AuthFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
}
