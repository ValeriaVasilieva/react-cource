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
import { Message } from "./model"

interface Props {
  botInfo: {
    author: string
    texts: string[]
  }
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
    backgroundColor: "rgb(255, 255, 255, 25%)",
    padding: "15px 15px 50px 15px",
    borderRadius: "15px",
    height: "80vh",
  },
  chipBot: {
    color: blue[700],
  },
  chipAuthor: {
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
  const inputRef = useRef<null | HTMLInputElement>(null)

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
          {
            author: botInfo.author,
            text: botInfo.texts[
              Math.round(Math.random() * (botInfo.texts.length - 1))
            ],
          },
        ])
        gridRef.current && gridRef.current.scrollIntoView(false)
        inputRef.current?.focus()
        setIsLoading(false)
      }, 1500)
    }
  }, [messages])

  useEffect(() => {
    if (messages.length) {
      setMessage([])
    }
    inputRef.current?.focus()
  }, [botInfo])

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value) {
      setMessage((prev) => [...prev, { author: AUTHORS.author, text: value }])
      gridRef.current && gridRef.current.scrollIntoView(false)
    }
    setValue("")
  }

  return (
    <Grid className={classes.chatWindow} flexDirection="column">
      <Grid
        container
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
          spacing={4}
          alignItems="center"
          className={classes.form}
        >
          <Grid item xs={9}>
            <TextField
              label="Message"
              variant="standard"
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
              inputRef={inputRef}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
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
