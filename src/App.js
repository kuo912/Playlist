import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Artist = lazy(() => import('./pages/Artist'));
const Playlist = lazy(() => import('./pages/Playlist'));
const Latest = lazy(() => import('./pages/Latest'));
const Musicvideo = lazy(() => import('./pages/Musicvideo'));
const Pop = lazy(() => import('./pages/Pop'));
const Kpop = lazy(() => import('./pages/Kpop'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
