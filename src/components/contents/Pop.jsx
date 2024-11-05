import React from 'react'
import { popText } from '../../../data/pop'
import { Link } from 'react-router-dom'

const Pop = () => {
  return (
    <section id='Pop'>
      <h2>🤗 세계가 주목하는 팝</h2>
      <div className="video__inner">
        {popText.map((video, key) => (
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

export default Pop
