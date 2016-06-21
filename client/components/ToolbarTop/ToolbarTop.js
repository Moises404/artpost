import React, { PropTypes } from 'react'
import AddPost from '../AddPost/AddPost'
import AddText from '../AddText/AddText'
import AddTag from '../AddTag/AddTag'
import Filter from '../Filter/Filter'

class ToolbarTop extends React.Component {
  static displayName = 'ToolbarTop'

  static propTypes = {
    'dashboard': PropTypes.object,
    'dashboard.currentPostId': PropTypes.number,
    'dashboard.currentTextId': PropTypes.number
  }

  render() {
    return (
      <div className="ToolbarTop">
        <div className="ToolbarTop-group">
          <AddPost {...this.props} />
          <AddText {...this.props} />
          <AddTag {...this.props} />
        </div>
        <div className="ToolbarTop-group">
          <Filter {...this.props}/>
        </div>
        <div className="ToolbarTop-group">
          <div><b>Info</b></div>
          <div>{`CURRENT-POST-ID: ${this.props.dashboard.currentPostId}`}</div>
          <div>{`CURRENT-LAYER-ID: ${this.props.dashboard.currentTextId}`}</div>
          <div>{`CURRENT-LAYER-TYPE: ${this.props.dashboard.currentPostId}`}</div>
        </div>
      </div>
    )
  }
}

export default ToolbarTop
