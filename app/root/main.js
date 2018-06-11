import React, {Component} from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Text,Dimensions,
  NetInfo,
  Platform,
  Image,
  View,TextInput
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Drawer from '../navigator/Drawer';

Text.defaultProps.allowFontScaling=false;
TextInput.defaultProps.allowFontScaling=false;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  componentWillMount() { 
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
