import React from 'react'
import {Image, Text, View} from 'react-native'
import {compose, defaultProps} from 'recompose'
import {defaultStyles} from '../../recompose'

const enhance = compose(
  defaultProps({
    size: 30,
    placeholder: null
  }),
  defaultStyles(({size}) => {
    const avatar = {
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
      width: size,
      height: size,
      borderRadius: size / 2
    }

    const placeholder = {
      color: '#fff',
      fontWeight: '500',
      fontSize: size / 2.5
    }

    return {
      avatar,
      placeholder
    }
  })
)

const Avatar = enhance(({placeholder, styles, style, source}) => {
  return (
    !source ?
    <View style={[styles.avatar, style]}>
      <Text style={styles.placeholder}>{placeholder}</Text>
    </View>
    : <Image style={[styles.avatar, style]} source={source} resizeMode={'cover'}/>
  )
})

export default Avatar
