import { StyleSheet } from 'react-native'
import { AppStyles, Metrics, Colors } from 'styles'

export default StyleSheet.create({
  ...AppStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  listContent: {

  },
  separator: {
    backgroundColor: Colors.puke,
    height: 1
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  top: {
    marginTop: -5,
    height: 40,
    width: 40
  },
  centered: {
    alignItems: 'center'
  }
})
