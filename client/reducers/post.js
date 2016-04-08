import * as types from '../constants/ActionTypes'

export default function todo(state = {}, action) {
  switch (action.type) {
    case types.ADD_POST:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case types.TOGGLE_FAVORITE:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}
