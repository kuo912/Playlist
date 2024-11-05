import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Artist from '../components/contents/Artist'

import VideoSlider from '../components/video/VideoSlider'

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
      <Today />
      <Artist />
      <VideoSlider videos={playlistText} title='😮 뭘 들을지 고민될 때는?' id='playlist' />
      <VideoSlider videos={latestText} title='😛 따끈따끈한 신곡 듣기' id='latest' />
      <VideoSlider videos={musicvideoText} title='🤩 지금 가장 핫한 뮤직비디오!' id='musicvideo' />
      <VideoSlider videos={popText} title='🤗 세계가 주목하는 팝' id='pop' />
      <VideoSlider videos={kpopText} title='😘 국내 인기 케이팝' id='kpop' />
      
    </Main>
  )
}

export default Home
