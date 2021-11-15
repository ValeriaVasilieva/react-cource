import React, { useState } from "react"
import { Container, Grid } from "@mui/material"
import Chat from "../../components/entity/Chat"
import BotsMenu from "../../components/entity/BotsMenu"
import { botsData } from "../../constants/bots"
import { Bots } from "../../constants/users"
import { useParams } from "react-router-dom"
import Layout from "../../components/entity/Layout"

const ChatsPage = () => {
  const params = useParams()
  const { chatName = ":angryBot" } = params
  const [botType, setBotType] = useState<Bots>(chatName.slice(1) as Bots)

  const isChat = botsData[botType]

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container xs={12} justifyContent="space-between" mt={5}>
          <Grid item xs={4} mr={3}>
            <BotsMenu botType={botType} onChangeBot={setBotType} />
          </Grid>
          {isChat && (
            <Grid item xs={7}>
              <Chat botInfo={botsData[botType]}></Chat>
            </Grid>
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default ChatsPage
