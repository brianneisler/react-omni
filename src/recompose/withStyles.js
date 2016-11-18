import _ from 'mudash'
import createHelper from 'recompose/createHelper'
import mapStyles from './mapStyles'

const withStyles = input =>
  mapStyles(props => _.assocWith(
    props.styles,
    (
      _.isFunction(input)
        ? input(props, props.styles)
        : input
    ),
    _.assoc
  ))

export default createHelper(withStyles, 'withStyles')
