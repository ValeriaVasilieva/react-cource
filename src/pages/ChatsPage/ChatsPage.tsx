import React from "react"
import { Container, Typography } from "@mui/material"
import Chat from "../../components/entity/Chat"
import { AUTHORS } from "../../constants/users"

const chats = {
  angryBot: {
    author: AUTHORS.bot,
    text: "Хватит мне писать! Умоляю!",
  },
}

const ChatsPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" mt={2} mb={2}>
        Чат-боты: друзья всегда рядом
      </Typography>
      <Chat botInfo={chats.angryBot}></Chat>
    </Container>
  )
}

export default ChatsPage
