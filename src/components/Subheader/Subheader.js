import React from 'react'
import {Text, View} from 'react-native'
import {compose} from 'recompose'
import {defaultStyles} from '../../recompose'
import {Colors, Fonts, Spacing} from '../styles'

const enhance = compose(
  defaultStyles({
    subheader: {
      backgroundColor: Colors('grayLightest'),
      paddingHorizontal: Spacing.gutter,
      paddingVertical: Spacing.gutter
      // marginBottom: Spacing.gutter
    },
    subheaderText: {
      color: Colors('gray'),
      fontWeight: Fonts.fontWeightBase,
      fontSize: Fonts.fontSizeSM
    }
  })
)

const Subheader = enhance(({children, style, styles}) => {
  return (
    <View style={[styles.subheader, style]}>
      <Text style={styles.subheaderText}>{children}</Text>
    </View>
  )
})

export default Subheader
