import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#ccbc58',
    inactiveTintColor: 'grey',
    inactiveBackgroundColor: '#2e2d2d',
    activeBackgroundColor: '#2e2d2d',
  },
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? 'ios-home' : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: '#ccbc58',
    inactiveTintColor: 'grey',
    inactiveBackgroundColor: '#2e2d2d',
    activeBackgroundColor: '#2e2d2d',
  },
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
     />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
