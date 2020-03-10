import * as React from 'react';
import Card from '../../common-components/card';
import Svg from '../../common-components/svg';
import Title from '../../common-components/title';
import Button, { ButtonSizes } from '../../common-components/button';
import styled from 'styled-components';
import { Routes } from '../../enums/routes';
import { Link } from 'react-router-dom';

interface DashboardCardProps {
	title: string;
	icon: string;
	route: Routes;
}

const StyledWrapper = styled(Card)`
	text-align: center;

	> div {
		padding: 2rem;
	}

	h4 {
		margin-bottom: 2.5rem;
	}
`;

const DashboardCard: React.SFC<DashboardCardProps> = ({
	title,
	icon,
	route
}) => {
	return (
		<StyledWrapper>
			<Svg src={icon} width="40px" height="40px" />
			<Title level={4} color="superDarkGray" noMargin>
				{title}
			</Title>
			<Link to={route}>
				<Button type="button" size={ButtonSizes.SMALL}>
					Start setup
				</Button>
			</Link>
		</StyledWrapper>
	);
};

export default DashboardCard;
