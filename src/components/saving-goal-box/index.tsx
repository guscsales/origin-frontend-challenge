import * as React from 'react';
import Card from '../../common-components/card';
import Title from '../../common-components/title';
import CurrencyField from '../../common-components/currency-field';
import MonthChooserField from '../../common-components/month-chooser-field';
import Button from '../../common-components/button';
import { StyledCols, StyledResult, StyledIcon } from './style';
import academyIcon from '../../assets/svg/icons/academy.svg';
import toCurrency from '../../lib/to-currency';

const DEFAULT_MONTHS_VALUE = 48;
const DEFAULT_AMOUNT_VALUE = 1000;

export default function SavingGoalBox(): React.ReactElement {
  const [amount, setAmount] = React.useState({
    value: DEFAULT_AMOUNT_VALUE,
    maskedValue: toCurrency(DEFAULT_AMOUNT_VALUE)
  });
  const [months, setMonths] = React.useState(DEFAULT_MONTHS_VALUE);

  function handleChangeAmount(maskedValue: string, value: number) {
    setAmount({ maskedValue, value });
  }

  function handleChangeMonths(months: number) {
    setMonths(months);
  }

  function getDeposits() {
    return toCurrency(Math.ceil(amount.value / months));
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
            <strong>October 2020.</strong>
          </>
        }
      >
        <StyledResult>
          <Title level={2} color="superDarkGray" bold="500" noMargin>
            Monthly
          </Title>
          <Title level={1} color="secondary" noMargin>
            ${getDeposits()}
          </Title>
        </StyledResult>
      </Card>
      <Button type="button">Finish</Button>
    </>
  );
}
