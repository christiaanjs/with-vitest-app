import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

interface SWRProviderProps {
  children: ReactNode
}

export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        // do not cache responses
        provider: () => new Map(),
        fetcher,
        // You can add more global SWR configurations here
        // such as revalidation intervals, error handling, etc.
      }}
    >
      {children}
    </SWRConfig>
  )
}
