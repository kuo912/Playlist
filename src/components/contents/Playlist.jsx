import React from 'react'
import { Link } from 'react-router-dom'
import { playlistText } from '../../../data/playlist'

const Playlist = () => {
  return (
    <section id='playlist'>
      <h2>😮 뭘 들을지 고민될 때는?</h2>
      <div className="video__inner">
        {playlistText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Playlist
