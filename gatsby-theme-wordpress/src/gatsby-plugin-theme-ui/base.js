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
    lineHeight: "heading",
    fontFamily: "heading",
  },
  h2: {
    ...heading,
  },

  h3: {
    ...heading,
  },
  h4: {
    ...heading,
  },
  h5: {
    ...heading,
  },
  h6: {
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
