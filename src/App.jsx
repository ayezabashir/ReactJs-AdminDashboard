import './App.scss'
// import Header from './components/header/Header'
// import Sidebar from './components/sidebar/Sidebar'
// import Dashboard from './pages/Dashboard';
import Revenue from './components/charts/Revenue';
// import { useState } from 'react';
function App() {
  // const [lightmode, setLightmMode] = useState(true);
  // const switchModes = () => {
  //   setLightmMode(() => !lightmode);
  // }
  return (
    <>
      {/* <Header mode={switchModes} light={lightmode} /> */}
      {/* <main>
        <Sidebar />
        <Dashboard />
      </main> */}
      <Revenue />
    </>
  )
}

export default App
