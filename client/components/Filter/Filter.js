import React from 'react'
import FilterLink from './FilterLink'

class Footer extends React.Component {
	static displayName = 'Footer'

	render() {
		return (
			<div>
				<div><b>Filter</b></div>
				<div className="Footer">
					Show:
					{" "}
					<FilterLink filter="SHOW_ALL" {...this.props}>
						All
					</FilterLink>
					{", "}
					<FilterLink filter="SHOW_FAVE" {...this.props}>
					  Fave
					</FilterLink>
					{", "}
					<FilterLink filter="SHOW_COMPLETED" {...this.props}>
					  Other
					  {", "}
					</FilterLink>
					<FilterLink filter="SHOW_COMPLETED" {...this.props}>
					  Note
					  {", "}
					</FilterLink>
					<FilterLink filter="SHOW_COMPLETED" {...this.props}>
					  Project
					</FilterLink>
				</div>
			</div>
		)
	}
}

export default Footer
