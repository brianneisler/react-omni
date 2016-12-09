import { Component } from 'react'
import { createEagerFactory } from 'recompose'
import createHelper from 'recompose/createHelper'

const withWTF = BaseComponent => {
  const factory = createEagerFactory(BaseComponent)

  return class extends Component {

    // componentWillReceiveProps(nextProps) {
    //   console.log('this.props.children !== nextProps.children:', this.props.children !== nextProps.children)
    //   console.log('this.props.styles !== nextProps.styles:', this.props.styles !== nextProps.styles)
    //   console.log('this.props.style !== nextProps.style:', this.props.style !== nextProps.style)
    //   console.log('this.props:', this.props)
    // }

    render() {
      return factory({
        ...this.props
      })
    }
  }
}

export default createHelper(withWTF, 'withWTF', true, true)
