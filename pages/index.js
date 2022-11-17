import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Gorgeous 😍 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          type='button'
          className='btn btn-lg btn-light'
          onClick={() => window.location.href = 'https://imbianchi.github.io/carolinda/love-ya'}
        >
          Nunca mais nem abriu o sitezinho que fiz pro amorzinho
        </button>
      </main>
    </div>
  )
}
