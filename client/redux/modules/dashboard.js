const SET_CURRENT_POST = 'SET_CURRENT_POST'
const SET_CURRENT_TEXT = 'SET_CURRENT_TEXT'

export function setCurrentPost(postId) {
  return {
    type: SET_CURRENT_POST,
    postId
  }
}

export function setCurrentText(postId, textId) {
  return {
    type: SET_CURRENT_TEXT,
    postId,
    textId
  }
}

const initialState = {
  currentPostId: '',
  currentTextId: ''
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_POST :
      console.log('SET_CURRENT_POST REDUCER')
      console.log(action.postId)
      return {
        ...state,
        currentPostId: action.postId
      }
    case SET_CURRENT_TEXT :
      return {
        ...state,
        currentPostId: action.postId,
        currentTextId: action.textId
      }
    default :
      return state
  }
}
