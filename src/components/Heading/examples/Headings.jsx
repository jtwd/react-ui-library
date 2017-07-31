import React from 'react';

import Heading from '../Heading';

export default function Headings() {
  return (
    <div>
      <Heading>Top level heading</Heading>
      <Heading level={2}>Second level heading</Heading>
      <Heading level={3}>Third level heading</Heading>
      <Heading level={4}>Forth level heading</Heading>
    </div>
  )
};
