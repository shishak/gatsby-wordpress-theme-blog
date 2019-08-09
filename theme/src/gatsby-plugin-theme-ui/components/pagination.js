export const pagination = {
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  fontSize: 1,
  pr: 5,
  mb: 4,
  '.mutted': {
    color: `muted`,
  },
}

export const pageNumbers = {
  ul: {
    display: `flex`,
    jusifyContent: `center`,
  },
  a: {
    py: `5px`,
    px: 1,
    bg: `#f5f5f5`,
    border: `none`,
    mr: `5px`,
    color: `text`,
    '&:hover, &[aria-current="page"]': {
      bg: `black`,
      color: `white`,
    },
  },
}

export const paginationLinks = {
  textTransform: `uppercase`,
  fontSize: `12px`,
  letterSpacing: 1,

  a: {
    pb: `5px`,
    color: `text`,
    '&:hover': {
      color: `primary`,
    },
  },
}
