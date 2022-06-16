import React, { useMemo } from 'react';
import { InputProps } from './InputTypes';
import { StyledInputLabel } from './InputStyled';

const Input = ({
  withLabel,
  labelTitle,
  type,
  className,
  onChange,
}: InputProps) => {
  const input = useMemo(() => {
    if (!withLabel) {
      return (
        <input type={type} className={className} onChange={onChange}></input>
      );
    } else {
      return (
        <StyledInputLabel>
          {labelTitle ? labelTitle : ''}
          <input type={type} onChange={onChange} className={className}></input>
        </StyledInputLabel>
      );
    }
  }, [className, onChange, labelTitle, type, withLabel]);

  return <>{input}</>;
};

export default Input;
