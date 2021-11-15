import { Grid } from "@mui/material"
import React from "react"
import BotsMenu from "../../components/entity/BotsMenu"
import Layout from "../../components/entity/Layout"

const HomePage = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" mt={5}>
        <Grid item xs={6}>
          <BotsMenu />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
