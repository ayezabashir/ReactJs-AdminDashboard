/* eslint-disable react/prop-types */
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

const Sidebar = ({ light }) => {
    return (
        <>
            <div className={`sidebar sidebar-${light}`}>
                <div className="content">
                    <div className="content-top">
                        <div className="image">
                            <img src={admin} alt="" className='thumbnail' />
                        </div>
                        <h4 className={`color-${light}`}>Ayeza Bashir</h4>
                        <small>Admin Head</small>
                        <div className="icons">
                            <SettingsIcon className={`icon color-${light}`} />
                            <PowerSettingsNewIcon className={`icon color-${light}`} />
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="title">
                            <h5 className={`color-${light}`}>Navigation</h5>
                            <div className="item">
                                <DashboardIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Dashboard</p>
                            </div>
                        </div>
                        <div className="title">
                            <h5 className={`color-${light}`}>Apps</h5>
                            <div className="item">
                                <CalendarTodayIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Calender</p>
                            </div>
                            <div className="item">
                                <ChatBubbleOutlineIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Chat</p>
                            </div>
                            <div className="item">
                                <MailOutlineIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Email</p>
                            </div>
                            <div className="item">
                                <ContentPasteIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Tasks</p>
                            </div>
                            <div className="item">
                                <BusinessCenterIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Projects</p>
                            </div>
                            <div className="item">
                                <ImportContactsIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Contacts</p>
                            </div>
                        </div>
                        <div className="title">
                            <h5 className={`color-${light}`}>Custom</h5>
                            <div className="item">
                                <PersonAddAlt1Icon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Auth Pages</p>
                            </div>
                            <div className="item">
                                <NoteAddIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Extra Pages</p>
                            </div>
                            <div className="item">
                                <ViewArrayIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Laoyouts</p>
                            </div>

                        </div>
                        <div className="title">
                            <h5 className={`color-${light}`}>Componets</h5>
                            <div className="item">
                                <WorkOutlineIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Base UI</p>
                            </div>
                            <div className="item">
                                <CardGiftcardIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Widgets</p>
                            </div>
                            <div className="item">
                                <AddBusinessIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Extended UI</p>
                            </div>
                            <div className="item">
                                <HealthAndSafetyIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Icons</p>
                            </div>
                            <div className="item">
                                <ForumIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Forms</p>
                            </div>
                            <div className="item">
                                <GridOnIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Tables</p>
                            </div>
                            <div className="item">
                                <AddchartIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Charts</p>
                            </div>
                            <div className="item">
                                <MapIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Maps</p>
                            </div>
                            <div className="item">
                                <ShareIcon className={`icon color-${light}`} />
                                <p className={`color-${light}`}>Multi Level</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
