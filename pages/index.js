import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Container from '@components/Container'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <link href="https://fonts.googleapis.com/css?family=Solitreo" rel="stylesheet" />
      <Container />
      </main>

      <Footer />
    </div>
  )
}
