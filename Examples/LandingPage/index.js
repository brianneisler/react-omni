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

AppRegistry.registerComponent('moltres-website', () => App)

if (Platform.OS == 'web') {
  const app = document.createElement('div')
  document.body.appendChild(app)
  AppRegistry.runApplication('moltres-website', {
    rootTag: app
  })
}
