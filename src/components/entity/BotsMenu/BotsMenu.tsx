import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { FC } from "react"
import { chatsNames } from "../../../constants/bots"
import { Bots } from "../../../constants/users"

interface Props {
  botType: string
  onChangeBot: (botType: Bots) => void
}

const useStyles = makeStyles({
  btnGroup: {
    backgroundColor: "rgb(255, 255, 255, 25%)",
  },
})

const BotsMenu: FC<Props> = ({ botType, onChangeBot }) => {
  const classes = useStyles()

  return (
    <ToggleButtonGroup
      color="primary"
      orientation="vertical"
      value={botType}
      exclusive
      onChange={(e, value) => onChangeBot(value)}
      fullWidth
      className={classes.btnGroup}
    >
      {Object.entries(chatsNames).map(([value, label]) => (
        <ToggleButton value={value} aria-label={label} key={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default BotsMenu
