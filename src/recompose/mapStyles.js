import _ from 'mudash'
import { Component } from 'react'
import { createEagerFactory } from 'recompose'
import createHelper from 'recompose/createHelper'

const mapStyles = stylesMapper => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  const shouldUpdate = (styles, nextStyles) => {
    const newStyleNames = _.xor(styles, nextStyles)
    if (!_.isEmpty(newStyleNames)) {
      return true
    }
    return _.some(nextStyles, (nextStyle, name) =>
      !_.isShallowEqual(_.get(styles, name), nextStyle)
    )
  }
  return class extends Component {
    computedStyles = stylesMapper(this.props, _.get(this.props, 'styles', {}));

    componentWillReceiveProps(nextProps) {
      const nextStyles = stylesMapper(nextProps, _.get(nextProps, 'styles'))
      if (shouldUpdate(this.computedStyles, nextStyles)) {
        this.computedStyles = nextStyles
      }
    }

    render() {
      return factory({
        ...this.props,
        styles: this.computedStyles
      })
    }
  }
}

export default createHelper(mapStyles, 'mapStyles')
