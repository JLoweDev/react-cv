import { useState, useEffect } from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header title='React CV App'/>
      <GeneralInfo />
    </div>
  )
}

export default App;
