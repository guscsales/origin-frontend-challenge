import * as React from 'react';
import styled from 'styled-components';
import devices from '../../configs/styles/devices';
import Title from '../../common-components/title';
import Svg from '../../common-components/svg';
import arrow from '../../assets/svg/icons/arrow.svg';
import { Link } from 'react-router-dom';
import { Routes } from '../../enums/routes';

interface SubHeaderProps {
	children: React.ReactNode;
	center?: boolean;
	backButtonUrl?: Routes;
	color?: string;
	level?: number;
}

const SubHeader: React.SFC<SubHeaderProps> = ({
	children,
	center,
	color,
	backButtonUrl,
	level
}) => {
	const StyledSubHeader = styled.div`
		margin: 8.4rem 0 3rem;
		position: relative;
		padding: 0 10px;

		@media ${devices.desktop} {
			width: ${props =>
				center ? '56rem' : props.theme.sizes.container.desktop};
			margin: 4.5rem auto;
			padding: 0;
		}
	`;

	const StyledBackButton = styled.button`
		width: 5.6rem;
		height: 5.6rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		background-color: transparent;
		position: fixed;
		left: 0;
		top: 0;
		border: none;
		z-index: 2;

		use.back-button {
			fill: ${props => props.theme.colors.superDarkGray};
		}

		@media ${devices.desktop} {
			width: 5.6rem;
			margin: 4.5rem auto;
			border: 1px solid ${props => props.theme.colors.lightGray};
			background-color: #fff;
			position: absolute;
			left: 0;
			top: 50%;
			margin-top: -2.8rem;

			use.back-button {
				fill: ${props => props.theme.colors.darkGray};
			}
		}
	`;

	return (
		<StyledSubHeader>
			{backButtonUrl && (
				<Link to={backButtonUrl}>
					<StyledBackButton>
						<Svg
							src={arrow}
							width="10px"
							height="18px"
							useClass="back-button"
						/>
					</StyledBackButton>
				</Link>
			)}
			<Title level={level} center={center} color={color} noBold noMargin>
				{children}
			</Title>
		</StyledSubHeader>
	);
};

export default SubHeader;
