import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerParamList } from '../types/params'

import { Home } from '../../screens/home'
import { About } from '../../screens/about'
import { Sidebar } from '../../components/Sidebar'

export const AppNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerParamList>()

  return (
    <Drawer.Navigator
      initialRouteName="HOME"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        overlayColor: '#00000000',
        drawerType: 'back',
      }}>
      <Drawer.Screen name="HOME" component={Home} />
      <Drawer.Screen name="ABOUT" component={About} />
    </Drawer.Navigator>
  )
}
