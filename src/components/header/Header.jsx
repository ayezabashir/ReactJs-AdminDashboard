import logo from '../../assets/images/logo.png'
import admin from '../../assets/images/adminimg.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
const Header = () => {
    const [lightmode, setLightmMode] = useState(true);
    const switchModes = () => {
        setLightmMode(() => !lightmode);
    }
    return (
        <header className="header">
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <MenuIcon className='icon' />
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <NotificationsNoneIcon className='icon' />
                    <div className="admin">
                        <img src={admin} alt="adminimg" />
                    </div>
                    <div onClick={switchModes}>
                        {lightmode ? <DarkModeIcon className='icon' /> : <LightModeIcon className='icon' />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
