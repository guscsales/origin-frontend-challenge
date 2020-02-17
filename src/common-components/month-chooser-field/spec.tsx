import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { create } from 'react-test-renderer';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import MonthChooserField from '.';
import getMonthsFromNow from '../../lib/get-months-from-now';

describe('MonthChooserField', () => {
  const getWrapper = (props: any = {}, renderType: any = mount) =>
    renderType(
      <ThemeProvider theme={theme}>
        <MonthChooserField {...props} />
      </ThemeProvider>
    );

  describe('#handleChangeMonths', () => {
    it('should decrement the state value and render the month and year', () => {
      const wrapper: ReactWrapper = getWrapper({ defaultValue: 3 });

      wrapper.find('div.prev-arrow').simulate('click');

      const { month, year } = getMonthsFromNow(2);

      expect(wrapper.find('div.date').text()).toBe(`${month}${year}`);
    });

    it('should increment the state value and render the month and year', () => {
      const wrapper: ReactWrapper = getWrapper({ defaultValue: 3 });

      wrapper.find('div.next-arrow').simulate('click');

      const { month, year } = getMonthsFromNow(4);

      expect(wrapper.find('div.date').text()).toBe(`${month}${year}`);
    });
  });

  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = getWrapper({}, create).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should exists the element', () => {
      const wrapper: ReactWrapper = getWrapper();
      expect(wrapper.exists()).toBe(true);
    });
  });
});
