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
    const [feedback, setFeedback] = useState('Arraste o mouse para encontrar as mensagens ocultas na nossa nova amiga Srta. Picollina 😊 ')
    // const [penquinTooltip, setPenguinTooltip] = useState(false)

    // const handleClick = () => {

    //     const choosenText = feedbackText[Math.floor(Math.random() * feedbackText.length)]

    //     setFeedback(choosenText)
    // }

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
                // onClick={handleClick}
                >
                    {
                        feedback
                    }
                </button>
                <div
                    className="penguin"
                    // onClick={() => setPenguinTooltip(!penquinTooltip)}
                >
                    <div className="penguin-bottom">
                        <div
                            className="right-hand"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Joaum mandou avisar que sempre fica com saudade quando nao ta perto 🥺 "
                        ></div>
                        <div
                            className="left-hand"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Joao tem uma admiracao incrivel por voce 😋 "
                        ></div>
                        <div
                            className="right-feet"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="JP tem dias que fica sinistrao de medo de te perder tambem 🤕  "
                        ></div>
                        <div
                            className="left-feet"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Sr. Bianchi as vezes fica tirando umas piras bem loca. Tipo pensar em casar. Oi? Casar? 😱 "
                        ></div>
                    </div>
                    <div className="penguin-top">
                        <div
                            className="right-cheek"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Joao me falou que te ama tanto, que passa a ser tortura a ideia de nao ficarem juntos 💟 "
                        ></div>
                        <div
                            className="left-cheek"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Tem uma parada bem interessante acontecendo no coracao dele no momento 😇 "
                        ></div>
                        <div
                            className="belly"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Ele me disse que o coracao dele sempre fica quentinho quando imagina voces juntos viajando o mundo 🛫 "
                        ></div>
                        <div
                            className="right-eye"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Mr. Joao, adora quando voce sorri e quando ri das piadas idiotas dele 😅 "
                        >
                            <div className="sparkle"></div>
                        </div>
                        <div
                            className="left-eye"
                            data-toggle="tooltip"
                            data-placement="right"
                            trigger="click"
                            title="Sr. Bianchi te espera todos os dias ansioso pela sua volta 🕗 "
                        >
                            <div className="sparkle"></div>
                        </div>
                        <div className="blush-right"></div>
                        <div className="blush-left"></div>
                        <div className="beak-top"></div>
                        <div className="beak-bottom"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}
