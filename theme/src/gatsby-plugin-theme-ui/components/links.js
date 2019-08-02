import { a } from "../typo"

export const links = {
  decorated: {
    ...a,
    color: "secondary",

    position: "relative",
    "&::before": {
      content: "",
      width: "50%",
      height: "50%",
      bg: "primary",
      opacity: 0.3,
      position: "absolute",
      left: "-5px",
      bottom: 0,
    },
    "&::hover": {
      color: "primary",
      fontWeight: "bold",
      transform: `translateY(-5px)`,

      "&::before": {
        width: "110%",
      },
    },
  },
}
