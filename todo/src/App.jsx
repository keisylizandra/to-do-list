//import { useState } from 'react'

import Booking from './components/Booking/Booking'
import Header from './components/Header/Header'

import './App.css';
import CheckboxesGroup from './components/CheckboxesGroup/CheckboxesGroup';

function App() {

  return (
  <div>
    <Header />

    <div className='screen'>

    <Booking />
    <CheckboxesGroup />

    </div>
  </div>
  )
}

export default App
