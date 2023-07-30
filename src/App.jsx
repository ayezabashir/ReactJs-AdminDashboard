import './App.scss'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react';
function App() {
  const [lightmode, setLightmMode] = useState(true);
  const switchModes = () => {
    setLightmMode(() => !lightmode);
  }
  return (
    <>
      <Header mode={switchModes} light={lightmode} />
      <Sidebar />
    </>
  )
}

export default App
