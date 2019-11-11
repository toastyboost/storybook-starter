/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'
import { Button } from '@storybook/react/demo'
import { Mapping } from 'src/ui'

export default { title: 'Starter' }

export const WithHandler = () => {
  const [isClicked, toggle] = React.useState(false)

  const handleClick = () => {
    toggle(!isClicked)
  }

  return (
    <Button onClick={handleClick}>
      Hello Button State {isClicked && 'clicked!'}
    </Button>
  )
}

export const withComponent = () => {
  return <Mapping />
}
