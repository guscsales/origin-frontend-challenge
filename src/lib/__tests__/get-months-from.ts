import getMonthsFrom from '../get-months-from';

describe('#getMonthsFrom', () => {
  it('should return object with month and year', () => {
    const date = new Date(2020, 0, 1);
    const actual = getMonthsFrom(date, 2);

    expect(actual).toEqual({ month: 'March', year: '2020' });
  });
});
