import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from './Profile'
import { SWRProvider } from '../../providers/SWRProvider'
import { delay, http, HttpResponse } from 'msw'

// Meta information for the component
const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  decorators: [
    (Story) => (
      <SWRProvider>
        <Story />
      </SWRProvider>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    msw: {
      handlers: [
        http.get('/api/profile-data', () => {
          return HttpResponse.json({
            name: 'John Doe',
            bio: 'Software Engineer',
          })
        }),
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Profile>

// Default story using SWR data fetching with MSW
export const Default: Story = {}

// Loading state story
export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/profile-data', async () => {
          await delay(1000) // Simulate a delay for loading state
          // Return null to simulate loading state
          return HttpResponse.json(null)
        }),
      ],
    },
  },
}

// Error state story
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/profile-data', () => {
          return HttpResponse.json(
            { error: 'Failed to fetch profile data' },
            { status: 500 }
          )
        }),
      ],
    },
  },
}

export const WithOtherProfileData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/profile-data', () => {
          return HttpResponse.json({
            name: 'Alice Johnson',
            bio: 'Frontend Developer & UX Enthusiast',
          })
        }),
      ],
    },
  },
}
