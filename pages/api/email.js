import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASSWORD
    }
})

const options = {
    from: process.env.MAIL_SENDER,
    to: process.env.MAIL_RECIPIENT,
    subject: "Amorzinho da minha vida 💮  ",
    html: `
    <!DOCTYPE html>'+
        <html>
            <head>
                <title>Branquela</title>
            </head>
        <body>
            <div>
                Branquela, se me ama de verdade verdadeira,
                <a href="https://imbianchi.github.io/carolinda/love-ya" target="_blank"> 
                    clica aqui hehe
                </a>
            </div>
        </body>
        </html>
    `
}


export default function handler(req, res) {

    try {
        transporter.sendMail(options, (error, info) => {
            if (error) {
                return error
            } else {
                return res.status(200).end(JSON.stringify({ message: 'Mail sent!', info }))
            }
        })
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error", error: e }))
        return;
    }
}