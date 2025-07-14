import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProviders } from '../src/providers'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}
