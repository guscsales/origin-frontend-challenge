import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { AnyStyledComponent } from 'styled-components';

export default function Title({
  level,
  center,
  margin,
  children
}: PropTypes.InferProps<typeof Title.propTypes>): React.ReactElement {
  const StyledTitle = styled(`h${level}` as AnyStyledComponent)`
    font-family: 'Work Sans';
    font-weight: 400;
    ${center && 'text-align: center'}
    ${margin && 'margin: 0 0 3rem'}
    color: ${props => props.theme.primary}

    strong {
      font-weight: 600;
    }
  `;

  return <StyledTitle>{children}</StyledTitle>;
}

Title.propTypes = {
  level: PropTypes.number.isRequired,
  center: PropTypes.bool,
  margin: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Title.defaultProps = {
  margin: true
};
