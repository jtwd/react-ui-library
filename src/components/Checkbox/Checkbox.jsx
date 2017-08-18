import React, { Component } from 'react'
import { string, func, bool } from 'prop-types'
import { IconWrapper, StyledCheckbox, StyledLabel } from "./Checkbox.styles"
import Icon from '../Icon'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false,
      hasFocus: false
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

  toggleFocus () {
    this.setState(({hasFocus}) => ({ hasFocus: !hasFocus }))
  }

  render () {
    const { label, htmlId, value } = this.props
    const { isChecked, hasFocus } = this.state
    const checkboxIconName = isChecked ? 'checkboxOn' : 'checkboxOff'
    let chkValue = label
    if (value) chkValue = value

    return (
      <StyledLabel htmlFor={htmlId} checked={isChecked} focus={hasFocus}>
        <StyledCheckbox
          type="checkbox"
          id={htmlId}
          value={chkValue}
          checked={isChecked}
          onChange={() => this.toggleCheckboxChange()}
          onFocus={() => this.toggleFocus()}
          onBlur={() => this.toggleFocus()}
        />
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
  value: string,
  checked: bool
}

Checkbox.defaultProps = {
  checked: false,
  value: null
}

export default Checkbox
