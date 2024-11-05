import React from 'react'
import { artistText } from '../../data/artist'
import { Link } from 'react-router-dom'

const Artist = () => {
  return (
    <section id='artistPage'>
      <h2>😪 추천 아티스트를 소개합니다.</h2>
      <div className="artist__inner overflow">
          {artistText.map((artist, key) => (
              <div className="artist" key={key}>
                <div className="artist__img play__icon">
                  <Link to={`/channel/${artist.channelId}`}>
                    <img src={artist.img} alt={artist.name} />
                  </Link>
                </div>
                <div className="artist__info">
                <Link to={`/channel/${artist.channelId}`}>
                    {artist.name}
                  </Link>
                </div>
              </div>
          ))}
        
        
      </div>
    </section>
  )
}

export default Artist