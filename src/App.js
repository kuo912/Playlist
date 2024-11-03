import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Artist from './pages/Artist'
import Playlist from './pages/Playlist'
import Latest from './pages/Latest'
import Musicvideo from './pages/Musicvideo'
import Pop from './pages/Pop'
import Kpop from './pages/Kpop'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/artist' element={<Artist />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/musicvideo' element={<Musicvideo />} />
          <Route path='/pop' element={<Pop />} />
          <Route path='/kpop' element={<Kpop />} />
          <Route path='/channel/:channelID' element={<Channel />} />
          <Route path='/video/:videoID' element={<Video />} />
          <Route path='/search/:searchID' element={<Search />} />
          <Route path='/*' element={<Not />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App


