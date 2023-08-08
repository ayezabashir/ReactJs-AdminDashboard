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
import Notification from './Notification';
import Account from './Account';
import { notifPerson } from '../../assets/data/data'
// eslint-disable-next-line react/prop-types
const Header = ({ mode, light }) => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [isNotifShown, setIsNotifShown] = useState(false);
    const [accountDrop, setAccountDrop] = useState(false);

    const handleSidebarClick = () => {
        setAccountDrop(false);
        setIsNotifShown(false);
        setIsSidebarShown(current => !current);
    };

    const handleNotifClick = () => {
        setAccountDrop(false);
        setIsSidebarShown(false);
        setIsNotifShown(current => !current);
    }

    const handleAccount = () => {
        setIsNotifShown(false);
        setIsSidebarShown(false);
        setAccountDrop(current => !current);
    }
    return (
        <header className={`header bg-${light}`}>
            <div className="container">
                <div className="left">
                    <div className="admin">
                        <div className={`image bg-${light}`}>
                            <img src={adminlogo} alt="" />
                        </div>
                        <h4 className={`color-${light}`}>Dashboard</h4>
                    </div>
                    <div className="display-mb">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <MenuIcon className={`icon color-${light}`} onClick={handleSidebarClick} />
                        {isSidebarShown && <Sidebar />}
                    </div>
                </div>
                <div className="right">
                    <div className="search">
                        <input type="search" className={`bg-${light} color-${light}`} placeholder='Search...' id="searchInput" />
                        <SearchIcon className={`icon color-${light}`} />
                    </div>
                    <div className='notif-content'>
                        <NotificationsNoneIcon className={`icon notif color-${light}`} onClick={handleNotifClick} />
                        <span className='span-notif'>{notifPerson.length}</span>
                        {isNotifShown && <Notification />}
                    </div>
                    <div className="admin" onClick={handleAccount}>
                        <img src={admin} alt="adminimg" />
                        <h4 className={`color-${light}`}>Ayeza</h4>
                        <KeyboardArrowDownIcon className={`icon color-${light}`} />
                        {accountDrop && <Account />}
                    </div>
                    <div onClick={mode}>
                        {light === 'light' ? <DarkModeIcon className={`icon color-${light}`} /> : <LightModeIcon className={`icon color-${light}`} />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
