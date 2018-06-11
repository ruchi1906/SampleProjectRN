import React, { Component } from 'react';
import {View,Alert} from 'react-native';
import {createTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../containers/Categories';
import Search from '../containers/Search';
import Coupons from '../containers/Coupons';
import Home from '../containers/Home';

const TabNav = createTabNavigator({
  Home: {
        screen: Home, 
        navigationOptions: {
          title : 'Home',
          tabBarLabel:"Home",
          tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color='#000' />
        },
        
      },
      Search: {
        screen: Search,
        navigationOptions: {
          tabBarLabel: "Search",
          tabBarIcon: ({ tintColor }) => <Icon name="search" size={20} color='#000' />
      },
      },
      Categories: {
          screen: Categories,
          navigationOptions: {
              tabBarLabel: "Categories",
              tabBarIcon: ({ tintColor }) => <Icon name="th-large" size={20} color='#000' />
          },
        },
        Coupons: {
          screen: Coupons,
          navigationOptions: {
              tabBarLabel:"Coupons",
              tabBarIcon: ({ tintColor }) => <Icon name="tags"  size={20} color='#000' />
          },
        },
    }, {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      lazy: false,
      overflow: 'hidden',
      tabBarOptions: {
      initialRouteName: 'Home',
      showIcon: true,
      inactiveTintColor : '#000',
        activeTintColor: '#000',
        labelStyle: {
          fontSize: 11,
        },
        style: {    
          backgroundColor: 'white',
        },
      },
    });

    export default TabNav;