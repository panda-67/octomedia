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
  const router = useRouter().pathname
  return (
    <>
      <Head>
        <title>{title} | Octomedia</title>
        <meta name="description" content="Octomedia" />
      </Head>
      <Navbar desain={router === '/' ? 'bg-transparent text-gray-100 relative z-30' : ''} />
      <div className={`${router === '/' ? 'absolute' : ''} top-0`}>
        {children}
      </div>
    </>
  )
}