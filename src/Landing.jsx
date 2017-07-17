import React from 'react'
import Button from './mycomponents/Button'
import IconButton from './mycomponents/IconButton'
import Label from './mycomponents/Label'
import TextInput from './mycomponents/TextInput'
import { IconMenu, IconClose, IconEye, IconEdit, IconLock } from './theme/icons'
import Wrapper from './mycomponents/Wrapper'

const Landing = () =>
  <Wrapper>
    <h1>Landing page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid aspernatur consequuntur
      doloribus, eos excepturi magni molestias nam natus perspiciatis quo repudiandae suscipit, veniam veritatis. Dolor
      id nisi perferendis?
    </p>
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
      <IconButton icon="lock" small>
        Login
      </IconButton>
      <IconButton icon="lock" primary>
        Login
      </IconButton>
      <IconButton icon="lock" secondary large>
        Login
      </IconButton>
    </div>
    <div>
      <IconButton icon="menu" small />
      <IconButton icon="close" primary />
      <IconButton icon="edit" secondary large />
      <IconButton icon="not-valid">Invalid Icon</IconButton>
      <IconButton icon="not-valid" />
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
    <TextInput
      htmlId="email"
      label="Email address"
      name="email"
      type="email"
      required
      placeholder="joe@bloggs.com"
      error="Email is required"
      onChange={() => {}}
    />
  </Wrapper>

export default Landing
