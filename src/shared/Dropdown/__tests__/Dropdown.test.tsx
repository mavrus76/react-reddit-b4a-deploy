/**
 * @jest-environment jsdom
 */

import React from 'react';
// eslint-disable-next-line enzyme/no-shallow
import { shallow } from 'enzyme';
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(
      <Dropdown button={<button type='button' />}>
        <div />
      </Dropdown>,
    );
    // console.log(window);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = shallow(
      <Dropdown button={<button type='button' />}>
        <div />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
