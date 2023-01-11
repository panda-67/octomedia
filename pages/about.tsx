import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout title="About">
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </Layout>
  )
}
