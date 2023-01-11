import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  title: string,
  description?: string,
  children: ReactNode,
}

export default function Layout({ title, description, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title} | Octomedia</title>
        <meta name="description" content={`Halaman layout ${description}`} />
      </Head>
      <h1>{title}</h1>
      {children}
    </div>
  )
}