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
            <Link href='/#start' scroll={false} className="btn hover:border-b-emerald-600 border-b-4 btn-warning">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 place-items-center relative gap-4 -top-3 lg:-top-6 z-20 px-[20%]">
        <Card src={Welcome}>Contact</Card>
        <Card src={Potrait}>Product</Card>
        <Card src={Welcome}>Example</Card>
        
      </div>
      <div id="start" className="-mt-[272px] lg:-mt-[368px] relative h-auto bg-slate-100 flex flex-col mx-auto">

        <div className='hero rounded-xl px-12 py-10 flex flex-col justify-end h-screen'>
          <Image alt="Welcome" src={Potrait} width={2160} height={0} className="relative object-cover rounded-xl h-3/4 md:h-full" />
          <div className="absolute mx-6 rounded-xl p-8 h-[500px] md:h-[340px] lg:h-[540px] flex flex-col justify-end text-gray-200 bg-gradient-to-t from-stone-900 to-transparent">
            <p className="text-[13px] md:text-base lg:text-lg">Menerima pengerjaan pemetaan udara Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in possimus aliquam! Soluta exercitationem, voluptas iste illum ipsam officia? Quam officia, consectetur dignissimos voluptas cupiditate numquam modi id mollitia, molestiae neque exercitationem nisi quidem consequatur sed illum asperiores dolor. Odio omnis cumque corrupti possimus? Neque at nobis exercitationem deserunt, vero voluptate illo sapiente optio minus numquam, dolorum corporis. Quaerat, at!</p>
          </div>
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to Rampagoe Aerial Sureveys." key="" />
      </Head>
      <Layout title="Welcome">
        {page}
      </Layout>
    </>
  )
}
