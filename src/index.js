import React from 'react'
import { Provider } from 'mobx-react'
import Container from 'app/container'
import stores from 'app/stores'

const MyApp = () => (
  <Provider {...stores}>
    <Container />
  </Provider>
)

export default MyApp
