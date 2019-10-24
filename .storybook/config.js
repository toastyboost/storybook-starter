import { configure, addDecorator } from '@storybook/react'

import { withActions, configureActions } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'

configureActions({
  depth: 20,
  limit: 5
})

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

configure(require.context('../src/stories', true, /\.stories\.jsx$/), module)
