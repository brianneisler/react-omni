import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { compose, defaultProps, withHandlers } from 'recompose'
import { defaultStyles } from '../recompose'
import { Para } from '../Typography'
import { Colors, Fonts, Spacing } from '../styles'

const enhance = compose(
  defaultProps({
    leftIcon: null,
    rightIcon: null,
    heading: '',
    text: '',
    onPress: () => {},
    underlayColor: Colors.grayLightest
  }),
  defaultStyles({
    listItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.gutter,
      paddingVertical: Spacing.gutter
    },
    leftIcon: {
      alignSelf: 'flex-start',
      marginRight: Spacing.gutter,
      flex: 0
    },
    rightIcon: {
      flex: 0,
      justifyContent: 'center',
      marginLeft: Spacing.gutter
    },
    body: {
      flex: 1
    },
    heading: {
      fontSize: Fonts.fontSizeBase,
      color: Colors('darkBlack'),
      marginBottom: Spacing.gutterMini
    },
    text: {
      fontSize: Fonts.fontSizeBase,
      color: Colors('lightBlack')
    }
  }),
  withHandlers({
    handlePress: props => event => {
      event.preventDefault()
    }
  })
)

const ListItem = enhance(({styles, underlayColor, handlePress, heading, leftIcon, text, rightIcon}) => {
  <TouchableHighlight
    underlayColor={underlayColor}
    onPress={handlePress}>
    <View style={styles.listItem}>
    {
      leftIcon &&
      <View style={styles.leftIcon}>{leftIcon}</View>
    }

    <View style={styles.body}>
    {
      heading && <Display style={styles.heading}>{heading}</Display>
    }
    {
      text && <Para style={styles.text}>{text}</Para>
    }
    </View>

    {
      rightIcon &&
      <View style={styles.listItem_rightIcon}>{rightIcon}</View>
    }
    </View>
  </TouchableHighlight>
})

export default ListItem
