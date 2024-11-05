import React from 'react'

import { latestText } from '../../../data/latest'
import { Link } from 'react-router-dom'

const Latest = () => {
  return (
    <section id='Latest'>
      <h2>😛 따끈따끈한 신곡 듣기</h2>
      <div className="video__inner">
        {latestText.map((video, key) => (
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

export default Latest
