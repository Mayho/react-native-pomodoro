import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { ReactModoroNavigator } from '~/containers'

class AppContainer extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <ReactModoroNavigator />
      </View>
    )
  }
}

export default AppContainer;
