import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';

export default function Card({
  layout,
  footer,
  children
}: PropTypes.InferProps<typeof Card.propTypes>): React.ReactElement {
  const mobileStyles = `
    @media ${devices.mobile} {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.02);
      height: 100%;
      border-radius: 10px 10px 0 0;
      border: none;
    }
  `;

  const StyledCard = styled.div`
    background: #fff;
    border-radius: 7px;
    border: 1px solid ${props => props.theme.colors.lightGray};

    ${layout ? mobileStyles : ''}

    @media ${devices.desktop} {
      height: auto;
      border: 1px solid ${props => props.theme.colors.lightGray};
    }
  `;

  const containerPadding = `
    padding: 4rem;

    @media ${devices.mobile} {
      padding: 2.75rem 2.5rem;
    }
  `;

  const StyledContent = styled.div`
    ${containerPadding}
  `;

  const StyledFooter = styled.div`
    background-color: ${props => props.theme.colors.superLightGray};

    ${containerPadding}

    @media ${devices.mobile} {
      font-size: 1.3rem;
    }
  `;

  return (
    <StyledCard>
      <StyledContent>{children}</StyledContent>
      {footer && <StyledFooter>{footer}</StyledFooter>}
    </StyledCard>
  );
}

Card.propTypes = {
  layout: PropTypes.bool,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
};
