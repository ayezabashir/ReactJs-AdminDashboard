import './App.scss'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
function App() {
  const [lightmode, setLightmMode] = useState('light');
  const switchModes = () => {
    if (lightmode === 'light') {
      setLightmMode('dark');
    } else {
      setLightmMode('light');
    }
  }
  return (
    <>
      <Header mode={switchModes} light={lightmode} />
      <main>
        <Sidebar light={lightmode} />
        <Dashboard />
      </main>
    </>
  )
}

export default App
