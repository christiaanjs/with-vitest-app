import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from './Profile'
import { SWRProvider } from '../../providers/SWRProvider'
import { delay, http, HttpHandler, HttpResponse } from 'msw'
import { expect } from 'storybook/test'

const defaultResponse = {
  name: 'John Doe',
  bio: 'Software Engineer',
}
const errorResponse = {
  error: 'Failed to fetch profile data',
}
const otherResponse = {
  name: 'Alice Johnson',
  bio: 'Frontend Developer & UX Enthusiast',
}

function getParameters(testCase: 'default' | 'loading' | 'error' | 'other') {
  let handlers: HttpHandler[] = []
  switch (testCase) {
    case 'loading':
      handlers = [
        http.get('/api/profile-data', async () => {
          await delay(1000) // Simulate a delay for loading state
          return HttpResponse.json(null)
        }),
      ]
      break
    case 'error':
      handlers = [
        http.get('/api/profile-data', () => {
          return new HttpResponse(errorResponse, { status: 404 })
        }),
      ]
      break
    case 'other':
      handlers = [
        http.get('/api/profile-data', () => {
          return HttpResponse.json(otherResponse)
        }),
      ]
      break
    default:
      handlers = [
        http.get('/api/profile-data', () => {
          return HttpResponse.json(defaultResponse)
        }),
      ]
      break
  }
  return {
    msw: {
      handlers: {
        'profile-data': handlers,
      },
    },
  }
}

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
  },
}

export default meta
type Story = StoryObj<typeof Profile>

// Default story using SWR data fetching with MSW
export const Default: Story = {
  parameters: getParameters('default'),
}

// Loading state story
export const Loading: Story = {
  parameters: getParameters('loading'),
  play: async ({ canvas }) => {
    // Ensure the loading state is displayed
    expect(await canvas.findByRole('presentation')).toBeInTheDocument()
  },
}

// Error state story
export const Error: Story = {
  parameters: getParameters('error'),
  play: async ({ canvas }) => {
    // Ensure the error message is displayed
    expect(await canvas.findByTestId('error')).toBeInTheDocument()
  },
}

export const WithOtherProfileData: Story = {
  parameters: getParameters('other'),
  play: async ({ canvas }) => {
    // Ensure the other profile data is displayed
    expect(await canvas.findByText(/Alice Johnson/i)).toBeInTheDocument()
    expect(
      canvas.getByText(/Frontend Developer & UX Enthusiast/i)
    ).toBeInTheDocument()
  },
}

export const WithDefaultHandlersFromPreview: Story = {
  play: async ({ canvas }) => {
    // Ensure the default profile data is displayed
    expect(await canvas.findByText(/John Default/i)).toBeInTheDocument()
    expect(canvas.getByText(/Default Software Engineer/i)).toBeInTheDocument()
  },
}
