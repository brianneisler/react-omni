import _ from 'mudash'
import createHelper from 'recompose/createHelper'
import mapStyles from './mapStyles'

const withStyles = input =>
  mapStyles(props => {
    const styles = _.get(props, 'styles', {})
    return _.assocWith(
      styles,
      (
        _.isFunction(input)
          ? input(props, styles)
          : input
      ),
      (prev, next) => (_.isObject(prev) && _.isObject(next))
        ? _.assoc(prev, next)
        : next
    )
  })

export default createHelper(withStyles, 'withStyles')
