import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Footer from './footer'
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
        <title>{title} | Rampagoe Aerial</title>
        <meta name="description" content="Rampagoe Aerial" />
      </Head>
      <Navbar desain={router === '/' ? 'bg-transparent text-gray-100 relative z-30' : ''} />
      <div className={`${router === '/' ? '-mt-[83px]' : ''} top-0`}>
        {children}
      </div>
      <div className=''><Footer /></div>
    </>
  )
}