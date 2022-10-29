import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gorgeous 😍 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        CAROLINDA
        <Link href={'/teste'}>TESTEEEEEEEEEEEe</Link>

        <Image src={'/niagara.jpeg'} width={300} height={300} />
      </main>
    </div>
  )
}
