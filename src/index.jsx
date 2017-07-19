import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'
// import registerServiceWorker from './registerServiceWorker'

import './theme/globals'
import '../node_modules/highlight.js/styles/paraiso-dark.css'

const root = document.getElementById('root')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const NextApp = require('./containers/App').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root
    )
  })
}

// registerServiceWorker()
