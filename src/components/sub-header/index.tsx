import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';
import Title from '../../common-components/title';
import Svg from '../../common-components/svg';
import arrow from '../../assets/svg/icons/arrow.svg';

const SubHeader: React.SFC = () => {
  const StyledSubHeader = styled.div`
    margin: 8.4rem 0 3rem;
    position: relative;

    @media ${devices.desktop} {
      width: 56rem;
      margin: 4.5rem auto;
    }
  `;

  const StyledBackButton = styled.button`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    position: fixed;
    left: 0;
    top: 0;
    border: none;
    z-index: 2;

    use.back-button {
      fill: ${props => props.theme.colors.superDarkGray};
    }

    @media ${devices.desktop} {
      width: 5.6rem;
      margin: 4.5rem auto;
      border: 1px solid ${props => props.theme.colors.lightGray};
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -2.8rem;

      use.back-button {
        fill: ${props => props.theme.colors.darkGray};
      }
    }
  `;

  return (
    <StyledSubHeader>
      <StyledBackButton>
        <Svg src={arrow} width="10px" height="18px" useClass="back-button" />
      </StyledBackButton>
      <Title level={2} center noBold noMargin>
        Let's plan your <strong>saving goal.</strong>
      </Title>
    </StyledSubHeader>
  );
};

export default SubHeader;
