import { ReactElement } from "react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { NextPageWithLayout } from "./_app"
import Layout from "../components/layout"
import Card from "../components/card"
import Welcome from '/public/img/hero.jpg'
import Potrait from '/public/img/welcome.jpg'

export default function Home({ }: NextPageWithLayout) {
  return (
    <>
      <div className="hero">
        <Image alt="Welcome" src={Welcome} width={2160} height={0} className="relative object-cover h-screen" />
        <div className="hero h-screen absolute bg-emerald-900 opacity-40"></div>
        <div className="hero-content max-h-screen flex-col md:flex-row-reverse lg:gap-12 -translate-y-4">
          <Image alt="Welcome" src={Potrait} className="w-44 h-64 lg:w-[260px] lg:h-[400px] object-cover rounded-lg shadow-lg hover:shadow-amber-500" />
          <div className="text-gray-100 mx-auto text-center lg:text-right">
            <h1 className="text-5xl font-bold">Drone UAV Mapping</h1>
            <p className="py-6">The perspective from above with georeferences.</p>
            <Link href='/#start' scroll={false} className="btn hover:border-b-slate-100 border-b-4 btn-warning">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 place-items-center relative gap-4 -top-8 lg:-top-6 z-20 px-[20%]">
        <Card>Buy Now</Card>
        <Card>Buy Now</Card>
        <Card>Buy Now</Card>
      </div>
      <div id="start" className="-mt-44 lg:-mt-80 relative h-[1000px] bg-slate-400 flex flex-col justify-end">
      </div>
    </>
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
