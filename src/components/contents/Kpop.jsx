import React from 'react'
import { kpopText } from '../../../data/kpop'
import { Link } from 'react-router-dom'

const Kpop = () => {
  return (
    <section id='Kpop'>
      <h2>😘 국내 인기 케이팝</h2>
      <div className="video__inner">
        {kpopText.map((video, key) => (
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

export default Kpop
