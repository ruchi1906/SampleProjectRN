import React, {Component} from 'react';
import { Text, TextInput } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Drawer from '../components/navigator/Drawer';
/** allowfontscaling is to avoid fontscaling when device fonts are changed */
Text.defaultProps.allowFontScaling=false;
TextInput.defaultProps.allowFontScaling=false;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {      
    }
  }
  render() {
      return <Stack/>
  }
}
//screen added in stack navigator
const Stack = createStackNavigator({
  Drawer: {
    screen: Drawer,
    title: Drawer,
    navigationOptions: {
      header: null
    }
  },
}, {initialRouteName: 'Drawer'});

export default Main;
