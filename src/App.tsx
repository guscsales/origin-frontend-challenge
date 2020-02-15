import * as React from 'react';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import theme from './configs/styles/themes';
import SubHeader from './components/sub-header';
import SavingGoalBox from './components/saving-goal-box';

const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <SubHeader />
        <SavingGoalBox />
      </ThemeProvider>
    </>
  );
};

export default App;
