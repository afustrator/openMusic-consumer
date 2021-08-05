const nodemailer = require('nodemailer')

class MailSender {
  constructor () {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
      }
    })
  }

  sendMail (targetEmail, content) {
    const message = {
      from: 'Songs Apps',
      to: targetEmail,
      subject: 'Ekspor Song Dari Playlist',
      text: 'Terlampir hasil dari ekspor song',
      attachments: [
        {
          filename: 'songs.json',
          content
        }
      ]
    }

    return this._transporter.sendMail(message)
  }
}

module.exports = MailSender
