/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
'use strict'

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons'
// const TestUtils = React.addons.TestUtils
import createComponent from 'helpers/shallowRenderHelper'
import { findWithClass } from 'react-shallow-testutils'

import Conversation from 'components/Conversation'
import Chance from 'chance'
let chance = new Chance()

describe('Conversation', () => {
  let conversationComponent
  const props = { username: chance.string() }

  beforeEach(() => {
    conversationComponent = createComponent(Conversation, props)
  })

  it('should show the username', () => {
    const username = findWithClass(conversationComponent, 'username')
    expect(username.props.children).to.equal(props.username)
  })
})
