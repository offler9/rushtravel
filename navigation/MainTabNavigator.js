import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/Order';
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
    activeTintColor: 'rgba(0,0,0,0.7)',
    inactiveTintColor: 'rgba(0,0,0,0.5)',
    inactiveBackgroundColor: '#f3f44e',
    activeBackgroundColor: '#f3f44e',
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

const OrderStack = createStackNavigator(
  {
    Order: OrderScreen,
  },
  config
);

OrderStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'rgba(0,0,0,0.7)',
    inactiveTintColor: 'rgba(0,0,0,0.5)',
    inactiveBackgroundColor: '#f3f44e',
    activeBackgroundColor: '#f3f44e',
  },
  tabBarLabel: 'Order',
  tabBarIcon: ({ focused }) => (
    <Icon
      name={'plussquareo'}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

OrderStack.path = '';


const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'rgba(0,0,0,0.7)',
    inactiveTintColor: 'rgba(0,0,0,0.5)',
    inactiveBackgroundColor: '#f3f44e',
    activeBackgroundColor: '#f3f44e',
  },
  tabBarLabel: 'Status',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} 
    name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
     />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  OrderStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
