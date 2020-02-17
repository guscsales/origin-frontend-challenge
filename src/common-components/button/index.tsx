import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';

interface ButtonProps {
  children: React.ReactNode;
  type: any;
}

const Button: React.SFC<ButtonProps> = ({ children, ...props }) => {
  const StyledButton = styled.button`
    width: 100%;
    color: #fff;
    font-size: 1.8rem;
    border-radius: 30px;
    border: none;
    font-weight: 500;
    padding: 1.5rem;
    margin-top: 3.5rem;
    cursor: pointer;
    transition: all 200ms linear;
    background-color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.primary.family};

    &:hover {
      background-color: ${props => props.theme.colors.primaryHover};
    }

    @media ${devices.desktop} {
      max-width: 40rem;
      display: flex;
      justify-content: center;
      margin: 3rem auto 1.5rem;
    }
  `;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
