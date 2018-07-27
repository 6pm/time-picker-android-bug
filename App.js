/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, TimePickerAndroid } from 'react-native';

export default class App extends Component {

  state = {
    hour: 0,
    minute: 0,
  }

  _openPopup = () => {
    TimePickerAndroid.open().then(({ action, hour, minute }) => {
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          hour, minute,
        })
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._openPopup}>
          <Text>open</Text>
        </TouchableHighlight>

        <Text>{`${this.state.hour} : ${this.state.minute}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
