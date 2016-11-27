import { expect } from 'chai'
import { defaultStyles } from '../'

describe('defaultStyles', function() {
  it('handles function parameter', function() {
    let run = false
    const enhancer = defaultStyles((props, styles) => {
      run = true
      expect(props).to.be.an('object')
      expect(styles).to.be.an('object')
      return {
        a: 1
      }
    })
    const hoc = enhancer((props) => ({
      props
    }))
    const testProps = {}
    const component = hoc(testProps)
    expect(run).to.be.true
    expect(component.props).to.deep.equal({
      styles: {
        a: 1
      }
    })
  })

  it('merge existing styles (keeping existing ones)', function() {
    let run = false
    const enhancer = defaultStyles((props, styles) => {
      run = true
      expect(props).to.be.an('object')
      expect(styles).to.be.an('object')
      return {
        a: 1,
        c: 4
      }
    })
    const hoc = enhancer((props) => ({
      props
    }))
    const testProps = {
      styles: {
        b: 2,
        c: 3
      }
    }
    const component = hoc(testProps)
    expect(run).to.be.true
    expect(component.props).to.deep.equal({
      styles: {
        a: 1,
        b: 2,
        c: 3
      }
    })
  })
})
