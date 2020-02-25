import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Login:{
    //   screen:Login,
    //   navigationOptions:{
    //     header:null
    //   }
    // },
    // Signup:{
    //   screen:Signup,
    //   navigationOptions:{
    //     header:null
    Home:{
      screen:Home,
      navigationOptions:{
        header: null
      }
    }
  
    
  })
);
