import styled from 'styled-components';
import { InputProps } from './InputTypes';

export const StyledInput = styled.div<InputProps>``;

export const StyledInputLabel = styled('label')`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
