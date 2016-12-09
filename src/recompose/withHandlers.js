import _ from 'mudash'
import { Component } from 'react'
import { createEagerFactory } from 'recompose'
import createHelper from 'recompose/createHelper'

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
          console.error( //eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' +
            'Refer to the docs for more info.'
          )
        }

        return handler(...args)
      }
    );

    cachedHandlers = {}

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
