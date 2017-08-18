import React, { Component } from 'react'
import { arrayOf, shape, string, bool, oneOf, func } from 'prop-types'

import Checkbox from '../Checkbox'
import { Field, ErrorMsg } from '../TextInput/TextInputStyles'
import Label from '../Label'

function buildKey(group, id) {
  return `${group}_${id.replace(' ', '').toLowerCase()}`
}

class CheckboxList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedValues: []
    }
  }

  toggleCheckbox (chkbox) {
    let val = chkbox.label
    if (chkbox.value) val = chkbox.value
    const selectedValues = this.state.selectedValues
    const index = selectedValues.indexOf(val)
    if (index > -1) {
      selectedValues.splice(index, 1)
    } else {
      selectedValues.push(val)
    }
    this.props.onChange(selectedValues)
    this.setState({selectedValues})
  }

  renderCheckboxes () {
    const { list, htmlId } = this.props
    if(!list || list.lenth < 1 || !htmlId) return null

    return list.map(item => {
      const checkboxId = buildKey(htmlId, item.label)
      let value = item.label
      if (item.value) value = item.value

      return (
        <Checkbox
          key={checkboxId}
          htmlId={checkboxId}
          label={item.label}
          handleCheckboxChange={() => this.toggleCheckbox(item, this)}
          checked={item.checked}
          value={value}
        />
      )
    })
  }
  render () {
    const { size, htmlId, title, required, error } = this.props
    let ListTitle = null
    if (title) {
      ListTitle = <Label htmlFor={htmlId} label={title} required={required} />
    }

    return (
      <Field size={size}>
        {ListTitle}
        <ErrorMsg message={(error)} />
        <div id={htmlId}>
          {this.renderCheckboxes()}
        </div>
      </Field>
    )
  }
}

CheckboxList.propTypes = {
  list: arrayOf(shape({
    label: string.isRequired,
    checked: bool
  })).isRequired,
  htmlId: string.isRequired,
  size: oneOf(['default', 'md', 'lg', 'xl']),
  title: string,
  required: bool,
  error: string,
  onChange: func.isRequired
}

CheckboxList.defaultProps = {
  size: 'default',
  title: null,
  required: false,
  error: null
}

export default CheckboxList