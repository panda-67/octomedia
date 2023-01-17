import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import Layout from '../components/layout'
import Logo from '../components/logo'
import { NextPageWithLayout } from './_app'

export default function About({ }: NextPageWithLayout) {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl hover:shadow-amber-500" />
          <div>
            <h1 className="text-5xl font-bold">Rampagoe!</h1>
            <div className='px-2 pt-8'><Logo size={140}/></div>
            <p className="py-6">Menerima pengerjaan pemetaan udara Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in possimus aliquam! Soluta exercitationem, voluptas iste illum ipsam officia? Quam officia, consectetur dignissimos voluptas cupiditate numquam modi id mollitia, molestiae neque exercitationem nisi quidem consequatur sed illum asperiores dolor. Odio omnis cumque corrupti possimus? Neque at nobis exercitationem deserunt, vero voluptate illo sapiente optio minus numquam, dolorum corporis. Quaerat, at</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
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
        <div className='p-6'>{page}</div>
      </Layout>
    </>
  )
}
