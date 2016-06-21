import React, { PropTypes } from 'react'
import PostToolbar from './PostToolbar/PostToolbar'
import LayersToolbar from './LayersToolbar/LayersToolbar'

class ToolbarSide extends React.Component {
  static displayName = 'ToolbarSide'

  static propTypes = {
    'dashboard': PropTypes.object,
    'dashboard.currentPostId': PropTypes.number,
    'dashboard.currentTextId': PropTypes.number
  }

  render() {
    return (
      <div className="ToolbarSide">
        <PostToolbar {...this.props}/>
        <LayersToolbar {...this.props}/>
      </div>
    )
  }
}

export default ToolbarSide
