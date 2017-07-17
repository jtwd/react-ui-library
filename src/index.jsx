import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'
// import registerServiceWorker from './registerServiceWorker'

import './theme/globals'

const root = document.getElementById('root')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./mycomponents/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./mycomponents/App').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root
    )
  })
}

// registerServiceWorker()
