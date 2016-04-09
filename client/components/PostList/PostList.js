import React, { PropTypes } from 'react'
import { isEmpty } from 'lodash'
import Post from '../../components/Post/Post'

class PostList extends React.Component {
	static displayName = 'PostList'

	static propTypes = {
		'toggleFavorite': PropTypes.func,
		'postList': PropTypes.any,
		'visibilityFilter': PropTypes.string
	}

	constructor(props) {
		super(props)
		const {postList, visibilityFilter} = this.props
		this.state = {
			postList: this.getVisiblePostList(postList, visibilityFilter)
		}
	}

	componentWillReceiveProps(nextProps) {
		const {postList, visibilityFilter} = nextProps
		this.setState({
			postList: this.getVisiblePostList(postList, visibilityFilter)
		})
	}

	getVisiblePostList(postList, filter) {
		switch (filter) {
			case 'SHOW_ALL':
				console.log('SHOW_ALL')
				return postList
			case 'SHOW_COMPLETED':
				console.log('SHOW_COMPLETED')
				return postList.filter(
					p => p.completed
				)
			case 'SHOW_ACTIVE':
				console.log('SHOW_ACTIVE')
				return postList.filter(
					p => !p.completed
				)
			default:
				return postList
		}
	}

	render() {
		const { toggleFavorite } = this.props
		let { postList } = this.state

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
