// @flow

import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import OddsButton from 'app/component/sport/odds/OddsButton'
import styles from './styles'
import {Colors} from 'styles'

const RacingRow = props => (
  <TouchableHighlight underlayColor={Colors.fire50} onPress={() => {}}>
    <View style={styles.row}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.selection}>{props.selection}</Text>
        <Text style={styles.trainer}>{props.trainer}</Text>
        <Text style={styles.weight}>{props.weight}</Text>
      </View>
      <OddsButton text='5/2' />
    </View>
  </TouchableHighlight>
)

export default RacingRow
