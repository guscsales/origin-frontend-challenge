import * as React from 'react';
import SubHeader from '../../components/sub-header';
import SavingGoalBox from '../../components/saving-goal-box';
import Cardboard from '../../common-components/cardboard';

const SavingGoalPage: React.FunctionComponent = () => {
	return (
		<>
			<SubHeader center backButton>
				Let's plan your <strong>saving goal.</strong>
			</SubHeader>
			<Cardboard>
				<SavingGoalBox />
			</Cardboard>
		</>
	);
};

export default SavingGoalPage;
