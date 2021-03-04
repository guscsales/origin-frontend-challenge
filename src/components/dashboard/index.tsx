import * as React from 'react';
import Container from '../../common-components/container';
import DashboardCard from '../dashboard-card';
import goToCollegeIcon from '../../assets/svg/icons/academy.svg';
import styled from 'styled-components';
import { Routes } from '../../enums/routes';
import devices from '../../configs/styles/devices';
import {
	SavingGoalService,
	SAVING_GOAL_STORAGE_KEY
} from '../../services/saving-goal.service';

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

const savingGoalService = new SavingGoalService();

const Dashboard: React.SFC = () => {
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		setCards(savingGoalService.getSavingGoals());
	});

	function isPlanned(id: string) {
		return (window as any).localStorage.getItem(
			`${SAVING_GOAL_STORAGE_KEY}${id}`
		);
	}

	return (
		<Grid>
			{cards.map(({ id, name }) => (
				<DashboardCard
					key={id}
					savingGoalId={id}
					title={name}
					icon={goToCollegeIcon}
					route={`${Routes.SAVING_GOAL}/${id}`}
					planned={isPlanned(id)}
				/>
			))}
		</Grid>
	);
};

export default Dashboard;
