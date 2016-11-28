import React from 'react'
import {Text} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles, withStyles} from '../../recompose'

const enhance = compose(
  defaultProps({
    size: 1
  }),
  defaultStyles({
    typeface: {
      marginBottom: 10,
      fontWeight: '500'
    }
  }),
  withStyles(({size}) => {
    const typeface = {}
    if (size === 1) {
      typeface.fontSize = 40
    } else if (size === 2) {
      typeface.fontSize = 36
    } else if (size === 3) {
      typeface.fontSize = 32
    } else if (size === 4) {
      typeface.fontSize = 28
    }
    return {
      typeface
    }
  })
)

const Display = enhance(({children, styles}) => {
  return (
    <Text style={styles.typeface}>{children}</Text>
  )
})

export default Display
