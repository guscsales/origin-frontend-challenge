import * as React from 'react';
import Card from '../../common-components/card';
import Svg from '../../common-components/svg';
import Title from '../../common-components/title';
import Button, { ButtonSizes } from '../../common-components/button';
import styled from 'styled-components';
import { Routes } from '../../enums/routes';
import { Link } from 'react-router-dom';
import getMonthsFrom from '../../lib/get-months-from';
import toCurrency from '../../lib/to-currency';
import { SAVING_GOAL_STORAGE_KEY } from '../../services/saving-goal.service';

interface DashboardCardProps {
	title: string;
	icon: string;
	route: Routes | string;
	planned: boolean;
	savingGoalId?: string;
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
	route,
	planned,
	savingGoalId
}) => {
	const [savingGoalData, setSavingGoalData] = React.useState(null);

	React.useEffect(() => {
		if (planned) {
			const data = JSON.parse(
				(window as any).localStorage.getItem(
					`${SAVING_GOAL_STORAGE_KEY}${savingGoalId}`
				)
			);
			const date = new Date();

			data.amount = toCurrency(data.amount);
			data.date = getMonthsFrom(date, data.months);

			console.log(data);

			setSavingGoalData(data);
		}
	}, []);

	return (
		<StyledWrapper>
			<Svg src={icon} width="40px" height="40px" />
			<Title level={4} color="superDarkGray" noMargin>
				{title}
			</Title>
			{planned && savingGoalData ? (
				<>
					<Title level={2} color="primary" noMargin>
						$ {savingGoalData.amount}
					</Title>
					<Title level={4} color="darkGray" noMargin>
						<span>reach your goal by</span>
						{savingGoalData.date.month} {savingGoalData.date.year}
					</Title>
				</>
			) : (
				<Link to={route}>
					<Button type="button" size={ButtonSizes.SMALL}>
						Start setup
					</Button>
				</Link>
			)}
		</StyledWrapper>
	);
};

export default DashboardCard;
