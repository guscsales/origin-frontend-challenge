import * as React from 'react';
import * as PropTypes from 'prop-types';

export default function Svg({
  src,
  width,
  height
}: PropTypes.InferProps<typeof Svg.propTypes>): React.ReactElement {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={src} />
    </svg>
  );
}

Svg.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string
};

Svg.defaultProps = {
  height: 'auto'
};
