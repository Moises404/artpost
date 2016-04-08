import * as AppActions from '../../actions/AppActions'
import * as PostActions from '../../actions/PostActions'
import React, {Component, PropTypes, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import cn from 'classnames'
import {isEqual, merge} from 'lodash'
import Navigation from '../../components/Navigation/Navigation'

export class App extends Component {
  static propTypes = {
    'params': PropTypes.object.isRequired,
    'actions': PropTypes.object.isRequired,
    'postActions': PropTypes.object.isRequired,
    'layout': PropTypes.object.isRequired,
    'app': PropTypes.object.isRequired,
    'client': PropTypes.object.isRequired,
    'children': PropTypes.object.isRequired,
    'post': PropTypes.object,
    'postList': PropTypes.any,
    'visibilityFilter': PropTypes.string
  }

  static childContextTypes = {
    'client': PropTypes.object,
  }

  getChildContext() {
    return {
      'client': this.props.client,
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) window.scrollTo(0, 0)
  }

  render() {
    console.log('APP', this.props)
    const {app, children, layout, actions, postActions, 
        client, post, postList, visibilityFilter} = this.props
    const postProps = {post, postList, visibilityFilter}
    const navProps = {actions, client, layout}
    const childProps = merge(app, client, postActions, postProps)
    const appClasses = cn('App', `--${client.agent}`)

    return (
      <div className={appClasses}>
        <Navigation {... navProps} />
        <div className="App-content">
          {cloneElement(children, childProps)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    'app': state.app,
    'client': state.client,
    'layout': state.layout,
    'post': state.post,
    'postList': state.postList,
    'visibilityFilter': state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators(AppActions, dispatch),
    'postActions': bindActionCreators(PostActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
