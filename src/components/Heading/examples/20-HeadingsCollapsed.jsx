import React from 'react';

import Heading from '../Heading';

export default function Headings() {
  return (
    <div>
      <Heading collapse>Top level heading</Heading>
      <Heading collapse level="2">Second level heading</Heading>
      <Heading collapse level="3">Third level heading</Heading>
      <Heading collapse level="4">Forth level heading</Heading>
    </div>
  )
};
