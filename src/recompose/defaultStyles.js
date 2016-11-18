import _ from 'mudash'
import createHelper from 'recompose/createHelper'
import mapStyles from './mapStyles'

const defaultStyles = input =>
  mapStyles(props => _.assocWith(
    (
      _.isFunction(input)
        ? input(props, props.styles)
        : input
    ),
    props.styles,
    _.assoc
  ))

export default createHelper(defaultStyles, 'defaultStyles')
