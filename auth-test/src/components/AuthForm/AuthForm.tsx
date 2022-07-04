import React from 'react';
import { AuthFormProps } from './AuthFormTypes';
import { StyledAuthForm } from './AuthFormStyled';

const AuthForm = ({ handleSubmit, children }: AuthFormProps) => {
  return <StyledAuthForm onSubmit={handleSubmit}>{children}</StyledAuthForm>;
};

export default AuthForm;
