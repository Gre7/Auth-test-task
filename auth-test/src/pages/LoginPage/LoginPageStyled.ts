import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';

import Input from '../../components/Input';

export const StyledLoginPageContainer = styled('div')`
  background: url(../images/authBackground.jpg) center center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLoginPageForm = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 0px 32px 40px;
  background: white;
  border-radius: 20px;
  max-width: 412px;
  box-shadow: rgb(0 0 0 / 25%) -10px 7px 20px;
`;

export const StyledLoginPagePhoneInput = styled(PhoneInput)`
  .form-control {
    margin-bottom: 20px;
    width: 263px;
    height: 20px;
    border-radius: 5px;
  }
`;

export const StyledLoginPagePassInput = styled(Input)`
  height: 20px;
  border-radius: 5px;
`;
