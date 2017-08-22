import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const OddsButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
)

OddsButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.string,
  navigator: PropTypes.object
}

export default OddsButton
