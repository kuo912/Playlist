import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/videos/VideoCard'

import { musicvideoText } from '../data/musicvideo'

const Musicvideo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  },[]);

  const musicvideoPageClass = loading ? 'isLoading':'isLoaded'

  return (
    <Main
       title="Music video"
      description="뮤직비디오를 추천합니다."
    >
      <section id='musicvideoPage' className={musicvideoPageClass}>
      <h2>🤩 지금 가장 핫한 뮤직비디오!</h2>
        <div className="video__inner">
          <VideoCard videos={musicvideoText}/>
        </div>
      </section>
    </Main>
  )
}

export default Musicvideo
