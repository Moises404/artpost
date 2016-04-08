import React from 'react'

import PostApp from '../../components/PostApp/PostApp'

class Home extends React.Component {
  static displayName = 'Home'

  render() {
    return (
      <div className="Home">
        <PostApp {...this.props}/>
      </div>
    )
  }
}

export default Home

