import * as React from 'react';
import SubHeader from '../../components/sub-header';
import Dashboard from '../../components/dashboard';
import Cardboard from '../../common-components/cardboard';

const DashboardPage: React.FunctionComponent = () => {
	return (
		<>
			<SubHeader>Here's your saving goals!</SubHeader>
			<Dashboard />
		</>
	);
};

export default DashboardPage;
