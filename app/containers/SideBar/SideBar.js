import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  TouchableHighlight,
  Alert
} from "react-native";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../../styles/leftmenuStyle';
import { SafeAreaView } from 'react-navigation';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this
      .props
      .navigation);
  }

  componentDidMount() {}

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.subContainer} onPress={()=>{this.props.navigation.goBack(null)}}>
          <Text style={styles.menuTxt}>Home</Text>
        </TouchableOpacity>
      </SafeAreaView>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
