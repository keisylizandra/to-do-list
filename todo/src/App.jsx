//import { useState } from 'react'
import { Grid } from '@mui/material'
import Booking from './components/Booking/Booking'
import Header from './components/Header/Header'
import Planner from './components/Planner/Planner';

import './App.css';

function App() {

  return (
  <div>
    <Header />

    <div className='screen'>
    <Booking />
    <Planner />

    </div>
  </div>
  )
}

export default App
