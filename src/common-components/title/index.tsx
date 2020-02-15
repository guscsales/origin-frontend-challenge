import * as React from 'react';
import * as PropTypes from 'prop-types';
import { COLOR_TYPES } from '../../configs/styles/themes';
import styledTitle from './style';

export default function Title({
  level,
  children,
  ...props
}: PropTypes.InferProps<typeof Title.propTypes>): React.ReactElement {
  const heading = `h${level}`;
  const StyledTitle = styledTitle(heading, props);

  return <StyledTitle>{children}</StyledTitle>;
}

Title.propTypes = {
  level: PropTypes.number.isRequired,
  center: PropTypes.bool,
  noMargin: PropTypes.bool,
  color: PropTypes.oneOf(COLOR_TYPES),
  noBold: PropTypes.bool,
  bold: PropTypes.string,
  children: PropTypes.node.isRequired
};

Title.defaultProps = {
  color: 'primary',
  bold: '600'
};
