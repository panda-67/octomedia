import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Navbar from './navbar'

type Props = {
  title: string,
  description?: string,
  children: ReactNode,
}

export default function Layout({ title, children }: Props) {
  const router = useRouter()
  const home = router.pathname
  return (
    <>
      <Head>
        <title>{title} | Octomedia</title>
        <meta name="description" content="Octomedia" />
      </Head>
      <Navbar desain={home === '/' ? 'bg-transparent text-gray-100 relative z-30' : ''} />
      <div className={`${home === '/' ? 'absolute' : ''} top-0`}>
        {children}
      </div>
    </>
  )
}