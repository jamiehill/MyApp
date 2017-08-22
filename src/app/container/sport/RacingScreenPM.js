import { observable } from 'mobx'
import {ListView} from 'react-native'

class RacingScreenPM {
  @observable dataSource = []

  constructor (props) {
    this.props = props

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.dataSource = ds.cloneWithRows([
      { id: 123, name: '2:00 Southwell', selection: 'Pennies and Pounds', trainer: 'Canyon, T / King, A', weight: '6 yrs, 11-6lbs' },
      { id: 234, name: '2:00 Southwell', selection: 'Pennies and Pounds', trainer: 'Canyon, T / King, A', weight: '6 yrs, 11-6lbs' },
      { id: 345, name: '2:00 Southwell', selection: 'Pennies and Pounds', trainer: 'Canyon, T / King, A', weight: '6 yrs, 11-6lbs' },
      { id: 456, name: '2:00 Southwell', selection: 'Pennies and Pounds', trainer: 'Canyon, T / King, A', weight: '6 yrs, 11-6lbs' },
      { id: 567, name: '2:00 Southwell', selection: 'Pennies and Pounds', trainer: 'Canyon, T / King, A', weight: '6 yrs, 11-6lbs' }
    ])
  }
}

export default RacingScreenPM
