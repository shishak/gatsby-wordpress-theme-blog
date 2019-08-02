import { BoxShadow } from '../sharedStyles'
const sharedCardStyles = {
  boxShadow: BoxShadow[0],
  '.content': {
    p: [4, 4, 5, 5],
  },
}

export const cards = {
  white: {
    ...sharedCardStyles,
    bg: `white`,
  },
  primary: {
    ...sharedCardStyles,
    bg: `primary`,
  },
  secondary: {
    ...sharedCardStyles,
    bg: `secondary`,
  },
  muted: {
    ...sharedCardStyles,
    bg: `muted`,
  },
}
