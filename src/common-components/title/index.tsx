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
	id?: string;
}

const Title: React.SFC<TitleProps> = ({ level, children, id, ...props }) => {
	const heading = `h${level}`;
	const StyledTitle = styledTitle(heading, props);

	return <StyledTitle id={id}>{children}</StyledTitle>;
};

Title.defaultProps = {
	color: 'primary',
	bold: '600'
};

export default Title;
