import React from 'react'
import ToolbarTop from '../ToolbarTop/ToolbarTop'
import ToolbarSide from '../ToolbarSide/ToolbarSide'
import PostList from '../PostList/PostList'

class PostApp extends React.Component {
	static displayName = 'PostApp'

	render() {
		return (
			<div className="PostApp">
				<ToolbarTop {...this.props} />
        <div className="PostApp-main">
				  <PostList {...this.props}/>
          <ToolbarSide {...this.props} layout={'column'}/>
        </div>
			</div>
		)
	}
}

export default PostApp
