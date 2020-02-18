import * as React from 'react';
import Card from '../../common-components/card';
import Title from '../../common-components/title';
import CurrencyField from '../../common-components/currency-field';
import MonthChooserField from '../../common-components/month-chooser-field';
import Button from '../../common-components/button';
import { StyledCols, StyledResult, StyledIcon } from './style';
import academyIcon from '../../assets/svg/icons/academy.svg';
import toCurrency from '../../lib/to-currency';
import getMonthsFrom from '../../lib/get-months-from';

const DEFAULT_MONTHS_VALUE = 48;
const DEFAULT_AMOUNT_VALUE = 1000;

export const getDeposits = (value: number, months: number) => {
  return toCurrency(Math.ceil(value / months));
};

const SavingGoalBox: React.SFC = () => {
  const currentDate = new Date();
  const [amount, setAmount] = React.useState({
    value: DEFAULT_AMOUNT_VALUE,
    maskedValue: toCurrency(DEFAULT_AMOUNT_VALUE)
  });
  const [months, setMonths] = React.useState(DEFAULT_MONTHS_VALUE);
  const [dateLabels, setDateLabels] = React.useState(
    getMonthsFrom(currentDate, DEFAULT_MONTHS_VALUE)
  );

  function handleChangeAmount(maskedValue: string, value: number) {
    setAmount({ maskedValue, value });
  }

  function handleChangeMonths(months: number, dateLabels: any) {
    setMonths(months);
    setDateLabels(dateLabels);
  }

  return (
    <>
      <StyledIcon src={academyIcon} />
      <Title level={1} color="superDarkGray">
        Go to College
        <span>Saving goal</span>
      </Title>
      <StyledCols>
        <CurrencyField
          label="Total amount"
          defaultValue={DEFAULT_AMOUNT_VALUE}
          onChange={handleChangeAmount}
        />
        <MonthChooserField
          label="Reach goal by"
          defaultValue={DEFAULT_MONTHS_VALUE}
          onChange={handleChangeMonths}
        />
      </StyledCols>
      <Card
        footer={
          <>
            You're planning <strong>{months} monthly deposits</strong> to reach
            your <strong>${amount.maskedValue}</strong> goal by{' '}
            <strong>
              {dateLabels.month} {dateLabels.year}.
            </strong>
          </>
        }
      >
        <StyledResult>
          <Title level={2} color="superDarkGray" bold="500" noMargin>
            Monthly
          </Title>
          <Title level={1} color="secondary" noMargin>
            ${getDeposits(amount.value, months)}
          </Title>
        </StyledResult>
      </Card>
      <Button type="button">Finish</Button>
    </>
  );
};

export default SavingGoalBox;
