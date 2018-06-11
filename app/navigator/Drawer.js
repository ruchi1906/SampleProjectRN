/* drawer navigator & its component screen*/
import React, { Component } from "react";
import SideBar from "../containers/SideBar/SideBar";
import { createDrawerNavigator } from "react-navigation";
import TabNav from '../navigator/TabNav';

const Drawer = createDrawerNavigator(
  {
    TabNav: { screen: TabNav,
    navigationOptions: () => ({
      drawerLockMode: 'locked-closed'
    }),
  },
},
  {
    initialRouteName: 'TabNav',
    drawerPosition : "left",
    contentComponent: ({ navigation }) => (<SideBar navigation={navigation} />),
  }
);

export default Drawer;
