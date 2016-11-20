import React from 'react'
import {Text} from 'react-native'
import {compose} from 'recompose'
import {defaultStyles} from '../../recompose'


const enhance = compose(
  defaultStyles({
    large: {
      fontSize: 36
    }
  })
)

const Display = enhance(({children, styles}) => {
  return (
    <Text style={styles.large}>{children}</Text>
  )
})

export default Display
