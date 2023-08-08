import { notifPerson } from '../../assets/data/data'
import MoreVertIcon from '@mui/icons-material/MoreVert';
// eslint-disable-next-line react/prop-types
const Inbox = ({ light }) => {
    return (
        <>
            <div className={`inbox card-${light}`}>
                <div className="inbox-header">
                    <h5 className={`color-${light}`}>Inbox</h5>
                    <MoreVertIcon className={`icon color-${light}`} />
                </div>
                {notifPerson.map(item => (
                    <div className="inbox-item" key={item.id}>
                        <div className="inbox-img">
                            <img src={item.pic} alt={item.fullName} />
                        </div>
                        <div className="inbox-info">
                            <span>
                                <h5 className={`color-${light}`}>{item.fullName}</h5>
                                <small>{item.textTime}</small>
                            </span>
                            <p>{item.message.substring(0, 20)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Inbox
