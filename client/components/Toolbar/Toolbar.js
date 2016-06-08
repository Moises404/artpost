import React from 'react'
import AddPost from '../AddPost/AddPost'
import AddText from '../AddText/AddText'
import Footer from '../Footer/Footer'

class Toolbar extends React.Component {
  static displayName = 'Toolbar'

  render() {
    return (
      <div className="Toolbar">
        <AddPost {...this.props}/>
        <AddText {...this.props}/>
        <Footer {...this.props}/>
      </div>
    )
  }
}

export default Toolbar
