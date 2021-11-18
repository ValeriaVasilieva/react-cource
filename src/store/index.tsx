import { createStore } from "redux"
import { profileReducer } from "./profile/reduser"

export const store = createStore(profileReducer)
