import * as React from 'react';
import { mount } from 'enzyme';
import Card from '.';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import { create } from 'react-test-renderer';
import devices from '../../configs/styles/devices';

describe('Card', () => {
  const getWrapper = (props: any = {}, renderType: any = mount) =>
    renderType(
      <ThemeProvider theme={theme}>
        <Card {...props}>{props.children}</Card>
      </ThemeProvider>
    );

  describe('#render', () => {
    it('should exists the element', () => {
      const wrapper = getWrapper({ children: 'test' });

      expect(wrapper.exists()).toBe(true);
    });

    it('should return a `Card` with footer', () => {
      const wrapper = getWrapper({ footer: 'test footer', children: 'test' });

      expect(wrapper.html().indexOf('test footer') !== -1).toBe(true);
    });

    it('should return a `Card` with mobile styles', () => {
      const wrapper = getWrapper(
        { layout: true, children: 'test' },
        create
      ).toJSON();

      expect(wrapper).toHaveStyleRule('height', '100%', {
        media: devices.mobile
      });
    });

    it('should match a snapshot of a layout form', () => {
      const wrapper = getWrapper(
        { layout: true, children: 'test' },
        create
      ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });

    it('should match a snapshot of a default form', () => {
      const wrapper = getWrapper({ children: 'test' }, create).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
