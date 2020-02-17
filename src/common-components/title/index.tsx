import * as React from 'react';
import styledTitle from './style';

export interface TitleProps {
  level: number;
  center?: boolean;
  noMargin?: boolean;
  color?: string;
  noBold?: boolean;
  bold?: string;
  children: React.ReactNode;
}

const Title: React.SFC<TitleProps> = ({ level, children, ...props }) => {
  const heading = `h${level}`;
  const StyledTitle = styledTitle(heading, props);

  return <StyledTitle>{children}</StyledTitle>;
};

Title.defaultProps = {
  color: 'primary',
  bold: '600'
};

export default Title;
