import { action, observable } from 'mobx'
import AppNav from 'app/navigation/AppNav'

class Navigation {

  @observable.ref state = {
    index: 0,
    routes: [
      { key: 'LaunchScreen', routeName: 'LaunchScreen' }
      // { key: "LoginScreen", routeName: "LoginScreen" }
    ]
  }

  @action dispatch = (action, state = true) => {
    const previous = state ? this.state : null
    return this.state = AppNav.router
      .getStateForAction(action, previous)
  }
}

export default new Navigation()
