import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';

import Input from '../../components/Input';
import { Link } from 'react-router-dom';

export const StyledLoginPageContainer = styled('div')`
  background: url(../images/authBackground.jpg) border-box center center/cover
    no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledAuthFormPhoneInput = styled(PhoneInput)`
  .form-control {
    width: 263px;
    height: 20px;
    border-radius: 5px;
  }
`;

export const StyledAuthFormPassInput = styled(Input)`
  height: 20px;
  border-radius: 5px;
`;

export const StyledAuthFormForgotPassLink = styled(Link)`
  color: #f6b52e;
  text-decoration: none;
  margin-top: 12px;
`;
