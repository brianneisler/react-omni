import React from 'react'
import {Text, View, Animated, Platform} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles} from '../../recompose'
import {Colors, Fonts} from '../styles'

const enhance = compose(
  defaultProps({
    title: 'Title'
  }),
  defaultStyles({
    wrapper: {
      flex: 1,
      paddingTop: Platform.OS === 'web' ? 50 : 60
    },
    navbar: {
      backgroundColor: Colors('grayLight'),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: Platform.OS === 'web' ? 50 : 60,
      zIndex: 99
    },
    title: {
      textAlign: 'center',
      marginTop: Platform.OS === 'web' ? 16 : 26,
      fontWeight: Fonts.fontWeightMedium,
      fontSize: Fonts.fontSizeBase
    }
  })
)

const Navbar = enhance(({children, styles, title}) => {
  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.navbar]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
      {children}
    </View>
  )
})

export default Navbar
