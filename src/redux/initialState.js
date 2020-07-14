import {clone} from "../core/utils";

export const defaultState = {
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
