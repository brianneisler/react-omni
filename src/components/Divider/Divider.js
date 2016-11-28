import React from 'react'
import {View} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles} from '../../recompose'
import {Borders, Colors} from '../styles'

const enhance = compose(
  defaultProps({
    inset: 75
  }),
  defaultStyles(({inset}) => ({
    divider: {
      height: Borders.width,
      backgroundColor: Colors('grayLight'),
      alignSelf: 'stretch',
      marginLeft: inset
    }
  }))
)

const Divider = enhance(({style, styles}) => {
  return (
    <View style={[styles.divider, style]} />
  )
})

export default Divider
