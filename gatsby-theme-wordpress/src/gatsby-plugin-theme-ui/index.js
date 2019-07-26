/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}
export default {
  colors: {
    text: "#232129",
    background: "#f5f5f5",
    primary: "tomato",
    secondary: "olive",
    muted: "#bbb ",
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Playfair display, serif",
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 1200,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
    },
  },

  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "text",
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
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    root: {},
  },
}
