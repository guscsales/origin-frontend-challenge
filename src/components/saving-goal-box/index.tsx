import * as React from 'react';
import Card from '../../common-components/card';
import Title from '../../common-components/title';
import CurrencyField from '../../common-components/currency-field';
import Button from '../../common-components/button';
import { StyledCols, StyledWrapper, StyledResult } from './style';

export default function SavingGoalBox(): React.ReactElement {
  return (
    <StyledWrapper>
      <Card layout>
        <Title level={1} color="superDarkGray">
          Buy a house
          <span>Saving goal</span>
        </Title>
        <StyledCols>
          <CurrencyField label="Total amount" />
          <CurrencyField label="Reach goal by" />
        </StyledCols>
        <Card
          footer={
            <>
              You're planning <strong>48 monthly deposits</strong> to reach your{' '}
              <strong>$25,000</strong> goal by <strong>October 2020.</strong>
            </>
          }
        >
          <StyledResult>
            <Title level={2} color="superDarkGray" noBold noMargin>
              Monthly
            </Title>
            <Title level={1} color="secondary" noMargin>
              $521
            </Title>
          </StyledResult>
        </Card>
        <Button type="button">Finish</Button>
      </Card>
    </StyledWrapper>
  );
}
