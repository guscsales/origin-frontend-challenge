import toCurrency from '../to-currency';

describe('#toCurrency', () => {
  it('should return formatted value', () => {
    const actual = toCurrency(10000);

    expect(actual).toBe('10,000');
  });
});
