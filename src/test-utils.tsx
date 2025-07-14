import { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { SWRProvider } from './providers'

interface AllProvidersProps {
  children: ReactNode
}

// Helper component that wraps children with all providers
export function AllProviders({ children }: AllProvidersProps) {
  return <SWRProvider>{children}</SWRProvider>
}

// Custom render function that wraps components with providers
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllProviders, ...options })
}

// Re-export everything from testing-library
export * from '@testing-library/react'
