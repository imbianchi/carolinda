import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState('Clique aqui hihi 💃')

  const Spinner = () => {
    return (
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }

  const handleClick = () => {

    setFeedback('Sending email...')
    setLoading(true)

    axios.post('http://localhost:3000/api/email')
      .then((res) => {

        if (res.status === 200) {
          setLoading(false)
          setFeedback('Email sent! Check you inbox 😻 ')

          return
        }

        setFeedback('Somenthing went wrong 🙄 Refresh the page and try again! 🐱')

      }
      ).catch(
        (e) => console.log(e)
      )

  }

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
          onClick={feedback != 'Email sent! Check you inbox 😻 ' ? handleClick : () => { }}
        >
          {
            feedback
          }
        </button>
        <div className='mt-3'>
          {
            loading && Spinner()
          }
        </div>
      </main>
    </div>
  )
}
