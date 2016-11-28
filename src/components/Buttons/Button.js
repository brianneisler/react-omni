import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles, withStyles} from '../../recompose'
import {Borders, Colors, Fonts, Spacing} from '../styles'

const enhance = compose(
  defaultProps({
    color: Colors('primary'),
    disabled: false,
    onPress: () => ({}),
    title: 'Title',
    size: 'normal'
  }),
  defaultStyles({
    button: {
      backgroundColor: Colors('primary'),
      borderRadius: Borders.radius,
      borderWidth: Borders.width,
      borderColor: Colors('primary')
    },
    title: {
      color: Colors('fullWhite'),
      textAlign: 'center',
      padding: Spacing.gutter,
      fontSize: Fonts.fontSizeBase
    }
  }),
  withStyles(({size, color}) => {
    const title = {}
    const button = {}

    switch (size) {
      case 'lg':
        title.fontSize = Fonts.fontSizeLG
        title.padding = Spacing.gutterMore
        break
      case 'xl':
        title.fontSize = Fonts.fontSizeXL
        title.padding = Spacing.gutterMore
        break
      case 'sm':
        title.fontSize = Fonts.fontSizeSM
        title.padding = Spacing.gutterLess
        break
      case 'xs':
        title.fontSize = Fonts.fontSizeXS
        title.padding = Spacing.gutterMini
        break
      default:
        break
    }

    if (color) {
      button.backgroundColor = Colors(color)
      button.borderColor = Colors(color)
    }

    return {
      title,
      button
    }
  })
)

const Button = enhance(({style, styles, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
})

export default Button
