import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { kpopText } from '../data/kpop'

const Kpop = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  },[]);

  const kpopPageClass = loading ? 'isLoading':'isLoaded'

  return (
    <Main
      title="K-pop"
      description="K-pop을 추천합니다."
    >
      <section id='kpopPage' className={kpopPageClass}>
      <h2>😘 국내 인기 케이팝</h2>
        <div className="video__inner">
          <VideoCard videos={kpopText}/>
        </div>
      </section>
    </Main>
  )
}

export default Kpop
