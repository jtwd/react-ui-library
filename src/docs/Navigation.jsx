import React from 'react'
import PropTypes from 'prop-types'

const Navigation = ({ currentRoute, components }) =>
  <div className="navigation">
    <h3>Components</h3>
    <ul className="navigation-list">
      {components.map(name =>
        <li key={name} className={currentRoute === name && 'docs-active' }>
          <a href={`#${name}`}>
            {name}
          </a>
        </li>
      )}
    </ul>
  </div>

Navigation.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  components: PropTypes.array.isRequired,
  currentRoute: PropTypes.string
}

Navigation.defaultProps = {
  currentRoute: ''
}

export default Navigation
