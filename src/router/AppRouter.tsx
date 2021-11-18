import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddChat from "../components/entity/AddChat"
import {
  PATH_404,
  PATH_CHATS,
  PATH_HOME,
  PATH_ADD_CHAT,
} from "../constants/routes"
import ChatsPage from "../pages/ChatsPage"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH_HOME} element={<HomePage />} />
        <Route path={PATH_CHATS} element={<ChatsPage />}>
          <Route path={`${PATH_CHATS}/chat:chatName`} element={<ChatsPage />} />
        </Route>
        <Route path={PATH_ADD_CHAT} element={<AddChat />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path={PATH_404} element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
