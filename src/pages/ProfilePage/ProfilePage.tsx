import { Container, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import Layout from "../../components/entity/Layout"
import { store } from "../../store"
import { toggleCheckbox } from "../../store/profile/actions"
import { RootState } from "../../store/profile/model"

const ProfilePage = () => {
  const state = useSelector((state: RootState) => state)

  const handleChange = () => {
    store.dispatch(toggleCheckbox)
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h3">Profile</Typography>
        <input
          type="checkbox"
          checked={state.checkbox}
          onChange={handleChange}
        />
      </Container>
    </Layout>
  )
}

export default ProfilePage
