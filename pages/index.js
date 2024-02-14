import Head from 'next/head'
import Song from 'components/Song'

import Container from '@components/Container'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Happy Valentines Pia My love</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <link href="https://fonts.googleapis.com/css?family=Solitreo" rel="stylesheet" />
      <Container />
      <Song />
      </main>

      
    </div>
  )
}
