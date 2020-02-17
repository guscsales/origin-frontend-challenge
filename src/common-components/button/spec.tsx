import * as React from 'react';
import { mount } from 'enzyme';
import Button from '.';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import { create } from 'react-test-renderer';

describe('Button', () => {
  describe('#render', () => {
    const getWrapper = (props: any = {}, renderType: any = mount) =>
      renderType(
        <ThemeProvider theme={theme}>
          <Button {...props}>{props.children}</Button>
        </ThemeProvider>
      );

    it('should return a `button`', () => {
      const wrapper = getWrapper({ children: 'test' });

      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should match a snapshot', () => {
      const wrapper = getWrapper({ children: 'test' }, create).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
