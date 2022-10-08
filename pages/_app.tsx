import { SWRConfig } from 'swr'
import type { AppProps } from 'next/app'
import axiosConfig from '@/api-client/axios-config'
import '@/styles/globals.css'
import { LayoutComponent } from '@/components/layouts'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosConfig.get(url),
        shouldRetryOnError: false,
      }}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </SWRConfig>
  )
}

export default MyApp
