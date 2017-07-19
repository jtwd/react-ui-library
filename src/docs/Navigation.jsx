import React from 'react'
import PropTypes from 'prop-types'

const Navigation = ({ components }) =>
  <div className="navigation">
    <h3>Components</h3>
    <ul className="navigation">
      {components.map(name =>
        <li key={name}>
          <a href={`#${name}`}>
            {name}
          </a>
        </li>
      )}
    </ul>
  </div>

Navigation.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  components: PropTypes.array.isRequired
}

export default Navigation
