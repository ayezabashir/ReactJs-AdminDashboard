import './App.scss'
import Header from './components/header/Header'
// import Sidebar from './components/sidebar/Sidebar'
// import Users from './components/users/Users';
import Inbox from './components/inbox/Inbox';
import { useState } from 'react';
function App() {
  const [lightmode, setLightmMode] = useState(true);
  const switchModes = () => {
    setLightmMode(() => !lightmode);
  }
  return (
    <>
      <Header mode={switchModes} light={lightmode} />
      {/* <Sidebar /> */}
      {/* <Users /> */}
      <Inbox />
    </>
  )
}

export default App
