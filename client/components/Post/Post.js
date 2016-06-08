import React, { PropTypes } from 'react'
import cn from 'classnames'

class Post extends React.Component {
	static displayName = 'Post'

	static propTypes = {
		'onClick': PropTypes.func,
		'completed': PropTypes.bool,
		'text': PropTypes.string,
		'post': PropTypes.func,
		'postId': PropTypes.number,
		'currentPostId': PropTypes.any
	}

	componentWillReceiveProps(nextProps) {
		console.log('COMPONENT-WILL-RECEIVE-PROPS: ')
		console.log(nextProps.postId);
		console.log(nextProps.currentPostId);
	}


	render() {
		const {
			onClick, completed,
			text, postId,
			currentPostId } = this.props

		const PostClasses = cn('Post', {
			'complete': completed
		})

		// console.log(this.props)
		// console.log('POST: ', post)
		console.log('POST-ID: ', postId)
		console.log('CURRENT-POST-ID: ', currentPostId)

		let isSelected = false

		if (currentPostId === postId) {
			isSelected = true
		}


		return (
			<div className={PostClasses}
				onClick={onClick}
				style={{
					borderColor:
						isSelected ?
							'lime' :
							'black',
					borderWidth: '4px'
				}}>
				<div className="Text"
					onClick={() => console.log('selectText')}>
					{text}
				</div>
			</div>
		)
	}
}

export default Post
