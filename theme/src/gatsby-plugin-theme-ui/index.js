import { tailwind } from "@theme-ui/presets"

import colors from "./colors"
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
} from "./typo"
import { space } from "./space"
import { sizes } from "./sizes"
import { buttons, links, menus } from "./components"

export default {
  ...tailwind,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  sizes,

  breakpoints: [`400px`, `800px`, `1200px`, `1400px`],
  radii: {
    ...tailwind.radii,
    xl: `1.6rem`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      fontSize: [1, 2],
      a,
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
    },
    Footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      px: [2, 3],
      py: [4, 5],
    },
    Container: {
      maxWidth: `1200px`,
    },
    a,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
  },

  links,
  buttons,
  menus,
  inputs: {
    primary: {
      px: 3,
      py: `0.6rem`,
      fontSize: 1,
      borderRadius: `default`,
      boxShadow: `default`,
      border: `none`,
      outline: `none`,
      "&:focus": {
        boxShadow: `outline`,
      },
    },
  },

  gradients: {
    blue: {
      backgroundImage: t =>
        `linear-gradient(45deg, ${t.colors.indigo[3]}, ${t.colors.indigo[5]})`,
    },
    orange: {
      backgroundImage: t =>
        `linear-gradient(225deg, ${t.colors.orange[3]}, ${t.colors.orange[5]})`,
    },
    pink: {
      backgroundImage: t =>
        `linear-gradient(135deg, ${t.colors.pink[4]}, ${t.colors.pink[6]})`,
    },
    purple: {
      backgroundImage: t =>
        `linear-gradient(135deg, ${t.colors.purple[6]}, ${t.colors.purple[3]})`,
    },
    gray: {
      backgroundImage: t =>
        `linear-gradient(135deg, ${t.colors.gray[5]}, ${t.colors.gray[7]})`,
    },
    red: {
      backgroundImage: t =>
        `linear-gradient(225deg, ${t.colors.red[6]}, ${t.colors.red[3]})`,
    },
    yellow: {
      backgroundImage: t =>
        `linear-gradient(180deg, ${t.colors.yellow[5]}, ${t.colors.yellow[6]})`,
    },
    green: {
      backgroundImage: t =>
        `linear-gradient(225deg, ${t.colors.green[3]}, ${t.colors.green[5]})`,
    },
    indigo: {
      backgroundImage: t =>
        `linear-gradient(72deg, ${t.colors.indigo[7]}, ${t.colors.indigo[5]})`,
    },
    darkIndigo: {
      backgroundImage: t =>
        `linear-gradient(135deg, ${t.colors.indigo[8]}, ${t.colors.indigo[6]})`,
    },
  },
}
