import React, { PropTypes } from 'react'
import cn from 'classnames'

class Post extends React.Component {
	static displayName = 'Post'

	static propTypes = {
		'onClick': PropTypes.func,
		'completed': PropTypes.bool,
		'text': PropTypes.string
	}


	render() {
		const {onClick, completed, text} = this.props
		const PostClasses = cn('Post', {
			'complete': completed
		})

		return (
			<li className={PostClasses}
				onClick={onClick}
				style={{
					textDecoration:
						completed ?
							'line-through' :
							'none'
				}}
				>
				{text}
			</li>
		)
	}
}

export default Post
