import React from 'react'
import {View, Text} from 'react-native'
import {compose, defaultProps} from 'recompose'
import { defaultStyles } from '../../recompose'
import {Borders, Colors, Fonts, Spacing} from '../styles'

const enhance = compose(
  defaultProps({
    color: Colors('darkBlack')
  }),
  defaultStyles(({color}) => ({
    badge: {
      backgroundColor: Colors(color),
      borderRadius: Borders.radius,
      paddingHorizontal: Spacing.gutterMini,
      paddingVertical: Spacing.gutterMini
    },
    text: {
      color: Colors('fullWhite'),
      fontSize: Fonts.fontSizeXS,
      fontWeight: Fonts.fontWeightBase
    },
    primary: {
      backgroundColor: Colors('primary')
    }
  }))
)

const Badge = enhance(({children, style, styles}) => {
  return (
    <View style={[styles.badge, style]}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  )
})

export default Badge
