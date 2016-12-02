import _ from 'mudash'
import { PanResponder } from 'react-native'
import createHelper from 'recompose/createHelper'
import { compose, withHandlers, withProps, withPropsOnChange } from 'recompose'

const HANDLERS = [
  'onStartShouldSetPanResponder',
  'onStartShouldSetPanResponderCapture',
  'onMoveShouldSetPanResponder',
  'onMoveShouldSetPanResponderCapture',
  'onPanResponderGrant',
  'onPanResponderMove',
  'onPanResponderTerminationRequest',
  'onPanResponderRelease',
  'onPanResponderTerminate',
  'onShouldBlockNativeResponder'
]

const withPanResponder = input => compose(
  withHandlers(HANDLERS, input),
  withPropsOnChange(() => false, (props) => ({
    panResponder: PanResponder.create(_.pick(props, HANDLERS))
  }))
)

export default createHelper(withPanResponder, 'withPanResponder')
