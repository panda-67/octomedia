import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import '../styles/index.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
   getLayout?: (page: ReactElement) => ReactNode
 }
 
 type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout
 }

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const getLayout = Component.getLayout ?? ((page) => page)

   return getLayout(<Component {...pageProps} />)
}

export default MyApp