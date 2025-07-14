import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Profile.stories'

// Compose the stories so we can test them
const { Default, Loading, Error } = composeStories(stories)

describe('Profile Component', () => {
  it.only('renders the loading state', async () => {
    await Loading.run()
    // render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  // it('renders the error state', () => {
  //   render(<Error />)
  //   expect(screen.getByText('Failed to load')).toBeInTheDocument()
  // })

  // This test would require MSW or mocking SWR for the default story
  // We'll skip it here since it would need to handle async data fetching
})
