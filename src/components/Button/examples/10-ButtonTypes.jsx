import React from 'react';

import Button from '../Button';

/** Types */
export default function ButtonTypes() {
  return (
    <div>
      <Button>Default button</Button>
      <Button primary>Primary button</Button>
      <Button secondary>Secondary button</Button>
      <Button danger>Danger button</Button>
      <Button link>Link button</Button>
    </div>
  )
};
