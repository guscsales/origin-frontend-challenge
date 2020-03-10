import * as React from 'react';
import SubHeader from '../../components/sub-header';
import Dashboard from '../../components/dashboard';
import Cardboard from '../../common-components/cardboard';
import theme from '../../configs/styles/themes';

const DashboardPage: React.FunctionComponent = () => {
	return (
		<>
			<SubHeader color="superDarkGray" level={1}>
				<strong>Here's your saving goals!</strong>
			</SubHeader>
			<Dashboard />
		</>
	);
};

export default DashboardPage;
