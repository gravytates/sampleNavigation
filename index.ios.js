'use strict'
// React
import React from 'react'
import { AppRegistry } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './src/store'
// Navigation
import TabBarNavigation from './src/navigation/TabBarNavigation'
class SampleNavigation extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('SampleNavigation', () => SampleNavigation)
