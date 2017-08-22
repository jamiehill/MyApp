import React from 'react'
import {View, StatusBar} from 'react-native'
import Navigation from 'app/navigation/AppNav'
import {addNavigationHelpers} from 'react-navigation'
import {observer, inject} from 'mobx-react/native'
import styles from './styles'

const Index = props => (
  <View style={styles.applicationView}>
    <StatusBar backgroundColor='black'
      barStyle='light-content'
      style={{ height: 100 }}
    />
    <Navigation
      navigation={addNavigationHelpers({
        dispatch: props.nav.dispatch,
        state: props.nav.state
      })}
    />
  </View>
)

export default inject('nav')(observer(Index))
