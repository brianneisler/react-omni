/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
  Platform,
  View
} from '../../dist'
import App from './src/App'
import Hello from './src/Hello'
import React from 'react'
import {Match, MemoryRouter as Router} from 'react-router'

const routes = (
  <Router>
    <View style={{flex: 1}}>
      <Match exactly pattern='/' component={App}/>
      <Match pattern='/hello' component={Hello}/>
    </View>
  </Router>
)

AppRegistry.registerComponent('LandingPage', () => () => routes)

if (Platform.OS == 'web') {
  const app = document.createElement('div')
  document.body.appendChild(app)
  AppRegistry.runApplication('LandingPage', {
    rootTag: app
  })
}
