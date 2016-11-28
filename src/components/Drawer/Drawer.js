import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles, withStyles} from '../../recompose'
import {Borders, Colors, Fonts, Spacing} from '../styles'

const enhance = compose(
  defaultProps({
    title: 'Title'
  }),
  defaultStyles({
    drawer: {
      backgroundColor: Colors('fullBlack'),
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 200,
      zIndex: 999
    }
  })
)

const Drawer = enhance(({styles, title}) => {
  return (
    <View style={[styles.drawer]}>
      <Text>{title}</Text>
    </View>
  )
})

export default Drawer
