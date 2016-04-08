import React from 'react'
import AddPost from '../AddPost/AddPost'
import PostList from '../PostList/PostList'
import Footer from '../Footer/Footer'

class PostApp extends React.Component {
	static displayName = 'PostApp'

	render() {
		return (
			<div>
				<AddPost {...this.props}/>
				<PostList {...this.props}/>
				<Footer {...this.props}/>
			</div>
		)
	}
}

export default PostApp
