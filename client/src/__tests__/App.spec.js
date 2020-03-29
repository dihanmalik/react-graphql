import Button from '@atom/Button'
import List from '@screen/List'
import { MockedProvider } from '@apollo/client/testing'
import Provider from '@root/provider'
import React from 'react'
import { ThemeProvider } from '@root/theming'
import renderer from 'react-test-renderer'
import visitorSchema from '@schema/visitors'

const mocks = [
  {
    request: {
      query: visitorSchema.query.VISITOR_QUERY,
    },
    result: {
      data: {
        visitors: {
          id: '2342',
          dateTime: 'Sat April 03, 2000 08:53:23',
          ip: '32.53.253.23',
          device: 'iPhone X',
        },
      },
    },
  },
]

const AppShell = ({ children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <Provider>{children}</Provider>
  </MockedProvider>
)

describe('App Provider Test', () => {
  it('AppShell Should Work', () => {
    const component = renderer.create(
      <AppShell>
        <Button>Test Button</Button>
      </AppShell>
    )
    const button = component.toJSON()
    console.log(button)
    expect(button.children).toContain('Test Button')
  })

  it('Query should work', () => {
    const component = renderer.create(
      <AppShell>
        <List />
      </AppShell>
    )
    const list = component.toJSON()
    console.log(list)
    expect(1).toEqual(1)
  })
})
