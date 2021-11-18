import { TOGGLE_CHECKBOX } from "./actions"
import { Action, RootState } from "./model"

const initialState: RootState = {
  checkbox: false,
  name: "",
}

export const profileReducer = (
  state: RootState = initialState,
  action: Action
) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      }
    default:
      return state
  }
}
