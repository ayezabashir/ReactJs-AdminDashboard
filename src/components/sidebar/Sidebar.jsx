import admin from '../../assets/images/adminimg.png'
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ForumIcon from '@mui/icons-material/Forum';
import GridOnIcon from '@mui/icons-material/GridOn';
import AddchartIcon from '@mui/icons-material/Addchart';
import MapIcon from '@mui/icons-material/Map';
import ShareIcon from '@mui/icons-material/Share';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="content">
                    <div className="content-top">
                        <div className="image">
                            <img src={admin} alt="" className='thumbnail' />
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
                        <div className="title">
                            <h5>Apps</h5>
                            <div className="item">
                                <CalendarTodayIcon className="icon" />
                                <p>Calender</p>
                            </div>
                            <div className="item">
                                <ChatBubbleOutlineIcon className="icon" />
                                <p>Chat</p>
                            </div>
                            <div className="item">
                                <MailOutlineIcon className="icon" />
                                <p>Email</p>
                            </div>
                            <div className="item">
                                <ContentPasteIcon className="icon" />
                                <p>Tasks</p>
                            </div>
                            <div className="item">
                                <BusinessCenterIcon className="icon" />
                                <p>Projects</p>
                            </div>
                            <div className="item">
                                <ImportContactsIcon className="icon" />
                                <p>Contacts</p>
                            </div>
                        </div>
                        <div className="title">
                            <h5>Custom</h5>
                            <div className="item">
                                <PersonAddAlt1Icon className="icon" />
                                <p>Auth Pages</p>
                            </div>
                            <div className="item">
                                <NoteAddIcon className="icon" />
                                <p>Extra Pages</p>
                            </div>
                            <div className="item">
                                <ViewArrayIcon className="icon" />
                                <p>Laoyouts</p>
                            </div>

                        </div>
                        <div className="title">
                            <h5>Componets</h5>
                            <div className="item">
                                <WorkOutlineIcon className="icon" />
                                <p>Base UI</p>
                            </div>
                            <div className="item">
                                <CardGiftcardIcon className="icon" />
                                <p>Widgets</p>
                            </div>
                            <div className="item">
                                <AddBusinessIcon className="icon" />
                                <p>Extended UI</p>
                            </div>
                            <div className="item">
                                <HealthAndSafetyIcon className="icon" />
                                <p>Icons</p>
                            </div>
                            <div className="item">
                                <ForumIcon className="icon" />
                                <p>Forms</p>
                            </div>
                            <div className="item">
                                <GridOnIcon className="icon" />
                                <p>Tables</p>
                            </div>
                            <div className="item">
                                <AddchartIcon className="icon" />
                                <p>Charts</p>
                            </div>
                            <div className="item">
                                <MapIcon className="icon" />
                                <p>Maps</p>
                            </div>
                            <div className="item">
                                <ShareIcon className="icon" />
                                <p>Multi Level</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
