import * as React from 'react';
import * as PropTypes from 'prop-types';

export default function Svg({
  src,
  ...props
}: PropTypes.InferProps<typeof Svg.propTypes>): React.ReactElement {
  return (
    <svg {...props}>
      <use xlinkHref={src} />
    </svg>
  );
}

Svg.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};
