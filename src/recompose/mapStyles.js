import { createEagerFactory } from 'recompose'
import createHelper from 'recompose/createHelper'

const mapStyles = stylesMapper => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  return props => factory({
    ...props,
    styles: stylesMapper(props, props.styles || {})
  })
}

export default createHelper(mapStyles, 'mapStyles')
