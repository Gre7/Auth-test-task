import React from 'react';
import { ButtonProps } from './ButtonTypes';
import { StyledButton } from './ButtonStyled';

const Button = ({ type = 'button', children, ...restProp }: ButtonProps) => {
  return (
    <StyledButton type={type} {...restProp}>
      {children}
    </StyledButton>
  );
};

export default Button;
