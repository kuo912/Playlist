import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { latestText } from '../data/latest'


const Latest = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  },[]);

  const latestPageClass = loading ? 'isLoading':'isLoaded'


  return (
    <Main
      title="Latest"
      description="최신음악을 추천합니다."
    >
      <section id='latestPage' className={latestPageClass}>
        <h2>😛 따끈따끈한 신곡 듣기</h2>
        <div className="video__inner">
          <VideoCard videos={latestText}/>
        </div>
      </section>
    </Main>
  )
}

export default Latest
