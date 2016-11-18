import * as Stylus from './constants'
import { StyleSheet } from 'react-native'
import _ from 'mudash'

const utils = {}

/**
 * Spacing
 *
 * {property}-{sides}-{size}
 *
 */
const properties = {
  m: 'margin',
  p: 'padding'
}

const sides = {
  t: 'Top',
  b: 'Bottom',
  l: 'Left',
  r: 'Right'
}

const sizes = {
  0: Stylus.GUTTER_MINI,
  1: Stylus.GUTTER_LESS,
  2: Stylus.GUTTER
}

_.each(properties, (propertyValues, property) => {
  _.each(sides, (sideValues, side) => {
    _.each(sizes, (sizeValues, size) => {
      utils[`${property}-${side}-${size}`] = {}
      utils[`${property}-${side}-${size}`][`${propertyValues}${sideValues}`] = sizeValues
    })
  })
})

/**
 * Text alignment
 */

const textUtils = {
  'textLeft': { textAlign: 'left' },
  'textRight': { textAlign: 'right' },
  'textCenter': { textAlign: 'center' },
  'textJustify': { textAlign: 'justify' },
  'textBold': { fontWeight: Stylus.FONT_WEIGHT_BOLD },
  'textMedium': { fontWeight: Stylus.FONT_WEIGHT_MEDIUM },
  'textLight': { fontWeight: Stylus.FONT_WEIGHT_LIGHT },
  'textItalic': { fontStyle: 'italic' },
  'textMuted': { color: Stylus.GRAY },
  'textPrimary': { color: Stylus.COLOR_PRIMARY },
  'textSecondary': { color: Stylus.COLOR_SECONDARY }
}

export default StyleSheet.create(_.merge(utils, textUtils))
