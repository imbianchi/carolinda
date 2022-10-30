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
    const [penquinTooltip, setPenguinTooltip] = useState(false)

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
                <div
                    class="penguin"
                    onClick={() => setPenguinTooltip(!penquinTooltip)}
                >
                    <div class="penguin-bottom">
                        <div
                            class="right-hand"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Joaum mandou avisar que sempre fica com saudade quando nao ta perto 🥺 "
                        ></div>
                        <div
                            class="left-hand"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Joao tem uma admiracao incrivel por voce 😋 "
                        ></div>
                        <div
                            class="right-feet"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="JP tem dias que fica sinistrao de medo de te perder tambem 🤕  "
                        ></div>
                        <div
                            class="left-feet"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Sr. Bianchi as vezes fica tirando umas piras bem loca. Tipo pensar em casar. Oi? Casar? 😱 "
                        ></div>
                    </div>
                    <div class="penguin-top">
                        <div
                            class="right-cheek"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Joao me falou que te ama tanto, que passa a ser tortura a ideia de nao ficarem juntos 💟 "
                        ></div>
                        <div
                            class="left-cheek"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tem uma parada bem interessante acontecendo no coracao dele no momento 😇 "
                        ></div>
                        <div
                            class="belly"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Ele me disse que o coracao dele sempre fica quentinho quando imagina voces juntos viajando o mundo 🛫 "
                        ></div>
                        <div
                            class="right-eye"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Mr. Joao, adora quando voce sorri e quando ri das piadas idiotas dele 😅 "
                        >
                            <div class="sparkle"></div>
                        </div>
                        <div
                            class="left-eye"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Sr. Bianchi te espera todos os dias ansioso pela sua volta 🕗 "
                        >
                            <div class="sparkle"></div>
                        </div>
                        <div class="blush-right"></div>
                        <div class="blush-left"></div>
                        <div class="beak-top"></div>
                        <div class="beak-bottom"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}
