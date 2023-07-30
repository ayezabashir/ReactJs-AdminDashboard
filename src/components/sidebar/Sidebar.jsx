import admin from '../../assets/images/adminimg.png'
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="content">
                    <div className="content-top">
                        <div className="image">
                            <img src={admin} alt="" />
                        </div>
                        <h4>Ayeza Bashir</h4>
                        <small>Admin Head</small>
                        <div className="icons">
                            <SettingsIcon className='icon' />
                            <PowerSettingsNewIcon className='icon' />
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="title">
                            <h5>Navigation</h5>
                            <div className="item">
                                <DashboardIcon className="icon" />
                                <p>Dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
