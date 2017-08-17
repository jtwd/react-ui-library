import React, { Component } from 'react'
import { string, func, bool } from 'prop-types'
import { IconWrapper, StyledCheckbox, StyledLabel } from "./Checkbox.styles"
import Icon from '../Icon'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false
    }
  }

  componentWillMount () {
    if (this.props.checked) this.toggleCheckboxChange()
  }

  toggleCheckboxChange() {
    const { handleCheckboxChange, label } = this.props

    this.setState(({isChecked}) => ({ isChecked: !isChecked }))

    handleCheckboxChange(label)
  }

  render () {
    const { label, htmlId } = this.props
    const { isChecked } = this.state
    const checkboxIconName = isChecked ? 'checkboxOn' : 'checkboxOff'

    return (
      <StyledLabel htmlFor={htmlId} checked={isChecked}>
        <StyledCheckbox type="checkbox" id={htmlId} value={label} checked={isChecked} onChange={() => this.toggleCheckboxChange()} />
        <IconWrapper>
          <Icon icon={checkboxIconName} />
        </IconWrapper>
        {label}
      </StyledLabel>
    )
  }
}

Checkbox.propTypes = {
  label: string.isRequired,
  handleCheckboxChange: func.isRequired,
  htmlId: string.isRequired,
  checked: bool
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
