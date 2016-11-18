import { StyleSheet } from 'react-native' 

// Colors
// Grey scale
export const GRAY_DARK = '#373a3c'
export const GRAY = '#8e8e93'
export const GRAY_LIGHT = '#ceced2'
export const GRAY_LIGHTER = '#efeff4'
export const GRAY_LIGHTEST = '#f4f4f7'

// Black and white with transparency
export const FULL_WHITE = 'rgba(255, 255, 255, 1)'
export const DARK_WHITE = 'rgba(255, 255, 255, 0.87)'
export const LIGHT_WHITE = 'rgba(255, 255, 255, 0.54)'
export const FULL_BLACK = 'rgba(0, 0, 0, 1)'
export const DARK_BLACK = 'rgba(0, 0, 0, 0.87)'
export const LIGHT_BLACK = 'rgba(0, 0, 0, 0.54)'
export const TRANSPARENT = 'rgba(0, 0, 0, 0)'

// Key colors
export const COLOR_PRIMARY = '#007aff'
export const COLOR_SECONDARY = '#ff9500'
export const COLOR_NEGATIVE = '#ff3b30'
export const COLOR_POSITIVE = '#4cd964'

// Spacing
export const GUTTER = 16
export const GUTTER_LESS = 8
export const GUTTER_MINI = 4
export const GUTTER_MORE = 22
export const GUTTER_MAX = 44

// Border
export const BORDER_WIDTH = StyleSheet.hairlineWidth
export const BORDER_RADIUS = 3
export const BORDER_COLOR = GRAY_LIGHT

// Typography
export const FONT_FAMILY = 'System'

// Font size
export const FONT_SIZE_BASE = 17
export const FONT_SIZE_XS = 12
export const FONT_SIZE_SM = 15
export const FONT_SIZE_LG = 20

// Font weight
export const FONT_WEIGHT_BASE = '400'
export const FONT_WEIGHT_LIGHT = '300'
export const FONT_WEIGHT_MEDIUM = '600'
export const FONT_WEIGHT_BOLD = '700'

// Avatar
export const AVATAR_SIZE = 50

// Card
export const CARD_BORDER_RADIUS = BORDER_RADIUS
export const CARD_BORDER_WIDTH = BORDER_WIDTH
export const CARD_BORDER_COLOR = BORDER_COLOR
export const CARD_DECK_CARD_WIDTH = 200
export const CARD_DECK_CARD_MARGIN_LEFT = GUTTER
export const CARD_PADDING = GUTTER

// Chevron
export const CHEVRON_SIZE = 15
export const CHEVRON_COLOR = COLOR_PRIMARY

// Divider
export const DIVIDER_INSET = 72
export const DIVIDER_SIZE= StyleSheet.hairlineWidth
export const DIVIDER_COLOR = GRAY_LIGHT

// Label
export const LABEL_BG = DARK_BLACK
export const LABEL_BORDER_RADIUS = 4
export const LABEL_TEXT_FONT_SIZE = FONT_SIZE_XS
export const LABEL_TEXT_COLOR = FULL_WHITE
export const LABEL_PADDING_VERTICAL = GUTTER_MINI
export const LABEL_PADDING_HORIZONTAL = GUTTER_LESS

// List
export const LIST_ITEM_TEXT_COLOR = DARK_BLACK
export const LIST_ITEM_TEXT_FONT_SIZE = FONT_SIZE_SM
export const LIST_ITEM_HEADING_COLOR = DARK_BLACK
export const LIST_ITEM_HEADING_FONT_SIZE = FONT_SIZE_BASE
export const LIST_ITEM_UNDERLAY_COLOR = GRAY_LIGHT

// Progress Bar
export const PROGRESS_BAR_BG = GRAY_LIGHT
export const PROGRESS_BAR_HEIGHT = 3
export const PROGRESS_BAR_PROGRESS_COLOR = COLOR_PRIMARY

// Subheader
export const SUBHEADER_BG = FULL_WHITE
export const SUBHEADER_PADDING_HORIZONTAL = GUTTER
export const SUBHEADER_PADDING_VERTICAL = GUTTER_LESS
export const SUBHEADER_TEXT_FONT_SIZE = FONT_SIZE_XS
export const SUBHEADER_TEXT_FONT_WEIGHT = FONT_WEIGHT_BASE
export const SUBHEADER_TEXT_COLOR = GRAY_DARK

// Text Input
export const FORM_GROUP_PADDING_HORIZONTAL = GUTTER
export const FORM_GROUP_PADDING_VERTICAL = GUTTER_LESS
export const FORM_GROUP_MARGIN_BOTTOM = GUTTER
export const FORM_GROUP_LABEL_COLOR = GRAY
export const FORM_GROUP_LABEL_FONT_WEIGHT = FONT_WEIGHT_MEDIUM
export const FORM_GROUP_LABEL_FONT_SIZE = FONT_SIZE_SM
export const TEXT_INPUT_PADDING = GUTTER_MINI
export const TEXT_INPUT_HEIGHT = 30
export const TEXT_INPUT_PLACEHOLDER_COLOR = GRAY

// Navigation Bar
export const NAV_BAR_BG = FULL_WHITE
export const NAV_BAR_HEIGHT = 64
export const NAV_BAR_PADDING_HORIZONTAL = GUTTER_LESS
export const NAV_BAR_FONT_SIZE = FONT_SIZE_BASE
export const NAV_BAR_TITLE_FONT_SIZE = FONT_SIZE_BASE
export const NAV_BAR_TITLE_FONT_WEIGHT = FONT_WEIGHT_MEDIUM
export const NAV_BAR_BUTTON_COLOR = COLOR_PRIMARY
export const NAV_BAR_BORDER_WIDTH = BORDER_WIDTH
export const NAV_BAR_BORDER_COLOR = BORDER_COLOR

// Tab Bar
export const TAB_BAR_BG = FULL_BLACK
export const TAB_BAR_HEIGHT = 49
export const TAB_BAR_LABLE = 10
export const TAB_BAR_ACTIVE = COLOR_PRIMARY
export const TAB_BAR_ICON_SIZE = 30
