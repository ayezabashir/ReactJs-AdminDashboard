import { notifPerson } from '../../assets/data/data'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Inbox = () => {
    return (
        <>
            <div className="inbox">
                <div className="inbox-header">
                    <h5>Inbox</h5>
                    <MoreVertIcon className='icon' />
                </div>
                {notifPerson.map(item => (
                    <div className="inbox-item" key={item.id}>
                        <div className="inbox-img">
                            <img src={item.pic} alt={item.fullName} />
                        </div>
                        <div className="inbox-info">
                            <span>
                                <h5>{item.fullName}</h5>
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
