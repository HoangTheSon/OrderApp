import React from 'react'
import HeaderHome from './components/HeaderHome'
import { Outlet } from 'react-router-dom'
import FooterHome from './components/FooterHome'

const App = () => {
  return (
    <div className='home-page'>
        <HeaderHome />
      <div className='Content'>
        <Outlet />
      </div>
      <div className='Footer-home'>
        <FooterHome/>
      </div>
    </div>
  )
}

export default App