import * as React from 'react';
import { create } from 'react-test-renderer';
import Header from '.';

describe('Header', () => {
  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = create(<Header />).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
