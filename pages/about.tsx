import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import Layout from '../components/layout'
import { NextPageWithLayout } from './_app'

export default function About({ }: NextPageWithLayout) {
  return (
    <div>
      About Octomedia
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <meta name="description" content="About" key="" />
      </Head>
      <Layout title="About">
        <div className='py-16 px-12'>{page}</div>
      </Layout>
    </>
  )
}
