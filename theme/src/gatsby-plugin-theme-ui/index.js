import { tailwind } from '@theme-ui/presets'

import colors from './colors'
import { fonts, fontSizes, fontWeights, lineHeights, base } from './typo'
import { space } from './space'
import { sizes } from './sizes'
import {
  buttons,
  links,
  menus,
  cards,
  pagination,
  paginationLinks,
  pageNumbers,
} from './components'

export default {
  ...tailwind,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  sizes,
  shadows: {
    ...tailwind.shadows,
    hover: `0px 10px 20px rgba(0,0,0,0.25)`,
  },

  breakpoints: [`600px`, `900px`, `1200px`],
  radii: {
    ...tailwind.radii,
    xl: `1rem`,
  },
  styles: {
    ...tailwind.styles,
    ...base,
    root: base,
    Footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      p: 0,
    },
    Container: {
      maxWidth: `1200px`,
    },
  },

  links,
  buttons,
  menus,
  cards,
  pagination,
  paginationLinks,
  pageNumbers,
}
