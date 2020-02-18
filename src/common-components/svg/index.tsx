import * as React from 'react';

interface SvgProps {
  src: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  useClass?: string;
}

const Svg: React.SFC<SvgProps> = ({ src, useClass, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={src} className={useClass} />
    </svg>
  );
};

export default Svg;
