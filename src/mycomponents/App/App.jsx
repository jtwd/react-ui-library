import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Landing from '../../Landing'
import Search from '../../Search'
import AppWrapper from './AppWrapper'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppWrapper>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
        </AppWrapper>
      </HashRouter>
    )
  }
}

export default App
