import React from 'react'
import PropTypes from 'prop-types'
import CodeExample from './CodeExample'

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showCode: false }
  }

  toggleCode(event) {
    event.preventDefault()
    // eslint-disable-next-line no-restricted-syntax, no-labels, no-unused-labels, no-unused-expressions
    this.setState(prevState => ({ showCode: !prevState.showCode }))
  }

  render() {
    const { showCode } = this.state
    const { code, description, name } = this.props.example
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const ExampleComponent = require(`../${this.props.componentName}/examples/${name}.jsx`).default
    return (
      <div className="example">
        {description &&
          <h4>
            {description}
          </h4>}

        <div>
          <ExampleComponent/>
        </div>

        <div className="example__toggler">
          <a
            href=""
            onClick={e => {
              this.toggleCode(e)
            }}
          >
            {showCode ? 'Hide' : 'Show'} Code
          </a>
        </div>
        {showCode &&
          <div className="codeExample">
            <CodeExample>
              {code}
            </CodeExample>
          </div>}
      </div>
    )
  }
}

Example.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example
