import React, { useState } from "react"
import { Container, Grid } from "@mui/material"
import Chat from "../../components/entity/Chat"
import BotsMenu from "../../components/entity/BotsMenu"
import { botsData } from "../../constants/bots"
import { Bots } from "../../constants/users"

const ChatsPage = () => {
  const [botType, setBotType] = useState<Bots>("angryBot")

  return (
    <Container maxWidth="lg">
      <Grid container xs={12} justifyContent="space-between" mt={5}>
        <Grid xs={4} mr={3}>
          <BotsMenu botType={botType} onChangeBot={setBotType} />
        </Grid>
        <Grid xs={7}>
          <Chat botInfo={botsData[botType]}></Chat>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ChatsPage
