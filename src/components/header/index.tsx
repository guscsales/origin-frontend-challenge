import * as React from 'react';
import { Wrapper } from './style';
import Svg from '../../common-components/svg';
import originLogo from '../../assets/svg/icons/logo.svg';

const Header: React.SFC = () => {
  return (
    <Wrapper>
      <Svg src={originLogo} width="7rem" height="2.3rem" />
    </Wrapper>
  );
};

export default Header;
