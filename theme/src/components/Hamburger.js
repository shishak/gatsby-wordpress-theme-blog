/** @jsx jsx */
import { jsx } from "theme-ui"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"

const Hamburger = ({ onClick }) => {
  return (
    <Fa
      onClick={onClick}
      icon={faBars}
      sx={{
        transition: "color .4s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          color: "primary",
        },
        display: ["block", "block", "none"],
      }}
    />
  )
}

export default Hamburger
