import {combineReducers} from 'redux'
import app from './app'
import layout from './layout'
import client from './client'
import post from './post'
import postList from './postList'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  app,
  client,
  layout,
  post,
  postList,
  visibilityFilter
})
