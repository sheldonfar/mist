import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createDrawerNavigator({
  Home: {
      screen: HomeScreen,
  },
  Links: {
      screen: LinksScreen,
  },
    Settings: {
      screen: SettingsScreen,
    }
}, {
    initialRouteName: 'Home',
});
