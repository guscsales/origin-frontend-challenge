import * as React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import CurrencyField, { handleChangeValue } from '.';

jest.mock('react-currency-input');

describe('CurrencyField', () => {
  const getWrapper = (props: any = {}, renderType: any = mount) =>
    renderType(
      <ThemeProvider theme={theme}>
        <CurrencyField label="test" {...props} />
      </ThemeProvider>
    );

  describe('#handleChangeValue', () => {
    it('should set value on state and calls `onChange` param', () => {
      const setValue = jest.fn();
      const onChange = jest.fn();
      const finalMaskedValue = '100';
      const finalValue = 100;

      handleChangeValue(finalMaskedValue, finalValue, setValue, onChange);

      expect(setValue).toHaveBeenCalledWith(finalValue);
      expect(onChange).toHaveBeenCalledWith(finalMaskedValue, finalValue);
    });

    it('should foward zero values when value is less or equals zero', () => {
      const setValue = jest.fn();
      const onChange = jest.fn();
      const finalMaskedValue = '';
      const finalValue = 0;

      handleChangeValue(finalMaskedValue, finalValue, setValue, onChange);

      expect(setValue).toHaveBeenCalledWith(0);
      expect(onChange).toHaveBeenCalledWith('0', 0);
    });
  });

  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = getWrapper({}, create).toJSON();

      expect(wrapper).toMatchSnapshot();
    });

    it('should return a component mocked rendered class', () => {
      const wrapper = getWrapper();

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('.react-currency-input')).toHaveLength(1);
    });
  });
});
