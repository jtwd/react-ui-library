import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../../Landing'
import Search from '../../Search'
import Docs from '../../components/_docs/Docs'
import AppWrapper from './AppWrapper'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppWrapper>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/docs" component={Docs} />
        </AppWrapper>
      </BrowserRouter>
    )
  }
}

export default App
