const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `body`,
  fontWeight: `medium`,
  transition: `all 0.3s ease-in-out`,
}

export const buttons = {
  primary: {
    ...sharedButtonStyles,
    borderRadius: `full`,
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.indigo[6]}, ${t.colors.indigo[4]})`,
    fontSize: [1, 2],
    px: 4,
    py: `0.6rem`,
    boxShadow: t => `0px 10px 15px ${t.colors.indigo[2]}`,
    "&:hover": {
      transform: `translateY(-10px)`,
    },
  },
  secondary: {
    ...sharedButtonStyles,
    borderRadius: `full`,
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.gray[7]}, ${t.colors.gray[5]})`,
    fontSize: 1,
    px: 4,
    py: 1,
    boxShadow: `default`,
    "&:hover": {
      transform: `translateY(-1px)`,
    },
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
    "&:hover": {
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
    "&:hover": {
      transform: `translateY(-1px)`,
    },
  },
}
