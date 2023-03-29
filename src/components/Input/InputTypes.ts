export interface InputProps {
  withLabel?: boolean;
  labelTitle?: string;
  type: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
