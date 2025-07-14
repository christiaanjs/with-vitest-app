import '@testing-library/jest-dom/vitest'
import './src/mocks/setup'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Clean up after each test
afterEach(() => {
  cleanup() // This will unmount any rendered components
  // Reset any request handlers that were added during the tests
})
