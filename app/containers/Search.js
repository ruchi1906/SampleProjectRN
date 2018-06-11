import React, { Component } from "react";
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
import styles from "../styles/homeStyle.js";
import Header from '../components/Header';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
  
    render() {
        return(
            <View style={styles.container}>
            <Header
                title={'Search'}
                isDrawer={false}
                back={() => {this.props.navigation.goBack(null)}}/>
            <Text style={styles.welcomeTxt}>Search</Text>
            </View>
        )
    }
  }
