import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/videos/VideoCard'

import { popText } from '../data/pop'

const Pop = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  },[]);

  const popPageClass = loading ? 'isLoading':'isLoaded'

  return (
    <Main
       title="Pop"
      description="Pop 음악을 추천합니다."
    >
      <section id='popPage' className={popPageClass}>
      <h2>🤗 세계가 주목하는 팝</h2>
        <div className="video__inner">
          <VideoCard videos={popText}/>
        </div>
      </section>
    </Main>
  )
}

export default Pop
