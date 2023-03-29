import styled from 'styled-components';
import { ButtonProps } from './ButtonTypes';

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  background: ${({ background }) =>
    background ? background : 'rgb(242, 183, 5)'};
  border: ${({ border }) => (border ? border : 'none')};
  color: ${({ color }) => (color ? color : 'white')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  cursor: pointer;
`;
