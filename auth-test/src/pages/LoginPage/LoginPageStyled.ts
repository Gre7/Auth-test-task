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
  min-width: 263px;

  @media (min-width: 1700px) {
    background: #eeeff4;
  }

  @media (max-width: 320px) {
    background: url(../images/mobile_fon.jpg) border-box center/cover no-repeat;
  }
`;

export const StyledAuthFormPhoneInput = styled(PhoneInput)`
  .form-control {
    width: 100%;
    max-width: 263px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    :hover {
      border: 1px solid #10100f;
    }
  }
`;

export const StyledAuthFormPassInput = styled(Input)`
  height: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 263px;
  border: 1px solid #e5e5e5;
  :hover {
    border: 1px solid #10100f;
  }
`;

export const StyledAuthFormForgotPassLink = styled(Link)`
  color: #f6b52e;
  text-decoration: none;
  margin-top: 12px;
`;
