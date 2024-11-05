import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { playlistText } from '../data/playlist'

const Playlist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  },[]);

  const playlistPageClass = loading ? 'isLoading':'isLoaded'

  return (
    <Main
      title="Playlist"
      description="플레이리스트를 추천합니다."
    >
      <section id='playlistPage' className={playlistPageClass}>
        <h2>😮 뭘 들을지 고민될 때는?</h2>
        <div className="video__inner">
          <VideoCard videos={playlistText}/>
        </div>
      </section>
    </Main>
  )
}

export default Playlist
