import React from 'react'
import {Text, View, Animated, Platform, Image, TouchableOpacity} from 'react-native'
import {compose, defaultProps, getContext, withState, withContext, withHandlers} from 'recompose'
import {defaultStyles, withStyles} from '../../recompose'
import {Colors, Fonts} from '../styles'

const enhance = compose(
  getContext({ drawer: React.PropTypes.object }),
  defaultProps({
    title: 'Title'
  }),
  defaultStyles({
    wrapper: {
      flex: 1,
      paddingTop: Platform.OS === 'web' ? 50 : 60
    },
    navbar: {
      backgroundColor: Colors('grayLighter'),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9,
      flex: 1,
      flexDirection: 'row',
      height: Platform.OS === 'ios' ? 64 : 50
    },
    title: {
      textAlign: 'center',
      marginTop: Platform.OS === 'web' ? 16 : 26,
      fontSize: Fonts.fontSizeBase,
      color: Colors('darkBlack')
    },
    leftButton: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconMenu: {
      width: 40,
      height: 20,
      resizeMode: 'contain'
    }
  }),
  withStyles(() => {
    const iconMenu = {}

    if (Platform.OS === 'ios') {
      iconMenu.tintColor = Colors('fullWhite')
    }
    if (Platform.OS === 'android') {
      iconMenu.overlayColor = Colors('fullWhite')
    }
    if (Platform.OS === 'web') {
      // iconMenu.WebkitFilter = 'brightness(0) invert(1)'
    }

    return { iconMenu }
  }),
  withHandlers({
    onLeftButtonPress: (props) => (event) => {
      event.preventDefault()
      props.drawer.toggle()
    }
  })
)



const Navbar = enhance(({children, styles, title, onLeftButtonPress}) => {
  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.navbar]}>
        <TouchableOpacity onPress={onLeftButtonPress} style={styles.leftButton}>
          <Image source={require('./menu_burger.png')} style={styles.iconMenu}/>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
      {children}
    </View>
  )
})

export default Navbar
