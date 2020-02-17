import * as React from 'react';
import { mount } from 'enzyme';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import Cardboard from '.';
import { create } from 'react-test-renderer';

describe('Cardboard', () => {
  const getWrapper = (props: any = {}, renderType: any = mount) =>
    renderType(
      <ThemeProvider theme={theme}>
        <Cardboard {...props}>{props.children}</Cardboard>
      </ThemeProvider>
    );

  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = getWrapper({ children: 'test' }, create).toJSON();

      expect(wrapper).toMatchSnapshot();
    });

    it('should return a `Card`', () => {
      const wrapper = getWrapper({ children: 'test' });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('Card')).toHaveLength(1);
    });
  });
});
