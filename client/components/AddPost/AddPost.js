import React, { PropTypes } from 'react'

class AddPost extends React.Component {
	static displayName = 'AddPost'

	static propTypes = {
		'addPost': PropTypes.func
	}

	render() {
		let input
		console.log('ADD-POST-COMPONENT: ', this.props)
		const { addPost } = this.props
		return (
			<div className="AddPost">
				<input ref={node => {
					input = node
				}}/>
				<button onClick={() => {
					addPost(input.value)
					input.value = ''
				}}>
					Add Post
				</button>
			</div>
		)
	}
}

export default AddPost
