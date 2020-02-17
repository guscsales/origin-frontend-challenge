import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { create } from 'react-test-renderer';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import Title from '.';

describe('Title', () => {
  const getWrapper = (props: any = {}, renderType: any = mount) =>
    renderType(
      <ThemeProvider theme={theme}>
        <Title level={1} {...props}>
          test
        </Title>
      </ThemeProvider>
    );

  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = getWrapper({}, create).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a correct heading', () => {
      const wrapper: ReactWrapper = getWrapper();

      expect(wrapper.find('h1')).toHaveLength(1);
    });
  });
});
