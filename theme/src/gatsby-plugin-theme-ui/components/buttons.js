const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  fontWeight: `bold`,
  transition: `all 0.4s ease-in-out`,
  letterSpacing: 1,
  boxShadow: `md`,
  '&:hover': {
    transform: `translateY(-5px)`,
    boxShadow: `2xl`,
  },
}

export const buttons = {
  primary: {
    ...sharedButtonStyles,
    borderRadius: 5,
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.primary}, ${t.colors.purple[7]})`,
    fontSize: [0],
    px: 2,
    py: 1,
  },
  secondary: {
    ...sharedButtonStyles,
    borderRadius: 5,
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.secondary}, ${t.colors.purple[6]})`,
    fontSize: 1,
    px: 2,
    py: 1,
  },

  newsletter: {
    ...sharedButtonStyles,
    borderRadius: `default`,
    px: `1.25rem`,
    py: `0.6rem`,
    backgroundColor: `primary`,
    fontSize: 1,
    boxShadow: `default`,
  },
  outline: {
    ...sharedButtonStyles,
    backgroundColor: `transparent`,
    borderWidth: 2,
    borderColor: `white`,
    borderStyle: `solid`,
    borderRadius: `full`,
    textAlign: `center`,
    fontSize: 1,
    fontWeight: `semibold`,
    px: 4,
    py: `0.7rem`,
    '&:hover': {
      backgroundColor: `white`,
      color: `primary`,
    },
  },
  white: {
    ...sharedButtonStyles,
    borderRadius: `full`,
    fontSize: 1,
    fontWeight: `semibold`,
    px: 4,
    py: `0.75rem`,
    backgroundColor: `white`,
    color: `primary`,
    '&:hover': {
      transform: `translateY(-1px)`,
    },
  },
}
