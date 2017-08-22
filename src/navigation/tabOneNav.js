'use strict'
import { StackNavigator } from 'react-navigation'
// Screens
import TabOneScreenOne from '../views/tabOneView/ScreenOne'
import TabOneScreenTwo from '../views/tabOneView/ScreenTwo'
import TabOneScreenThree from '../views/tabOneView/ScreenThree'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo },
  TabOneScreenThree: { screen: TabOneScreenThree },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
}
export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
