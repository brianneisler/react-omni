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
import { Match, MemoryRouter, BrowserRouter } from 'react-router'

const Routes = () =>
  <View style={{flex: 1}}>
    <Match exactly pattern='/' component={App}/>
    <Match pattern='/hello' component={Hello}/>
  </View>

AppRegistry.registerComponent('LandingPage', () => () => {
  return (
    Platform.OS === 'web' ?
      <BrowserRouter><Routes /></BrowserRouter>
    : <MemoryRouter><Routes /></MemoryRouter>
  )
})

if (Platform.OS == 'web') {
  const app = document.createElement('div')
  document.body.appendChild(app)
  AppRegistry.runApplication('LandingPage', {
    rootTag: app
  })
}
