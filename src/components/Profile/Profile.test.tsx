import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/nextjs-vite'
import * as stories from './Profile.stories'

// Compose the stories so we can test them
const { Default, Loading, Error } = composeStories(stories)

describe('Profile Component', () => {
  it('renders the loading state', async () => {
    await Loading.run()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders the error state', async () => {
    await Error.run()
    expect(await screen.findByText('Failed to load')).toBeInTheDocument()
  })

  it('should render the default profile data', async () => {
    await Default.run()
    expect(
      await screen.findByRole('heading', { name: 'John Doe' })
    ).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
  })
})
