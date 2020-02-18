import { Selector } from 'testcafe';

//prettier-ignore
fixture `Saving goal page`
  .page `http://localhost:1234/`;

test('should calculate the correct value according changes on fields', async t => {
	await t
		.selectText('#total-amount input')
		.typeText('#total-amount input', '10000')
		.click('#reach-goal-by .next-arrow')
		.expect(Selector('#total-deposits').innerText)
		.eql('$205');
});
