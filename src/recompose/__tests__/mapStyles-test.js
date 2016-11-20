import { expect } from 'chai'
import { mapStyles } from '../'

describe('mapStyles', function() {
  it('handles function parameter', function() {
    let run = false
    const enhancer = mapStyles((props, styles) => {
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

  it('overwrites existing styles', function() {
    let run = false
    const enhancer = mapStyles((props, styles) => {
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
    const testProps = {
      styles: {
        b: 2
      }
    }
    const component = hoc(testProps)
    expect(run).to.be.true
    expect(component.props).to.deep.equal({
      styles: {
        a: 1
      }
    })
  })
})
