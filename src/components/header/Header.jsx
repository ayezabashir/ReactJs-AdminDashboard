import logo from '../../assets/images/logo.png'
import admin from '../../assets/images/adminimg.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// eslint-disable-next-line react/prop-types
const Header = ({ mode, light }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="left">
                    <h2>Dashboard</h2>
                    <div className="display-mb">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <MenuIcon className='icon' />
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
