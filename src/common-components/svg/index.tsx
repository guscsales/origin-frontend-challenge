import * as React from 'react';

interface SvgProps {
  src: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const Svg: React.SFC<SvgProps> = ({ src, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={src} />
    </svg>
  );
};

export default Svg;
