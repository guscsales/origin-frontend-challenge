import * as React from 'react';
import Container from '../../common-components/container';
import DashboardCard from '../dashboard-card';
import goToCollegeIcon from '../../assets/svg/icons/academy.svg';
import styled from 'styled-components';
import { Routes } from '../../enums/routes';
import devices from '../../configs/styles/devices';

const Grid = styled(Container)`
	display: grid;

	@media ${devices.mobile} {
		padding: 10px;
		box-sizing: border-box;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;
	}

	@media ${devices.desktop} {
		padding: 0;
		grid-gap: 20px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;

const Dashboard: React.SFC = () => {
	return (
		<Grid>
			<DashboardCard
				title="Go to college"
				icon={goToCollegeIcon}
				route={Routes.SAVING_GOAL}
			/>
			<DashboardCard
				title="Go to college"
				icon={goToCollegeIcon}
				route={Routes.SAVING_GOAL}
			/>
			<DashboardCard
				title="Go to college"
				icon={goToCollegeIcon}
				route={Routes.SAVING_GOAL}
			/>
			<DashboardCard
				title="Go to college"
				icon={goToCollegeIcon}
				route={Routes.SAVING_GOAL}
			/>
			<DashboardCard
				title="Go to college"
				icon={goToCollegeIcon}
				route={Routes.SAVING_GOAL}
			/>
		</Grid>
	);
};

export default Dashboard;
