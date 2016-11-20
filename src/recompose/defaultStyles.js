import _ from 'mudash'
import createHelper from 'recompose/createHelper'
import mapStyles from './mapStyles'

const defaultStyles = input =>
  mapStyles(props => {
    const styles = _.get(props, 'styles', {})
    return _.assocWith(
      (
        _.isFunction(input)
          ? input(props, styles)
          : input
      ),
      styles,
      (prev, next) => (_.isObject(prev) && _.isObject(next))
        ? _.assoc(prev, next)
        : next
    )
  })

export default createHelper(defaultStyles, 'defaultStyles')
