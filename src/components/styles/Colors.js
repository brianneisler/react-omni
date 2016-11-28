const colors = {
  grayDark: '#373a3c',
  gray: '#8e8e93',
  grayLight: '#ceced2',
  grayLighter: '#efeff4',
  grayLightest: '#f4f4f7',
  fullWhite: 'rgba(255, 255, 255, 1)',
  darkWhite: 'rgba(255, 255, 255, 0.87)',
  lightWhite: 'rgba(255, 255, 255, 0.54)',
  fullBlack: 'rgba(0, 0, 0, 1)',
  darkBlack: 'rgba(0, 0, 0, 0.87)',
  lightBlack: 'rgba(0, 0, 0, 0.54)',
  transparent: 'rgba(0, 0, 0, 0)',
  primary: '#007aff',
  secondary: '#f0ad4e',
  negative: '#ff3b30',
  positive: '#4cd964'
}

const Colors = (color) => {
  if (colors[color]) {
    return colors[color]
  }
  return color
}

export default Colors
