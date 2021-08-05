class Listener {
  constructor (playlistsongsService, mailSender) {
    this._playlistsongsService = playlistsongsService
    this._mailSender = mailSender

    this.listen = this.listen.bind(this)
  }

  async listen (message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString())

      const playlists = await this._playlistsongsService.getPlaylistsongs(playlistId)

      const result = await this._mailSender.sendMail(targetEmail, JSON.stringify(playlists))
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = Listener
