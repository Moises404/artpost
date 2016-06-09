import React, { PropTypes } from 'react'
import { isEmpty } from 'lodash'
import Post from '../../components/Post/Post'

class PostList extends React.Component {
	static displayName = 'PostList'

	static propTypes = {
		'setCurrentPost': PropTypes.func,
		'selectTextInPost': PropTypes.func,
		'postList': PropTypes.any,
		'visibilityFilter': PropTypes.string,
		'dashboard': PropTypes.object
	}

	constructor(props) {
		super(props)
		const {
			postList,
			visibilityFilter
		} = this.props

		this.state = {
			postList: this.getVisiblePostList(postList, visibilityFilter)
		}
	}

	componentWillReceiveProps(nextProps) {
		const { postList, visibilityFilter } = nextProps
		this.setState({
			postList: this.getVisiblePostList(postList, visibilityFilter)
		})
	}

	getVisiblePostList(postList, filter) {
		switch (filter) {
			case 'SHOW_ALL' :
				return postList
			case 'SHOW_COMPLETED' :
				return postList.filter(
					p => p.completed
				)
			case 'SHOW_ACTIVE' :
				return postList.filter(
					p => !p.completed
				)
			default:
				return postList
		}
	}

	render() {
		console.log('POST-LIST-COMP: ')
		console.log(this.props)
		const { setCurrentPost, selectTextInPost, dashboard } = this.props
		let { postList } = this.state

		if (!postList || isEmpty(postList)) {
			console.log('POST-LIST: ', postList)
			postList = []
		}

		return (
			<div className="PostList">
				{postList.map(post =>
					<Post
						key={post.postId}
						{...post}
						{...dashboard}
						onTextClick={() => selectTextInPost(post.textId)}
						onPostClick={() => setCurrentPost(post.postId)}
					/>
				)}
			</div>
		)
	}
}

export default PostList
