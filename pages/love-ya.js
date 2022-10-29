import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const feedbackText = [
    'Ja falei que te amo! hihi',
    'De novo? Quantas vezes preciso falar?',
    'Nao acredito, mais uma vez? 😬 ',
    'Ja disse que te amo mil vezes!',
    'Te amo, te amo, te amo!',
    'A nao, chega. Amo voce ta bom?',
    'hihi, nao cansa nao? 🤓 ',
    'Quantas vezes ja clicou nesse botao?',
    'hahaha nao canso de repetir 🌻 ',
    'Ja disse que te amo hoje?',
    'Quero viajar o mundo com voce',
    'Love ya babe!',
    'Ti amo - em italiano! 🇮🇹 ',
    "Je t'aime, em frances! 🇫🇷 ",
    "Quantas vezes mais?",
    "hihihihihihihih",
    'Que saudade hihi 💏 ',
    'Me beja 😽 ',
    'Amorzinho da minha vida 😘 ',
]

export default function LoveYa() {
    const [feedback, setFeedback] = useState('Amo voce tambem 💕')

    const handleClick = () => {

        const choosenText = feedbackText[Math.floor(Math.random() * feedbackText.length)]

        setFeedback(choosenText)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Love you! 😍 </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <button
                    type='button'
                    className='btn btn-lg btn-light'
                    onClick={handleClick}
                >
                    {
                        feedback
                    }
                </button>
            </main>
        </div>
    )
}
