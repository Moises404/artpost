import * as types from '../constants/ActionTypes'

const initialPostState = {}

export default function post(state = initialPostState, action) {
  switch (action.type) {
    case types.ADD_POST :
      return {
        postId: action.postId,
        text: action.text
      }
    case types.SELECT_POST :
      console.log('SELECT_POST')
      console.log(action.postId)
      return {
        currentPostId: action.postId
      }
    case types.SELECT_TEXT_IN_POST :
      return {
        currentTextId: action.textId
      }
    case types.TOGGLE_FAVORITE :
      if (state.postId !== action.postId) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case types.ADD_TEXT_TO_POST :
      return {
        textId: action.textId,
        text: action.text
      }
    default:
      return state
  }
}
