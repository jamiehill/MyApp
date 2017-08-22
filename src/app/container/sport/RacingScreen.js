import React from 'react'
import { ScrollView, Image, View, ListView } from 'react-native'
import RacingItem from './items/RacingItem'
import Presenter from './RacingScreenPM'
import { presenter } from 'app/util/hoc'
import { Images } from 'styles'
import styles from './styles'

const Separator = ({ rowId }) => (
  <View key={rowId} style={styles.separator} />
)

const RacingScreen = props => (
  <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
    <ScrollView style={styles.container}>
      <ListView
        contentContainerStyle={styles.listContent}
        renderSeparator={Separator}
        dataSource={props.pm.dataSource}
        renderRow={RacingItem}
        pageSize={15}
      />
    </ScrollView>
  </View>
)

RacingScreen.navigationOptions = {
  title: <Image source={Images.launch} style={styles.top} />,
  headerVisible: true
}

export default presenter(Presenter, RacingScreen)
