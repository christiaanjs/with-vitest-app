import type { Preview } from '@storybook/nextjs-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize({
  // onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
})

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
