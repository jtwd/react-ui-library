import React, { Component } from 'react'
import { arrayOf, shape, string, bool, oneOf } from 'prop-types'

import Checkbox from '../Checkbox'
import { Field, ErrorMsg } from '../TextInput/TextInputStyles'
import Label from '../Label'

function buildKey(group, id) {
  return `${group}_${id.replace(' ', '').toLowerCase()}`
}

class CheckboxList extends Component {
  renderCheckboxes () {
    const { list, htmlId } = this.props

    if(!list || list.lenth < 1 || !htmlId) return null
    return list.map(item => {
      const checkboxId = buildKey(htmlId, item.label)

      return (
        <Checkbox
          key={checkboxId}
          htmlId={checkboxId}
          label={item.label}
          handleCheckboxChange={() => {}}
          checked={item.checked}
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
  error: string
}

CheckboxList.defaultProps = {
  size: 'default',
  title: null,
  required: false,
  error: null
}

export default CheckboxList