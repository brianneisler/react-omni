/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
  Platform
} from '../../dist'
import App from './src/App'

AppRegistry.registerComponent('LandingPage', () => App)

if (Platform.OS == 'web') {
  const app = document.createElement('div')
  document.body.appendChild(app)
  AppRegistry.runApplication('LandingPage', {
    rootTag: app
  })
}
