import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator } from 'react-navigation-drawer'
import {Platform, StatusBar, Dimensions} from 'react-native';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import DrawerScreen from '../screens/Drawer';
import About from '../screens/About';
import Changepassword from '../screens/Changepassword';
import Editprofile from '../screens/Editprofile';
import Search from '../screens/Search';
import HomeOrder from '../screens/HomeOrder';

let headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}
let width = Dimensions.get("window").width

let DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: MainTabNavigator
    }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerScreen,
    drawerPosition: "left",
    drawerType: "slide",
    headerStyle,
    drawerWidth: width / 1.6,
  }
)

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login:{
      screen:Login,
      navigationOptions:{
        header:null
      }
    },
    Signup:{
      screen:Signup,
      navigationOptions:{
        header:null
      }
    },
    Home:{
      screen:DrawerNavigator,
      navigationOptions:{
        header: null
      }
    },
    About:{
      screen:About,
      navigationOptions:{
        header: null
      }
    },
    Changepassword:{
      screen:Changepassword,
      navigationOptions:{
        header: null
      }
    },
    Editprofile:{
      screen:Editprofile,
      navigationOptions:{
        header: null
      }
    },
    Search:{
      screen:Search,
      navigationOptions:{
        header: null
      }
    },
    HomeOrder:{
      screen:HomeOrder,
      navigationOptions:{
        header: null
      }
    }
  })
);
