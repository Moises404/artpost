import React, { PropTypes } from 'react'
import { isEmpty } from 'lodash'
import Post from '../../components/Post/Post'

class PostList extends React.Component {
	static displayName = 'PostList'

	static propTypes = {
		'toggleFavorite': PropTypes.func,
		'postList': PropTypes.any
	}

	shouldComponentUpdate() {
		return true
	}

	render() {
		console.log('POST-LIST-COMPONENT: ', this.props)
		const { toggleFavorite } = this.props
		let { postList } = this.props

		if (!postList || isEmpty(postList)) {
			console.log('POST-LIST: ', postList)
			postList = []
		}
		console.log(postList)

		return (
			<div className="PostList">
				<ul>
					{postList.map(post =>
						<Post
							key={post.id}
							{...post}
							onClick={() => toggleFavorite(post.id)}
							/>
					)}
				</ul>
			</div>
		)
	}
}

export default PostList
