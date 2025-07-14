import { ReactNode } from 'react'
import { SWRProvider } from './SWRProvider'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <SWRProvider>
      {/* Add other providers here as needed */}
      {children}
    </SWRProvider>
  )
}
