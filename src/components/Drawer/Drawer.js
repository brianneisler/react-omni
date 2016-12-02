/*
  * Navbar controls the Drawer states
  * Since Drawer is the higher component, the state needs to be passed as props to the Navbar
  * or create a context value for the drawer state, this way it can be access from other lower level children
  * Tapping outside of the drawer pane close the Drawer
  *
*/

import React from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { compose, defaultProps, withContext, withHandlers, withState } from 'recompose'
import { defaultStyles, withStyles, withPanResponder } from '../../recompose'
import { Borders, Colors, Fonts, Spacing } from '../styles'

const DRAWER_WIDTH = 300

const enhance = compose(
  withState('open', 'setOpen', true),
  withHandlers({
    toggleDrawer: (props) => () => {
      props.setOpen(!props.open)
    }
  }),
  withContext(
    { drawer: React.PropTypes.object },
    (props) => ({ drawer: { open: props.open, toggle: props.toggleDrawer } })
  ),
  defaultProps({
    title: 'Title'
  }),
  defaultStyles({
    wrapper: {
      flex: 1
    },
    overlay: {
      backgroundColor: Colors('lightBlack'),
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99
    },
    drawer: {
      backgroundColor: Colors('fullWhite'),
      top: 0,
      bottom: 0,
      left: 0,
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
      overflow: 'hidden',
      zIndex: 999
    }
  }),
  withStyles((props) => {
    const drawer = {}

    drawer.width = props.open ? DRAWER_WIDTH : 0

    return {
      drawer
    }
  }),
  withPanResponder({
    onStartShouldSetPanResponder: (event, gesture) => {
      console.log('onStartShouldSetPanResponder')
    },
    onPanResponderGrant: (event, gesture) => {
      console.log('onPanResponderGrant')
    },
    onPanResponderTerminate: (event, gesture) => {
      console.log('onPanResponderTerminate')
    },
    onPanResponderRelease: (event, gesture) => {
      console.log('onPanResponderRelease')
    }
  })
)

const Drawer = enhance(({children, panResponder, open, toggleDrawer, styles}) => {
  return (
    <View style={styles.wrapper}>
      { open &&
        <View style={styles.overlay} />
      }
      <View style={[styles.drawer]} {...panResponder.panHandlers}>
        <Text>Drawer</Text>
        <Text onPress={toggleDrawer}>Close</Text>
      </View>
      {children}
    </View>
  )
})

export default Drawer
