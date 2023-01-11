import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"

export default function Home({ }: NextPage) {
  return (
    <>
      <Layout title="Welcome" description="index">
        <div className="font-bold">
          Hello World.
          <Link href="/about">About</Link>
        </div>
      </Layout>
    </>
  )
}
