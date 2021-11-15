import { Container, Grid } from "@mui/material"
import React from "react"
import Layout from "../Layout"

const AddChat = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container mt={4}>
          <form onSubmit={handleSubmit}></form>
        </Grid>
      </Container>
    </Layout>
  )
}

export default AddChat
