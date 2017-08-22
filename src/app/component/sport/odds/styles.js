import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from 'styles'

export default StyleSheet.create({
  button: {
    height: Metrics.btnHeight,
    width: 100,
    borderRadius: Metrics.baseRadius,
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: Colors.puke,
    justifyContent: 'center'
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseSpace
  }
})
