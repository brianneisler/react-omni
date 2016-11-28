import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button
} from '../../../dist'

const Hello = (props, context) =>
  <View style={styles.container}>
    <Text>Hello World</Text>
    <Button title={'Back'} onPress={() => context.router.transitionTo('/')} />
  </View>

Hello.contextTypes = {router: React.PropTypes.object}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Hello
