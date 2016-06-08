import * as AppActions from '../../actions/AppActions'
import * as PostActions from '../../redux/modules/post'
import * as DashboardActions from '../../redux/modules/dashboard'

import React, { Component, PropTypes, cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import cn from 'classnames'
import { isEqual, merge } from 'lodash'
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
    'visibilityFilter': PropTypes.string,
    'dashboard': PropTypes.object,
    'dashboardActions': PropTypes.object
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
    console.log('APP-COMP', this.props)
    const {app, children, layout, actions, postActions,
        client, post, postList, visibilityFilter, dashboard,
        dashboardActions
         } = this.props
    const postProps = { post, postList,
        visibilityFilter, dashboard}
    const navProps = {actions, client, layout}
    const childProps = merge(app, client, postActions, postProps, dashboardActions)
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
    'visibilityFilter': state.visibilityFilter,
    'dashboard': state.dashboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    'actions': bindActionCreators(AppActions, dispatch),
    'postActions': bindActionCreators(PostActions, dispatch),
    'dashboardActions': bindActionCreators(DashboardActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
