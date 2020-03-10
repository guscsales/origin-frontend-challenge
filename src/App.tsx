import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import theme from './configs/styles/themes';
import SavingGoalPage from './pages/saving-goal-page';
import DashboardPage from './pages/dashboard-page';

const App: React.FunctionComponent = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<DashboardPage />
			</ThemeProvider>
		</>
	);
};

export default App;
