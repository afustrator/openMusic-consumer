const { Pool } = require('pg')

class PlaylistsService {
  constructor () {
    this._pool = new Pool()
  }

  async getPlaylistsongs (playlistId) {
    const query = {
      text: `SELECT songs.* FROM playlists
      LEFT JOIN playlistsongs ON playlistsongs.playlist_id=playlists.id
      LEFT JOIN songs ON songs.id=playlistsongs.song_id
      WHERE playlists.id = $1`,
      values: [playlistId]
    }
    const result = await this._pool.query(query)
    console.log(result)
    return result.rows
  }
}

module.exports = PlaylistsService
