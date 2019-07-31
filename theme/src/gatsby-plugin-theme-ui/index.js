/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
import colors from "./colors"
import { fonts, fontWeights, lineHeights, fontSizes } from "./typo"
import { Layout, Main } from "./base"

const theme = {
  colors,
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
  breakpoints: [480, 768, 1024],
  sizes: { small: 700, medium: 960, large: 1200 },
  space: [5, 10, 20, 30, 40, 50, 70, 80, 90, 100],
  textStyles: {
    heading: {
      fontFamily: "heading",
    },
  },

  styles: {
    Layout,
    Main,
    Container: {
      px: 2,
    },
  },
}

export default theme
