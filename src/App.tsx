import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import theme from './configs/styles/themes';
import SavingGoalPage from './pages/saving-goal-page';
import DashboardPage from './pages/dashboard-page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './enums/routes';

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Header />
				<Switch>
					<Route path={`${Routes.SAVING_GOAL}/:savingGoalId`}>
						<SavingGoalPage />
					</Route>
					<Route path={Routes.DASHBOARD}>
						<DashboardPage />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default App;
