'use strict'
import { StackNavigator } from 'react-navigation'
// Screens
import TabTwoScreenOne from '../views/tabTwoView/ScreenOne'
import TabTwoScreenTwo from '../views/tabTwoView/ScreenTwo'
const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne },
  TabTwoScreenTwo: { screen: TabTwoScreenTwo },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabTwoScreenOne'
}
export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
