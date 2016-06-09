const ADD_POST = 'ADD_POST'
const SELECT_POST = 'SELECT_POST'
const ADD_TEXT_TO_POST = 'ADD_TEXT_TO_POST'
const SELECT_TEXT_IN_POST = 'SELECT_TEXT_IN_POST'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
const ADD_TAG_TO_POST = 'ADD_TAG_TO_POST'
const DELETE_POST = 'DELETE_POST'

import { setCurrentPost } from './dashboard'

let nextPostId = 0
let nextTextId = 0
let nextTagId = 0

export function selectPost(postId) {
  return (dispatch) => (
    dispatch({
      'type': SELECT_POST,
      postId
    })
  )
}

export function selectTextInPost(postId, textId) {
  return (dispatch) => (
    dispatch({
      'type': SELECT_TEXT_IN_POST,
      textId
    })
  )
}

export function addTextToPost(postId, text) {
  return (dispatch) => (
     dispatch({
      'type': ADD_TEXT_TO_POST,
      'textId': nextTextId++,
      postId,
      text
    })
  )
}

export function addTagToPost(postId, tag) {
  return (dispatch) => (
    dispatch({
      'type': ADD_TAG_TO_POST,
      'tagId': nextTagId++,
      postId,
      tag
    })
  )
}

export function addPost(text) {
  const postId = nextPostId++
  const textId = nextTextId++
  return (dispatch) => ([
    dispatch(setCurrentPost(postId)),
    dispatch(selectTextInPost(postId, textId)),
    dispatch(addTextToPost(postId, textId, text)),
    dispatch({
      'type': ADD_POST,
      postId,
      'currentPostId': postId,
    })
  ]
  )
}

export function deletePost(postId) {
  return (dispatch) => (
     dispatch({
      'type': DELETE_POST,
      postId
    })
  )
}

export function toggleFavorite(id) {
  return (dispatch) => (
    dispatch({
      'type': TOGGLE_FAVORITE,
      id
    })
  )
}

const initialPostState = {}

export default function post(state = initialPostState, action) {
  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
        postId: action.postId
      }
    case SELECT_POST :
      console.log('SELECT_POST')
      console.log(action.postId)
      return {
        currentPostId: action.postId
      }
    case SELECT_TEXT_IN_POST :
      return {
        currentTextId: action.textId
      }
    case TOGGLE_FAVORITE :
      if (state.postId !== action.postId) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case ADD_TEXT_TO_POST :
      return {
        textId: action.textId,
        text: action.text
      }
    default:
      return state
  }
}
