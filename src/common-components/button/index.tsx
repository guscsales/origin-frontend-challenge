import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';

export default function Button({
  children,
  ...props
}: PropTypes.InferProps<typeof Button.propTypes>): React.ReactElement {
  const StyledButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.colors.primary}
    color: #fff;
    font-family: ${props => props.theme.fonts.primary.family}
    font-size: 1.8rem;
    border-radius: 30px;
    border: none;
    font-weight: 500;
    padding: 1.5rem;
    margin-top: 3.5rem;
    cursor: pointer;
    transition: all 200ms linear;

    &:hover {
      background-color: ${props => props.theme.colors.primaryHover}
    }

    @media ${devices.desktop} {
        max-width: 40rem;
        display: flex;
        justify-content: center;
        margin: 3rem auto 1.5rem;
    }
  `;

  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};
