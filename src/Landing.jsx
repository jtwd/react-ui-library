import React from 'react'
import Button from './components/Button'
import Label from './components/Label'
import TextInput from './components/TextInput'
import { IconMenu, IconClose, IconEye, IconEdit, IconLock } from './theme/icons'
import Wrapper from './components/Wrapper'
import Heading from './components/Heading'

const Landing = () =>
  <Wrapper>
    <h1>Landing page</h1>
    <div>
      <Button>Default Button</Button>
      <Button primary>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
    </div>
    <div>
      <Button small>Small Button</Button>
      <Button primary small>
        Small Button
      </Button>
      <Button secondary small>
        Small Button
      </Button>
    </div>
    <div>
      <Button large>Large Button</Button>
      <Button primary large>
        Large Button
      </Button>
      <Button secondary large>
        Large Button
      </Button>
    </div>
    <div>
      <Button icon="lock" small>
        Login
      </Button>
      <Button icon="lock" primary>
        Login
      </Button>
      <Button icon="lock" secondary large>
        Login
      </Button>
    </div>
    <div>
      <Button icon="menu" small />
      <Button icon="close" primary />
      <Button icon="edit" secondary large />
    </div>
    <div>
      <IconMenu />
      <IconClose />
      <IconEye />
      <IconEdit />
      <IconLock />
    </div>
    <Label htmlFor="an-input" required label="A required field" />
    <TextInput htmlId="firstName" label="First name" name="firstName" onChange={() => {}} />
    <TextInput htmlId="lastName" label="Last name" name="lastName" required onChange={() => {}} />
    <TextInput htmlId="email" label="Email address" name="email" type="email" required placeholder="joe@bloggs.com" error="Email is required" onChange={() => {}} />
    <Wrapper text>
      <Heading>Top level heading</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid aspernatur consequuntur doloribus, eos excepturi magni molestias nam natus perspiciatis
        quo repudiandae suscipit, veniam veritatis. Dolor id nisi perferendis?
      </p>
      <Heading level={2}>Second level heading</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid aspernatur consequuntur doloribus, eos excepturi magni molestias nam natus perspiciatis
        quo repudiandae suscipit, veniam veritatis. Dolor id nisi perferendis?
      </p>
      <Heading level={3}>Third level heading</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid aspernatur consequuntur doloribus, eos excepturi magni molestias nam natus perspiciatis
        quo repudiandae suscipit, veniam veritatis. Dolor id nisi perferendis?
      </p>
      <Heading level={4}>Forth level heading</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid aspernatur consequuntur doloribus, eos excepturi magni molestias nam natus perspiciatis
        quo repudiandae suscipit, veniam veritatis. Dolor id nisi perferendis?
      </p>
    </Wrapper>
  </Wrapper>

export default Landing
