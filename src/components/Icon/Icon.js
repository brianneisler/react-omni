import _ from 'mudash'
import emoji from 'node-emoji'
import React, { PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { compose, defaultProps, setPropTypes } from 'recompose'
import { defaultStyles, withStyles } from '../../recompose'
import * as Stylus from '../../styles/constants'

const enhance = compose(
  defaultProps({
    onPress: _.noop
  }),
  setPropTypes({
    //onPress: PropTypes.function,
    size: PropTypes.number,
    styles: PropTypes.object,
    tintColor: PropTypes.string,
    type: PropTypes.string.isRequired
  }),
  defaultStyles({
    icon: {
      padding: Stylus.GUTTER_MINI
    },
    iconText: {
      color: Stylus.GRAY_LIGHTER,
      fontSize: Stylus.FONT_SIZE_LG
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
