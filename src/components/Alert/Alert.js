import _ from 'mudash'
import React, { PropTypes } from 'react'
import { Animated, Text, View } from 'react-native'
import { compose, defaultProps, setPropTypes, withHandlers, withProps, withState } from 'recompose'
import Icon from '../Icon'
import { defaultStyles, withStyles } from '../../recompose'
import * as Stylus from '../../styles/constants'

const enhance = compose(
  defaultProps({
    onClosePress: _.noop,
    position: 'top',
    type: 'default'
  }),
  setPropTypes({
    //onClosePress: PropTypes.function,
    position: PropTypes.string,
    type: PropTypes.string
  }),
  withState('visible', 'setVisible', () => true),
  withProps(({ setVisible }) => ({
    hide: () => setVisible(() => false),
    show: () => setVisible(() => true),
    toggle: () => setVisible((visible) => !visible)
  })),
  withHandlers({
    handleClosePress: ({ hide, onClosePress }) => () => {
      hide()
      if (onClosePress) {
        onClosePress()
      }
    }
  }),
  defaultStyles({
    alert: {
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      left: 0,
      right: 0
    },
    alertContent: {
      position: 'relative',
      backgroundColor: Stylus.COLOR_PRIMARY,
      paddingVertical: Stylus.GUTTER_LESS,
      paddingHorizontal: Stylus.GUTTER
    },
    alertMessage: {
      fontSize: Stylus.FONT_SIZE_SM,
      color: Stylus.FULL_WHITE
    },
    alertDismissable: {
      position: 'absolute',
      right: Stylus.GUTTER_LESS,
      top: 0
    }
  }),
  withStyles(({ type, visible }) => {
    const alert = {}
    const alertContent = {}
    if (!visible) {
      alert.height = 0
    }
    if (type === 'positive') {
      alertContent.backgroundColor = Stylus.COLOR_POSITIVE
    } else if (type === 'negative') {
      alertContent.backgroundColor = Stylus.COLOR_NEGATIVE
    }
    return {
      alert,
      alertContent
    }
  })
)

export default enhance(({ children, handleClosePress, styles }) => {
  return (
    <Animated.View style={styles.alert}>
      <View style={styles.alertContent}>
        <Text style={styles.alertMessage}>
          {children}
        </Text>
        <View style={styles.alertDismissable}>
          <Icon type="x" onPress={handleClosePress} />
        </View>
      </View>
    </Animated.View>
  )
})
