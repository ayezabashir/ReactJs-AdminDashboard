import { notifPerson } from '../../assets/data/data'

const Notification = () => {
    return (
        <>
            <span className="notification">
                <div className="notif-header ">
                    <h5>Notifcation</h5>
                    <h6>Clear All</h6>
                </div>
                <div className="notif-body">
                    {notifPerson.map(item => (
                        <div className="inbox" key={item.id}>
                            <img src={item.pic} alt={item.fullName} />
                            <span>
                                <h5>{item.fullName}</h5>
                                <p>{item.message}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Notification
