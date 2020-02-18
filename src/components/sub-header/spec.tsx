import * as React from 'react';
import { create } from 'react-test-renderer';
import theme from '../../configs/styles/themes';
import { ThemeProvider } from 'styled-components';
import SubHeader from '.';

describe('SubHeader', () => {
  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = create(
        <ThemeProvider theme={theme}>
          <SubHeader />
        </ThemeProvider>
      ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
