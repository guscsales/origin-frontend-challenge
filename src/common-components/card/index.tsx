import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';

export default function Card({
  children
}: PropTypes.InferProps<typeof Card.propTypes>): React.ReactElement {
  const StyledCard = styled.div`
    padding: 4rem;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.02);
    height: 100%;
    border-radius: 10px 10px 0 0;

    @media ${devices.desktop} {
      border-radius: 7px;
      border: 1px solid ${props => props.theme.lightGray};
      height: auto;
    }
  `;

  return <StyledCard>{children}</StyledCard>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};
