import Provider from './provider'
import React from 'react'
import Routing from './screen'
import globalStyle from './index.css'

export default () => (
  <Provider>
    <Routing />
  </Provider>
)
