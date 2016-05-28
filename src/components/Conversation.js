require('normalize.css/normalize.css')
require('styles/App.css')

import React, { PropTypes } from 'react'

class Conversation extends React.Component {
  render () {
    return (
      <li>
        <h2 className='username'>{this.props.username}</h2>
      </li>
    )
  }
}

Conversation.propTypes = {
  username: PropTypes.string.isRequired
}

export default Conversation
