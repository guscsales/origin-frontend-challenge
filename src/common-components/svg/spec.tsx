import * as React from 'react';
import { create } from 'react-test-renderer';
import Svg from '.';
import svgTest from '../../assets/svg/icons/logo.svg';

describe('Svg', () => {
  describe('#render', () => {
    it('should match a snapshot', () => {
      const wrapper = create(
        <Svg src={svgTest} width="10px" height="10px" />
      ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
