import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';

export enum ButtonSizes {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}

interface ButtonProps {
	children: React.ReactNode;
	type: any;
	size?: ButtonSizes;
}

const Button: React.SFC<ButtonProps> = ({
	size = ButtonSizes.MEDIUM,
	children,
	...props
}) => {
	const StyledButton = styled.button`
		width: 100%;
		color: #fff;
		border-radius: 30px;
		border: none;
		font-weight: 500;
		margin-top: 3.5rem;
		cursor: pointer;
		transition: all 200ms linear;
		background-color: ${props => props.theme.colors.primary};
		font-family: ${props => props.theme.fonts.primary.family};

		${size === ButtonSizes.SMALL &&
			`
        font-size: 1.6rem;
        padding: 1.2rem;
      `}

		${size === ButtonSizes.MEDIUM &&
			`
        font-size: 1.8rem;
        padding: 1.5rem;
      `}

    &:hover {
			background-color: ${props => props.theme.colors.primaryHover};
		}

		@media ${devices.desktop} {
			display: flex;
			justify-content: center;
			margin: 3rem auto 1.5rem;

			${size === ButtonSizes.SMALL &&
				`
          max-width: 22rem;
        `}

			${size === ButtonSizes.MEDIUM &&
				`
          max-width: 40rem;
        `}
		}
	`;

	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
