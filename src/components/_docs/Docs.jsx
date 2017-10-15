import React, { Component } from 'react'
import Navigation from './Navigation'
import ComponentPage from './ComponentPage'
import componentData from '../../../config/componentData'

import './docs.css'
import '../../../node_modules/highlight.js/styles/paraiso-dark.css'

export default class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    })
  }

  render() {
    let { route } = this.state
    const myComponent = route ? componentData.filter(component => component.name === route)[0] : componentData[0]
    if (!route) {
      route = componentData[0].name
    }

    return (
      <div className="docs">
        <Navigation currentRoute={route} components={componentData.map(component => component.name)} />
        <ComponentPage component={myComponent} />
      </div>
    )
  }
}
