import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { create } from 'react-test-renderer';
import { act } from '@testing-library/react';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import SavingGoalBox, { getDeposits } from '.';

describe('SavingGoalBox', () => {
  const getWrapper = (renderType: any = mount) =>
    renderType(
      <ThemeProvider theme={theme}>
        <SavingGoalBox />
      </ThemeProvider>
    );
  const setState: React.Dispatch<unknown> = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  useStateSpy.mockImplementation(init => [init, setState]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#handleChangeAmount', () => {
    it('should call `setState` when changed', () => {
      const wrapper: ReactWrapper = getWrapper();
      const props = wrapper
        .find('CurrencyField')
        .first()
        .props();
      const functionSpy = jest.spyOn(props, 'onChange');
      const handleChangeAmount: (...args: any[]) => any = props.onChange;

      act(() => {
        handleChangeAmount('5,000', 5000);
      });

      expect(functionSpy).toHaveBeenCalledWith('5,000', 5000);
      expect(useStateSpy).toHaveBeenCalled();
    });
  });

  describe('#handleChangeMonths', () => {
    it('should pass correct params and call `setState` when changed', () => {
      const wrapper: ReactWrapper = getWrapper();
      const props = wrapper
        .find('MonthChooserField')
        .first()
        .props();
      const functionSpy = jest.spyOn(props, 'onChange');

      const handleChangeMonths: (...args: any[]) => any = props.onChange;

      act(() => {
        handleChangeMonths(1, { months: 'test', year: 2000 });
      });

      expect(functionSpy).toHaveBeenCalledWith(1, {
        months: 'test',
        year: 2000
      });
      expect(useStateSpy).toHaveBeenCalled();
    });
  });

  describe('#getDeposits', () => {
    it('should return formatted value', () => {
      const actual = getDeposits(250000, 48);

      expect(actual).toBe('5,209');
    });
  });

  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = getWrapper(create).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
