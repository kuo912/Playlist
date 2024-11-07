import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Artist from '../components/contents/Artist'
import VideoSlider from '../components/video/VideoSlider'

import { todayText } from '../data/today'
import { artistText } from '../data/artist'
import { playlistText } from '../data/playlist'
import { latestText } from '../data/latest'
import { musicvideoText } from '../data/musicvideo'
import { popText } from '../data/pop'
import { kpopText } from '../data/kpop'

const Home = () => {
  return (
    <Main 
      title="Home"
      description="정다영의 플레이리스트에 오신 것을 환영합니다."
    >
      <Today videos={todayText} id='today'/>
      <Artist videos={artistText} title='🎶 요즘 뜨는 아티스트, 놓치지 마세요!' id='artist'/>
      <VideoSlider videos={playlistText} title='😮 뭘 들을지 고민될 때는?' id='playlist' />
      <VideoSlider videos={latestText} title='😛 따끈따끈한 신곡 듣기' id='latest' />
      <VideoSlider videos={musicvideoText} title='🤩 지금 가장 핫한 뮤직비디오!' id='musicvideo' />
      <VideoSlider videos={popText} title='🎤 지금 핫한 팝송으로 트렌드 따라잡기!' id='pop' />
      <VideoSlider videos={kpopText} title='🌟 전 세계가 주목하는 K-POP 히트곡 모음!' id='kpop' />
      
    </Main>
  )
}

export default Home
