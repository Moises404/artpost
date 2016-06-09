import React, { PropTypes } from 'react'
import cn from 'classnames'

class Post extends React.Component {
	static displayName = 'Post'

	static propTypes = {
		'onPostClick': PropTypes.func,
		'onTextClick': PropTypes.func,
		'completed': PropTypes.bool,
		'text': PropTypes.string,
		'post': PropTypes.func,
		'postId': PropTypes.number,
		'textId': PropTypes.number,
		'currentPostId': PropTypes.any,
		'currentTextId': PropTypes.any
	}

	componentWillReceiveProps(nextProps) {
		console.log('COMPONENT-WILL-RECEIVE-PROPS: ')
		console.log(nextProps.postId)
		console.log(nextProps.currentPostId)
	}


	render() {
		const {
			onPostClick, onTextClick,
			completed, text, postId, textId,
			currentPostId, currentTextId } = this.props

		const PostClasses = cn('Post', {
			'complete': completed
		})

		console.log('POST-ID: ', postId)
		console.log('CURRENT-POST-ID: ', currentPostId)
		console.log('CURRENT-TEXT-ID: ', currentTextId)

		let isPostSelected = false
		let isTextSelected = false

		if (currentPostId === postId) {
			isPostSelected = true
		}

		if (currentTextId === textId) {
			isTextSelected = true
		}

		return (
			<div className={PostClasses}
				onClick={onPostClick}
				style={{
					borderColor:
						isPostSelected ?
							'lime' :
							'black',
					borderWidth: '4px'
				}}>
				<div className="Text"
					onClick={onTextClick}
					style={{
						borderColor:
							isTextSelected ?
								'lime' :
								'black',
						borderWidth: '4px'
					}}>
					{text}
				</div>
			</div>
		)
	}
}

export default Post
