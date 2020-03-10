import * as React from 'react';
import SubHeader from '../../components/sub-header';
import SavingGoalBox from '../../components/saving-goal-box';
import Cardboard from '../../common-components/cardboard';
import { Routes } from '../../enums/routes';

const SavingGoalPage: React.FunctionComponent = () => {
	return (
		<>
			<SubHeader level={2} center backButtonUrl={Routes.DASHBOARD}>
				Let's plan your <strong>saving goal.</strong>
			</SubHeader>
			<Cardboard>
				<SavingGoalBox />
			</Cardboard>
		</>
	);
};

export default SavingGoalPage;
