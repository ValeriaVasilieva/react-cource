import { Container, Grid } from "@mui/material"
import React, { FC } from "react"
import { makeStyles } from "@mui/styles"
import { NavLink } from "react-router-dom"
import {
  PATH_ADD_CHAT,
  PATH_CHATS,
  PATH_HOME,
  PATH_PROFILE,
} from "../../../constants/routes"
import { blue, grey } from "@mui/material/colors"

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    backgroundColor: "rgb(255, 255, 255, 75%)",
  },
  link: {
    marginRight: "20px",
    textTransform: "uppercase",
    color: grey[700],
    textDecoration: "none",
  },
  linkActive: {
    marginRight: "20px",
    textTransform: "uppercase",
    color: blue[900],
    textDecoration: "none",
  },
})

const Header: FC = () => {
  const classes = useStyles()

  const links = [
    { path: PATH_HOME, label: "Home" },
    { path: PATH_PROFILE, label: "Profile" },
    { path: PATH_CHATS, label: "Chats" },
    { path: PATH_ADD_CHAT, label: "Add Chat" },
  ]

  return (
    <Grid container className={classes.header}>
      <Container maxWidth="lg">
        {links.map((link) => (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            key={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </Container>
    </Grid>
  )
}

export default Header
