import './App.scss'
import Header from './components/header/Header'
import { useState } from 'react';
function App() {
  const [lightmode, setLightmMode] = useState(true);
  const switchModes = () => {
    setLightmMode(() => !lightmode);
  }
  return (
    <>
      <Header mode={switchModes} light={lightmode} />
    </>
  )
}

export default App
