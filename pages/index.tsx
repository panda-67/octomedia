import { ReactElement } from "react"
import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"
import { NextPageWithLayout } from "./_app"
import Image from "next/image"
import Welcome from '/public/img/hero.jpg'
import Potrait from '/public/img/welcome.jpg'

export default function Home({ }: NextPageWithLayout) {
  return (
    <>
      <div className="hero">
        <Image alt="Welcome" src={Welcome} width={2160} height={0} className="relative object-cover h-screen" />
        <div className="hero h-screen absolute bg-emerald-900 opacity-40"></div>
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12 -translate-y-4">
          <Image alt="Welcome" src={Potrait} className=" w-[260px] h-[400px] object-cover rounded-lg shadow-lg hover:shadow-amber-500" />
          <div className="text-gray-100 mx-auto text-center lg:text-right">
            <h1 className="text-5xl font-bold">Drone UAV Mapping</h1>
            <p className="py-6">The perspective from above with georeferences.</p>
            <Link href='/#start' scroll={false} className="btn hover:border-b-slate-100 border-b-4 btn-warning">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center relative gap-4 -top-6 z-20 px-[20%]">
        <div className="card w-60 h-24 bg-base-100 shadow-xl hover:shadow-emerald-800 image-full">
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div><div className="card w-60 h-24 bg-base-100 shadow-xl hover:shadow-emerald-800 image-full">
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div><div className="card w-60 h-24 bg-base-100 shadow-xl hover:shadow-emerald-800 image-full">
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div id="start" className="-mt-24 relative h-[1000px] bg-slate-400 flex flex-col justify-end">
        <h1 className="text-5xl font-bold">Drone UAV Mapping Start</h1>
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
