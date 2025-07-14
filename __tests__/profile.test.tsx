import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import { screen, cleanup } from '@testing-library/react'
import { renderWithProviders } from '../src/test-utils'
import Profile from '../pages/profile'
import { server } from '../src/mocks/server'
import { http, HttpResponse } from 'msw'
import { mutate } from 'swr'

describe('Profile Page Tests', () => {
  it('loads profile data', async () => {
    // The API response is already mocked by MSW in src/mocks/handlers.ts

    renderWithProviders(<Profile />)

    // Check for loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    // Wait for the profile data to load
    expect(
      await screen.findByRole('heading', { name: /john doe/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/software engineer/i)).toBeInTheDocument()
  })

  it('handles different profile data', async () => {
    // Clear any previous cache before setting up new handlers
    await mutate('/api/profile-data', undefined, { revalidate: true })

    // Override the default handler for this test
    server.use(
      http.get('/api/profile-data', () => {
        return HttpResponse.json({
          name: 'Jane Smith',
          bio: 'UX Designer',
        })
      })
    )

    const { unmount } = renderWithProviders(<Profile />)

    // Wait for the profile data to load with longer timeout
    expect(
      await screen.findByRole(
        'heading',
        { name: /jane smith/i },
        { timeout: 3000 }
      )
    ).toBeInTheDocument()
    expect(screen.getByText(/ux designer/i)).toBeInTheDocument()

    // Clean up this component
    unmount()
  })
})
