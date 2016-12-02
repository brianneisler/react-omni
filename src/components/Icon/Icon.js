import _ from 'mudash'
import emoji from 'node-emoji'
import React, { PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { compose, defaultProps, setPropTypes } from 'recompose'
import { defaultStyles, withStyles } from '../../recompose'
import { Colors, Fonts, Spacing } from '../styles'

const enhance = compose(
  defaultProps({
    onPress: _.noop
  }),
  setPropTypes({
    size: PropTypes.number,
    styles: PropTypes.object,
    tintColor: PropTypes.string,
    type: PropTypes.string.isRequired
  }),
  defaultStyles({
    icon: {
      padding: Spacing.gutterMini
    },
    iconText: {
      color: Colors('grayLighter'),
      fontSize: Fonts.fontSizeBase
    }
  }),
  withStyles(({ size, tintColor }) => {
    const iconText = {}
    if (tintColor) {
      iconText.color = tintColor
    }
    if (size) {
      iconText.fontSize = size
    }
    return {
      iconText
    }
  })
)

export default enhance(({ onPress, styles, type }) => {
  return ( //<Text onPress={() => console.log('why you no work!')} style={styles.iconText}>{emoji.get(type)}</Text>
    <TouchableOpacity
      onPress={onPress}
      style={styles.icon}>
      <Text style={styles.iconText}>{emoji.get(type)}</Text>
    </TouchableOpacity>
  )
})
