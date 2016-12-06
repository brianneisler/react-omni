import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { compose, defaultProps } from 'recompose'
import { defaultStyles, withStyles } from '../../recompose'
import { Borders, Colors, Fonts, Spacing } from '../styles'

const enhance = compose(
  defaultProps({
    placeholder: null,
    label: null
  }),
  defaultStyles({
    label: {
      fontSize: Fonts.fontSizeBase
    },
    input: {
      borderWidth: Borders.width,
      borderColor: Borders.color,
      height: 30
    }
  })
)

const TextField = enhance(({label, styles}) => {
  return (
    <View>
      { label &&
        <Text style={styles.label}>{label}</Text>
      }
      <TextInput type='text' placeholder='Your name' style={styles.input}/>
    </View>
  )
})

export default TextField
