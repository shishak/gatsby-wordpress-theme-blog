import { transitions } from "../sharedStyles"

export const menus = {
  main: {
    ">ul": {
      display: `flex`,
      justifyContent: `space-between`,
      p: 0,
      "> .menu-item": {
        pl: 3,
        fontSize: 1,
      },
    },

    ".menu-item, a": {
      color: "text",
      cursor: "pointer",
      fontFamily: "heading",
      textTransform: "uppercase",
      transition: transitions[1],
      "&:hover": {
        color: "primary",
      },
    },
    ".sub-menu": {
      opacity: 0,
      visibility: `hidden`,
      transform: `translateY(5px)`,
      transition: transitions[1],
      position: `absolute`,
      left: 0,
      top: `50px`,
      p: 0,
      bg: `white`,
      border: `1px solid ${({ theme }) => theme.colors.muted}`,
      ">.menu-item": {
        width: `auto`,
        borderBottom: `1px solid ${({ theme }) => theme.colors.muted}`,
        py: `5px`,
        px: `10px`,
        width: `180px`,
        fontSize: 2,
        "&:last-child": {
          border: `none`,
        },
      },
    },
    ".has-submenu.menu-item": {
      position: `relative`,
      "&:hover": {
        ">.sub-menu": {
          opacity: 1,
          visibility: `visible`,
          transform: `translateY(0)`,
        },
      },
    },
  },
}
