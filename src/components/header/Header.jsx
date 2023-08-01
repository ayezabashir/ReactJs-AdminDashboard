import logo from '../../assets/images/logo.png'
import adminlogo from '../../assets/images/adminlogo.png'
import admin from '../../assets/images/adminimg.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Sidebar from '../sidebar/Sidebar'
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const Header = ({ mode, light }) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };
    return (
        <header className="header">
            <div className="container">
                <div className="left">
                    <div className="admin">
                        <div className="image">
                            <img src={adminlogo} alt="" />
                        </div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="display-mb">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <MenuIcon className='icon' onClick={handleClick} />
                        {isShown && <Sidebar />}
                    </div>
                </div>
                <div className="right">
                    <div className="search">
                        <input type="search" placeholder='Search...' id="searchInput" />
                        <SearchIcon className='icon' />
                    </div>
                    <NotificationsNoneIcon className='icon' />
                    <div className="admin">
                        <img src={admin} alt="adminimg" />
                        <h4>Ayeza</h4>
                        <KeyboardArrowDownIcon className='icon' />
                    </div>
                    <div onClick={mode}>
                        {light ? <DarkModeIcon className='icon' /> : <LightModeIcon className='icon' />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
