import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';
import Card from '../card';

export default function Cardboard({
  children
}: PropTypes.InferProps<typeof Card.propTypes>): React.ReactElement {
  const StyledWrapper = styled.div`
    animation: fadeIn 800ms ease-out;

    @media ${devices.desktop} {
      width: 56rem;
      margin: 0 auto;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
        visibility: hidden;
      }
      to {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
  `;

  return (
    <StyledWrapper>
      <Card layout>{children}</Card>
    </StyledWrapper>
  );
}

Cardboard.propTypes = {
  children: PropTypes.node.isRequired
};
