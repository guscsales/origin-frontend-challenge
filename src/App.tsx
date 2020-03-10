import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import theme from './configs/styles/themes';
import SubHeader from './components/sub-header';
import SavingGoalBox from './components/saving-goal-box';
import Cardboard from './common-components/cardboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FunctionComponent = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Header />
				<Switch>
					<Route path="/"></Route>
					<Route path="/saving-goal">
						<SubHeader />
						<Cardboard>
							<SavingGoalBox />
						</Cardboard>
					</Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default App;
