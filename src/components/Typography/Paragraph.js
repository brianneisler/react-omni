import React from 'react'
import {Text} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles, withStyles} from '../../recompose'

const enhance = compose(
  defaultProps({
    lead: false,
    align: 'left'
  }),
  defaultStyles({
    typeface: {
      fontSize: 16,
      fontWeight: '300',
      color: '#343434',
      marginBottom: 10
    }
  }),
  withStyles(({lead, align}) => {
    const typeface = {}
    typeface.fontSize = lead ? 20 : 16
    typeface.textAlign = align
    return {
      typeface
    }
  })
)

const Display = enhance(({children, style, styles}) => {
  return (
    <Text style={[styles.typeface, style]}>{children}</Text>
  )
})

export default Display
