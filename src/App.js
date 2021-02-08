import { useState, useEffect } from 'react'
import Header from './components/Header'
import InfoCont from './components/InfoCont'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header title='React CV App'/>
      <InfoCont />
    </div>
  )
}

export default App;
