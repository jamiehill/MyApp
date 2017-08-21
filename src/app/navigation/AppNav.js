import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import RacingScreen from 'app/container/sport/RacingScreen'

const AppNav = StackNavigator({
  LaunchScreen: {
    screen: RacingScreen,
  },
}, {
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  }
})

export default AppNav
