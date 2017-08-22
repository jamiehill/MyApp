import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import RoundedButton from 'app/component/RoundedButton'
import { Images } from 'styles'
import styles from './styles'

const RacingScreen = props => (
  <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image source={Images.appclon} style={styles.logo} />
      </View>

      <View style={styles.section} >
        <Text style={styles.sectionText}>
          Racing Yeah!
        </Text>
      </View>

      <RoundedButton
        text={`Search "Jamie" on Spotify`}
      />

      <RoundedButton
        text={`Login`}
      />

    </ScrollView>
  </View>
)

RacingScreen.navigationOptions = {
  title: <Image source={Images.launch} style={styles.top} />,
  headerVisible: true
}

export default RacingScreen
