import * as React from 'react';
import styled from 'styled-components';
import Svg from '../../common-components/svg';
import originLogo from '../../assets/svg/icons/logo.svg';
import devices from '../../configs/styles/devices';

const Header: React.SFC = () => {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 5.6rem;
    padding: 0;
    margin-bottom: 3rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;

    @media ${devices.desktop} {
      position: relative;
      justify-content: flex-start;
      padding: 0 4rem;
      margin-bottom: 4.5rem;
    }
  `;

  return (
    <StyledHeader>
      <Svg src={originLogo} width="7rem" height="2.3rem" />
    </StyledHeader>
  );
};

export default Header;
