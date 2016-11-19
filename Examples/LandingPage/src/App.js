/**
 * Sample React Omni App
 * https://github.com/brianneisler/react-omni
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Display, Text } from '../../../dist'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Display>
          Welcome to React Native for web!
        </Display>
        <Text style={styles.instructions}>
          To get started, edit src/App.web.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
