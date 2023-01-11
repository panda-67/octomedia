import Head from "next/head"
import Link from "next/link"
import { ReactElement } from "react"
import Layout from "../components/layout"
import { NextPageWithLayout } from "./_app"

export default function Home({ }: NextPageWithLayout) {
  return (
    <div className="font-bold">
      Hello World.
      <Link href="/about">About</Link>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome" key="" />
      </Head>
      <Layout title="Welcome">
        {page}
      </Layout>
    </>
  )
}
