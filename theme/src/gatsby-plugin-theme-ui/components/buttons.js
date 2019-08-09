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
    boxShadow: `hover`,
  },
}

export const buttons = {
  primary: {
    ...sharedButtonStyles,
    borderRadius: 5,
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.primary}, ${t.colors.purple[7]})`,
    fontSize: 1,
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
}
