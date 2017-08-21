import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import Container from 'app/container'
import stores from 'app/stores'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const MyApp = () => (
  <Provider {...stores}>
    <Container />
  </Provider>
)

export default MyApp
