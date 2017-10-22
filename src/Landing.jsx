import React from 'react'

import Button from './components/Button'
import Label from './components/Label'
import TextInput from './components/TextInput'
import { IconMenu, IconClose, IconEye, IconEdit, IconLock } from './components/_theme/icons'
import Wrapper from './components/Wrapper'
import Heading from './components/Heading'
import PageHeader from './components/PageHeader'

const Landing = () =>
  <div>
    <PageHeader title="Landing Page" />
    <div>
      <Button>Default Button</Button>
      <Button to='/docs' uiStyle='primary'>Primary Button</Button>
      <Button uiStyle='secondary'>Secondary Button</Button>
    </div>
    <div>
      <Button uiSize='small'>Small Button</Button>
      <Button uiStyle='primary' uiSize='small'>
        Small Button
      </Button>
      <Button uiStyle='secondary' uiSize='small'>
        Small Button
      </Button>
    </div>
    <div>
      <Button uiSize='large'>Large Button</Button>
      <Button uiStyle='primary' uiSize='large'>
        Large Button
      </Button>
      <Button uiStyle='secondary' uiSize='large'>
        Large Button
      </Button>
    </div>
    <div>
      <Button href="https://www.google.com" icon="caretRight" uiSize='small'>
        Google
      </Button>
      <Button to='/docs' icon="info" uiStyle='primary'>
        Docs
      </Button>
      <Button type="submit" icon="lock" uiStyle='secondary' uiSize='large'>
        Login
      </Button>
    </div>
    <div>
      <Button icon="menu" uiSize='small' />
      <Button icon="close" uiStyle='primary' />
      <Button icon="edit" uiStyle='secondary' uiSize='large' />
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
    <Wrapper text collapse>
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
  </div>

export default Landing
