import _ from 'mudash'
import { Component } from 'react'
import createEagerFactory from './createEagerFactory'
import createHelper from './createHelper'


// const mapValues = (obj, func) => {
//   const result = []
//   let i = 0
//   /* eslint-disable no-restricted-syntax */
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       i += 1
//       result[key] = func(obj[key], key, i)
//     }
//   }
//   /* eslint-enable no-restricted-syntax */
//   return result
// }

const defaultCreateHandler = (props, handlerName) => props[handlerName]


const withHandlers = (handlers, cachedHandlers = {}) => BaseComponent => {

  const factory = createEagerFactory(BaseComponent)
  return class extends Component {
    handlers = _.map(
      handlers,
      (createHandler, handlerName) => (...args) => {
        if (_.isString(createHandler)) {
          handlerName = createHandler
          createHandler = defaultCreateHandler
        }
        const cachedHandler = this.cachedHandlers[handlerName]
        if (cachedHandler) {
          return cachedHandler(...args)
        }

        const handler = createHandler(this.props, handlerName)
        this.cachedHandlers[handlerName] = handler

        if (
          process.env.NODE_ENV !== 'production' &&
          typeof handler !== 'function'
        ) {
          console.error(
            'withHandlers(): Expected a map of higher-order functions. ' +
            'Refer to the docs for more info.'
          )
        }

        return handler(...args)
      }
    );

    cachedHandlers = {};

    componentWillMount() {
      this.cachedHandlers = _.isFunction(cachedHandlers)
        ? cachedHandlers(this.props)
        : cachedHandlers
    }

    componentWillReceiveProps(nextProps) {
      this.cachedHandlers = _.isFunction(cachedHandlers)
        ? cachedHandlers(nextProps)
        : cachedHandlers
    }

    render() {
      return factory({
        ...this.props,
        ...this.handlers
      })
    }
  }
}

export default createHelper(withHandlers, 'withHandlers')
