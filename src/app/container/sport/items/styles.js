// @flow

import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Fonts } from 'styles'

export default StyleSheet.create({
  row: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: Metrics.baseSpace
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    color: Colors.black,
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
    marginVertical: 0
  },
  selection: {
    fontSize: Fonts.size.h6,
    color: Colors.puke
  },
  trainer: {
    fontSize: Fonts.size.medium,
    color: Colors.black
  },
  weight: {
    fontSize: Fonts.size.medium,
    color: Colors.black
  },

  rightContainer: {
    flexDirection: 'column',
    padding: Metrics.baseSpace,
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1
  },
  imgContainer: {
    width: 60,
    paddingVertical: Metrics.baseSpace,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: Metrics.baseRadius,
    borderWidth: Metrics.smallLine
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.coal,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'left',
    color: Colors.fire
  }
})
