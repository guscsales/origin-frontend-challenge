import axios from 'axios';

const BASE_URL = 'https://origin-savings-api.herokuapp.com';

export const FIXTURE: SavingGoal[] = [
	{
		id: '1',
		name: 'Go to college',
		icon: ''
	},
	{
		id: '2',
		name: 'Take a vacation',
		icon: ''
	},
	{
		id: '3',
		name: 'Buy a car',
		icon: ''
	},
	{
		id: '4',
		name: 'Throw a wedding party',
		icon: ''
	},
	{
		id: '5',
		name: 'Build an emergency fund',
		icon: ''
	},
	{
		id: '6',
		name: 'Have a baby',
		icon: ''
	}
];

export interface SavingGoal {
	id: string;
	name: string;
	icon: string;
}

export const SAVING_GOAL_STORAGE_KEY = 'saving_goal_';

export class SavingGoalService {
	// async getCards() {
	// 	const { data } = await axios.get(`${BASE_URL}/saving-goals`);

	// 	console.log(data);

	// 	return data;
	// }

	getSavingGoals() {
		return FIXTURE;
	}

	getSavingGoalById(id: string) {
		return FIXTURE.filter(x => x.id === id)[0];
	}
}
