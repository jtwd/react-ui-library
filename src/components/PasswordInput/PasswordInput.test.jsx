import React from 'react';
import {shallow} from 'enzyme';

import PasswordInput from './PasswordInput';

test('hide toggle control when prop is false', () => {
  const wrapper = shallow(
    <PasswordInput
      htmlId="test"
      name="test"
      value=""
      showVisibilityToggle={false}
      onChange={() => {}}
    />
  )

  expect(wrapper.find('.togglePassword')).toHaveLength(0)

})

test('toggles input type when show/hide password clicked', () => {
  const wrapper = shallow(
    <PasswordInput
      htmlId="test"
      name="test"
      value=""
      onChange={() => {}}
    />
  );

  // Password input should have a type of password initially
  expect(wrapper.find({type: 'password'})).toHaveLength(1);
  expect(wrapper.find({type: 'text'})).toHaveLength(0);

  wrapper.find('.togglePassword').simulate('click');

  // Password input should have a type of password initially
  expect(wrapper.find({type: 'password'})).toHaveLength(0);
  expect(wrapper.find({type: 'text'})).toHaveLength(1);
});
