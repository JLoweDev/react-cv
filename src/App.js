import { useState, useEffect } from 'react'
import Header from './components/Header'
import InfoCont from './components/InfoCont'
import Footer from './components/Footer'

function App() {
  const [showEditGeneral, setShowEditGeneral] = useState(false)
  const [showEditEducational, setShowEditEducational] = useState(false)
  const [showEditPractical, setShowEditPractical] = useState(false)

  return (
    <div>
      <Header title='React CV App'/>
      <InfoCont 
        onToggleGeneral={() => setShowEditGeneral(!showEditGeneral)} 
        onToggleEducational={() => setShowEditEducational(!showEditEducational)} 
        onTogglePractical={() => setShowEditPractical(!showEditPractical)}
      />
    </div>
  )
}

export default App;
