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
import styles from "./styles";
import Header from '../../components/Header/Header';

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
  
    render() {
        return(
            <View style={styles.container}>
            <Header
                title={'Categories'}
                isDrawer={false}
                back={() => {this.props.navigation.goBack(null)}}/>
            <Text style={styles.welcomeTxt}>Categories</Text>
            </View>
        )
    }
  }
