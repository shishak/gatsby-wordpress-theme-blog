const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  a: {
    borderBottom: "none",
  },
}

export const Layout = {
  backgroundColor: "background",
  color: "text",
  fontFamily: "body",
  fontSize: 1,
  lineHeight: "body",

  h1: {
    color: "text",
    fontSize: 5,
    lineHeight: "heading",
    fontFamily: "heading",
  },
  h2: {
    ...heading,
    fontSize: 4,
  },

  h3: {
    ...heading,
    fontSize: 3,
  },
  h4: {
    ...heading,
    fontSize: 2,
  },
  h5: {
    ...heading,
    fontSize: 1,
  },
  h6: {
    fontSize: 0,
    color: "muted",
  },
}

export const Main = {
  margin: "0 auto",
  maxWidth: "large",
  width: "90vw",
}

export const Container = {
  margin: "0 auto",
  maxWidth: "large",
  padding: "0 30px",
}
