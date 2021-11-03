import React, { FC, useEffect, useRef, useState } from "react"
import {
  Avatar,
  Button,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { AUTHORS } from "../../../constants/users"
import { makeStyles } from "@mui/styles"
import { blue, green } from "@mui/material/colors"
import bot from "../../../assets/image/bot.png"
import author from "../../../assets/image/me.png"

interface Props {
  botInfo: {
    author: string
    text: string
  }
}

interface Message {
  author: string
  text: string
}

const useStyles = makeStyles({
  message: {
    boxShadow: "-13px 13px 16px -9px rgba(78, 156, 163, 0.2)",
    borderRadius: "3px",
    padding: "3px 10px",
  },
  messages: {
    height: "90%",
  },
  botTyping: {
    color: blue[900],
  },
  chatWindow: {
    position: "relative",
    backgroundColor: "rgb(255, 255, 255, 50%)",
    padding: "15px 15px 50px 15px",
    borderRadius: "15px",
    height: "70vh",
  },
  chipBot: {
    width: "90%",
    color: blue[700],
  },
  chipAuthor: {
    width: "90%",
    color: green[700],
  },
  form: {
    position: "absolute",
    bottom: "20px",
  },
})

const Chat: FC<Props> = ({ botInfo }) => {
  const classes = useStyles()
  const [messages, setMessage] = useState<Message[] | []>([])
  const [value, setValue] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const gridRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author === AUTHORS.author
    ) {
      setIsLoading(true)
      gridRef.current && gridRef.current.scrollIntoView(false)
      setTimeout(() => {
        setMessage((prev) => [
          ...prev,
          { author: botInfo.author, text: botInfo.text },
        ])
        gridRef.current && gridRef.current.scrollIntoView(false)
        setIsLoading(false)
      }, 1500)
    }
  }, [messages])

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      setMessage((prev) => [...prev, { author: AUTHORS.author, text: value }])
      gridRef.current && gridRef.current.scrollIntoView(false)
    }
    setValue("")
  }

  console.log(gridRef)

  return (
    <Grid xs={6} className={classes.chatWindow} flexDirection="column">
      <Grid
        container
        xs={12}
        flexGrow={1}
        alignContent="flex-start"
        className={classes.messages}
        overflow="auto"
      >
        {messages.map((message) => (
          <Grid container ref={gridRef}>
            <Grid item xs={2} spacing={4}>
              <Chip
                className={
                  message.author === AUTHORS.author
                    ? classes.chipAuthor
                    : classes.chipBot
                }
                avatar={
                  <Avatar
                    alt="avatar"
                    src={message.author === AUTHORS.author ? author : bot}
                  />
                }
                label={message.author}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10}>
              <Typography mb={1} className={classes.message}>
                {message.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {isLoading && (
        <Typography className={classes.botTyping}>Bot is typing...</Typography>
      )}

      <form onSubmit={handlerSubmit}>
        <Grid
          container
          xs={12}
          spacing={4}
          alignItems="center"
          className={classes.form}
        >
          <Grid item spacing={2} xs={10}>
            <TextField
              label="Message"
              variant="standard"
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item spacing={2} xs={1}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              disabled={isLoading}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

export default Chat
