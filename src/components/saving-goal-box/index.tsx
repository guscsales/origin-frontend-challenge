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
import { useParams, useHistory } from 'react-router-dom';
import {
	SavingGoalService,
	SavingGoal,
	SAVING_GOAL_STORAGE_KEY
} from '../../services/saving-goal.service';

const DEFAULT_MONTHS_VALUE = 48;
const DEFAULT_AMOUNT_VALUE = 1000;

export const getDeposits = (value: number, months: number) => {
	return toCurrency(Math.ceil(value / months));
};

const savingGoalService = new SavingGoalService();

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
	const [savingGoal, setSavingGoal] = React.useState<SavingGoal>(null);

	const { savingGoalId } = useParams();
	const history = useHistory();

	React.useEffect(() => {
		setSavingGoal(savingGoalService.getSavingGoalById(savingGoalId));

		getData();
	}, []);

	function getData() {
		const data = JSON.parse(
			(window as any).localStorage.getItem(
				`${SAVING_GOAL_STORAGE_KEY}${savingGoalId}`
			)
		);

		if (data) {
			const { amount, months } = data;

			setAmount({ value: amount, maskedValue: toCurrency(amount) });
			setMonths(months);
		}
	}

	function handleChangeAmount(maskedValue: string, value: number) {
		setAmount({ maskedValue, value });
	}

	function handleChangeMonths(months: number, dateLabels: any) {
		setMonths(months);
		setDateLabels(dateLabels);
	}

	function handleFinish() {
		const data = {
			savingGoalId,
			amount: amount.value,
			months
		};

		(window as any).localStorage.setItem(
			`${SAVING_GOAL_STORAGE_KEY}${savingGoalId}`,
			JSON.stringify(data)
		);

		history.push('/');
	}

	if (!savingGoal) {
		return <></>;
	}

	return (
		<>
			<StyledIcon src={academyIcon} />
			<Title level={1} color="superDarkGray">
				{savingGoal.name}
				<span>Saving goal</span>
			</Title>
			<StyledCols>
				<CurrencyField
					id="total-amount"
					label="Total amount"
					defaultValue={amount.value}
					onChange={handleChangeAmount}
				/>
				<MonthChooserField
					id="reach-goal-by"
					label="Reach goal by"
					defaultValue={months}
					onChange={handleChangeMonths}
				/>
			</StyledCols>
			<Card
				footer={
					<>
						You're planning{' '}
						<strong>{months} monthly deposits</strong> to reach your{' '}
						<strong>${amount.maskedValue}</strong> goal by{' '}
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
					<Title
						id="total-deposits"
						level={1}
						color="secondary"
						noMargin
					>
						${getDeposits(amount.value, months)}
					</Title>
				</StyledResult>
			</Card>
			<Button type="button" onClick={handleFinish}>
				Finish
			</Button>
		</>
	);
};

export default SavingGoalBox;
