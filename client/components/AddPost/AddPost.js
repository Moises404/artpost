import React, { PropTypes } from 'react'

class AddPost extends React.Component {
	static displayName = 'AddPost'

	static propTypes = {
		'addPost': PropTypes.func
	}

	handleSubmit(event, node, cb) {
		if (event.keyCode === 13) {
			console.log('Enter!!')
			console.log(node)
			cb()
		}
	}

	render() {
		let input
		const { addPost } = this.props
		// onKeyDown={this.handleSubmit(event, input)}
		return (
			<div className="AddPost">
				<input
					ref={node => {
						input = node
					}}
					onKeyDown={(event) => {
						this.handleSubmit(event, input.value, () => {
							addPost(input.value)
							input.value = ''
						})
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
