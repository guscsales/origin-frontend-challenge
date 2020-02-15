import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import theme from './configs/styles/themes';
import SubHeader from './components/sub-header';
import SavingGoalBox from './components/saving-goal-box';
import Cardboard from './common-components/cardboard';

const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SubHeader />
        <Cardboard>
          <SavingGoalBox />
        </Cardboard>
      </ThemeProvider>
    </>
  );
};

export default App;
